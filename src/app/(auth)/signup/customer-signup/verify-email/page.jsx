"use client"

// import withAuthLayout from "@/components/layouts/AuthLayout";
import { Container, FormContainer, Illustration, LeftSection, LinkText, NormalText, RightSection, StyledButton, Title, WelcomeText } from "./verifycode.styles";
import OtpInput from "@/components/common/input/NumberSelector";
import { useRouter } from "next/navigation";
import { useState } from "react";

function VerifyPage() {
    const router = useRouter();
    const [otp, setOtp] = useState("");

    const handleSubmit = () => {
        console.log("OTP submitted:", otp);
        router.push('/');
    };

    return (
        <Container>
            <LeftSection>
                <WelcomeText><span style={{ color: "#FFD300" }}>Join Now! {" "} </span> Discover or Offer Trusted Car Services.</WelcomeText>
                <Illustration src="/icons/login-background.svg" alt="signup Background" />
            </LeftSection>

            <RightSection>
                <FormContainer>
                    <Title>Create  <span style={{ color: "#FFC107" }}>Account</span></Title>
                    <Title fontSize={'1.4rem'}>Verify Email Code</Title>

                    <NormalText color="#898989">Enter the 6 Digit Code sent to  <span style={{ color: "#FFC107" }}>adarshgachha@gmail.com</span></NormalText>

                    <OtpInput length={6} onChangeOTP={(val) => setOtp(val)} />
                    <StyledButton 
                        onClick={handleSubmit}
                        disabled={otp.length !== 6} 
                        variant="contained"
                    >
                        Verify
                    </StyledButton>

                    <LinkText align="center" color="#898989">I didn't receive the code! <span style={{ color: "#FFC107" }}> Resend</span></LinkText>
                </FormContainer>
            </RightSection>
        </Container>
    )
}

export default VerifyPage;