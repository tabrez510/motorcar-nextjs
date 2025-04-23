"use client"

// import withAuthLayout from "@/components/layouts/AuthLayout";
import { Container, FormContainer, Illustration, LeftSection, LinkText, NormalText, RightSection, StyledButton, Title, WelcomeText } from "./verifycode.styles";
import OtpInput from "@/components/common/input/NumberSelector";
import { useRouter } from "next/navigation";
import { useState, useEffect, use, useRef} from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import {logInUser} from "@/redux/slice/authSlice";
import { useSignupCorporateMutation } from "@/redux/api/authApi";
import { requestForToken } from "@/utils/firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "@/utils/firebase";

function VerifyPage({searchParams}) {
    const router = useRouter();
    const [sessionChecked, setSessionChecked] = useState(false);
    const searchParam = use(searchParams);
    const [otp, setOtp] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const dispatch = useDispatch();
    const [signupCorporate, { isLoading }] = useSignupCorporateMutation();
    const [fcmToken, setFcmToken] = useState(null);
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

    useEffect(() => {
        const getFcmToken = async () => {
            try {
                const token = await requestForToken();
                setFcmToken(token);
            } catch (error) {
                console.error('Failed to get FCM token:', error);
            }
        };
    
        if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
            navigator.serviceWorker
                .register('/firebase-messaging-sw.js', { scope: '/' })
                .then(() => {
                    // Service worker registered, now get token
                    getFcmToken();
                })
                .catch(console.error);
        }
    }, []);

    useEffect(() => {
        const phone = searchParam.phone;
        if (phone) {
            setPhoneNumber(phone);
        }
    }, [searchParam]);
    
    const handleSubmit = async() => {
        try {
            const confirmationResult = window.confirmationResult;
            if (!confirmationResult) {
                toast.error("No OTP session found");
                router.push("/signup/corporate-signup");
            }
            const result = await confirmationResult.confirm(otp);
            const formData = new FormData();
            formData.append("phone", phoneNumber);
            formData.append("countrycode", "+971");
            if(fcmToken) {
                formData.append("fcm_token", fcmToken);
            }
            const data = await signupCorporate(formData).unwrap();
            if(!data.status) {
                toast.error(data.message);
                return;
            }
            dispatch(logInUser({ user: data.data, accessToken: data.accessToken }));
            toast.success("Phone number verified successfully!");
            window.recaptchaVerifier.clear();
            window.recaptchaVerifier = null;
            window.confirmationResult = null;
            router.push("/signup/corporate-signup/details");
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
          router.push("/signup/corporate-signup");
        } else {
            setSessionChecked(true);
        }
    }, []);
    if (!sessionChecked) return null;

    return (
        <Container>
            <LeftSection>
                <WelcomeText><span style={{ color: "#FFD300" }}>Join Now! {" "} </span> Discover or Offer Trusted Car Services.</WelcomeText>
                <Illustration src="/icons/signup-background.svg" alt="signup Background" />
            </LeftSection>

            <RightSection>
                <FormContainer>
                    <Title>Create  <span style={{ color: "#FFC107" }}>Account</span></Title>
                    <Title fontSize={'1.4rem'}>Confirm Code</Title>

                    <NormalText color="#898989">Enter the 6 Digit Code sent to  <span style={{ color: "#FFC107" }}>+971{phoneNumber}</span></NormalText>

                    <OtpInput length={6} onChangeOTP={(val) => setOtp(val)}/>
                    <StyledButton 
                        onClick={handleSubmit}
                        disabled={otp.length !== 6 || isLoading} 
                        variant="contained"
                    >
                        {isLoading? "Verifying..." : "verify"}
                    </StyledButton>

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