"use client"

// import withAuthLayout from "@/components/layouts/AuthLayout";
import { Container, FormContainer, Illustration, LeftSection, LinkText, NormalText, RightSection, StyledButton, Title, WelcomeText } from "./verify.styles";
import OtpInput from "@/components/common/input/NumberSelector";
import { useState, useEffect, use, useRef} from "react";
import { useRouter } from "next/navigation";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "@/utils/firebase";
import toast from "react-hot-toast";

function VerifyPage({searchParams}) {
    const [otp, setOtp] = useState("");
    const [sessionChecked, setSessionChecked] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState("");
    const searchParam = use(searchParams);
    const router = useRouter();
    const [resendTimer, setResendTimer] = useState(5);
    const [resendEnabled, setResendEnabled] = useState(false);
    const intervalRef = useRef(null);

    const initializeRecaptcha = () => {
        
        if (!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
                size: 'invisible',
                callback: (response) => {
                    // console.log('reCAPTCHA resolved:', response);
                },
            });
        }
    };

    useEffect(() => {
        const phone = searchParam.phone;
        if (phone) {
            setPhoneNumber(phone);
        }
    }, [searchParam]);

    useEffect(() => {
        if (resendTimer > 0) {
            setResendEnabled(false);
            intervalRef.current = setTimeout(() => {
                setResendTimer(prev => prev - 1);
            }, 1000);
        } else {
            setResendEnabled(true);
        }
        return () => clearTimeout(intervalRef.current);
    }, [resendTimer]);
    const handleSubmit = async() => {
        try {
            console.log("OTP submitted:", otp);
            const confirmationResult = window.confirmationResult;
            if (!confirmationResult) {
                toast.error("No OTP session found");
                router.push("/signup/corporate-signup");
            }
            const result = await confirmationResult.confirm(otp);
            router.push(`/forgot-password/reset?phone=${encodeURIComponent(phoneNumber)}`);
            
        } catch (error) {
            console.error("OTP verification error:", error);
            toast.error("Invalid code. Please try again.");
        }
    };

    const handleResend = async () => {
        try {
            const phone = `+971${phoneNumber}`;
        
            initializeRecaptcha();
        
            const appVerifier = window.recaptchaVerifier;
        
            const confirmationResult = await signInWithPhoneNumber(auth, phone, appVerifier);
            window.confirmationResult = confirmationResult;
        
            toast.success("OTP resent successfully!");
            setResendTimer(5);
            setResendEnabled(false);
        } catch (error) {
            console.error("Resend OTP error:", error);
            toast.error("Failed to resend OTP");
        }
    };

    useEffect(() => {
        return () => {
            if (window.recaptchaVerifier) {
            window.recaptchaVerifier.clear();
            window.recaptchaVerifier = null;
            }
        };
    }, []);

    useEffect(() => {
        const handleBeforeUnload = (e) => {
            e.preventDefault();
            e.returnValue = '';
        };
        
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => window.removeEventListener('beforeunload', handleBeforeUnload);
    }, []);

    useEffect(() => {
        if (!window.confirmationResult) {
            router.push("/forgot-password");
        } else {
            setSessionChecked(true);
        }
    }, []);
    if (!sessionChecked) return null;
    return (
        <Container>
            <LeftSection>
                <WelcomeText><span style={{ color: "#FFD300" }}>Reset Your Password. </span> Secure Your Account Easily.</WelcomeText>
                <Illustration src="/icons/verify-background.svg" alt="verify Background" />
            </LeftSection>

            <RightSection>
                <FormContainer>
                    <Title>Forgot <span style={{ color: "#FFC107" }}>Password</span></Title>
                    <Title fontSize={'1.4rem'}>Verify Code</Title>

                    <NormalText color="#898989">Enter the 6 Digit Code sent to <span style={{ color: "#FFC107" }}>+971{phoneNumber}</span></NormalText>

                    <OtpInput length={6} onChangeOTP={(val) => setOtp(val)}/>
                    <StyledButton disabled={otp.length !== 6} onClick={handleSubmit} variant="contained">Reset</StyledButton>

                    <LinkText align="center" color="#898989">
                        I didn't receive the code!{" "}
                        {resendEnabled ? (
                            <span style={{ color: "#FFC107", cursor: "pointer" }} onClick={handleResend}>
                                Resend
                            </span>
                        ) : (
                            <span style={{ color: "#FFC107" }}>Resend in {resendTimer}s</span>
                        )}
                    </LinkText>
                </FormContainer>
                <div id="recaptcha-container"></div>
            </RightSection>
        </Container>
    )
}

export default VerifyPage;