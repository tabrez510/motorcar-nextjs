"use client"

import React, { useState } from "react";
import { useFormik } from "formik";
import { signupPhoneSchema } from "@/utils/validateSchema";
// import withAuthLayout from "@/components/layouts/AuthLayout";
import CustomTextField from "@/components/common/input/CustomTextField";
import {
  Container,
  LeftSection,
  RightSection,
  WelcomeText,
  Illustration,
  FormContainer,
  Title,
  StyledButton,
  LinkText,
  ForgotPassText,
} from "./signup.styles";
import { useRouter } from "next/navigation";
import SignUpModel from "@/components/common/SignUpModel";
import PhoneInput from "@/components/common/input/PhoneInput";
import { Box, Typography } from "@mui/material";
import { useCheckNumberMutation } from "@/redux/api/authApi";
import toast from 'react-hot-toast';
import { auth } from "@/utils/firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

function SignInPage() {
  const router = useRouter();
  const [checkNumer] = useCheckNumberMutation();
  const [offerModel, setOfferModel] = useState(false)
  const formik = useFormik({
      initialValues: {
        // countryCode: "",
        phoneNumber: "",
      },
      validationSchema: signupPhoneSchema,
      onSubmit: async (values) => {
        try {
          const formData = new FormData();
          formData.append("countrycode", "+971");
          formData.append("phone", values.phoneNumber);
          const res = await checkNumer(formData).unwrap();
          const phone = `+971${values.phoneNumber}`;
          if(res.status) {
            if (!window.recaptchaVerifier) {
              window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
                size: 'invisible',
                callback: (response) => {
                  // console.log('reCAPTCHA resolved:', response);
                },
              });
            }
          
            const appVerifier = window.recaptchaVerifier;
            const confirmationResult = await signInWithPhoneNumber(auth, phone, appVerifier);
            window.confirmationResult = confirmationResult;
      
            toast.success("OTP sent successfully!");
            router.push(`/signup/corporate-signup/verify-phone?phone=${encodeURIComponent(values.phoneNumber)}`);
          } else {
            toast.error(res.message);
          }
        } catch (error) {
          console.error("API Error:", error);
          toast.error(error.message || "Something went wrong. Please try again.");
        }
      },
    });

  return (
    <Container>
      <LeftSection>
        <WelcomeText><span style={{ color: "#FFD300" }}> Join Now! </span>Offer Trusted Car Services to Customers.</WelcomeText>
        <Illustration src="/icons/signup-background.svg" alt="Car Illustration" />
      </LeftSection>

      <RightSection>
        <FormContainer onSubmit={formik.handleSubmit} component="form">
          <Title>Create  <span style={{ color: "#FFC107" }}>Account</span></Title>
          <Title fontSize={'1.2rem'}>Phone Number</Title>
          <LinkText align="flex-start" color="#898989">Get a code by SMS</LinkText>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Box
            sx={{
              px: 3, 
              py: 1.5, 
              border: "1px solid #898989",
              borderRadius: "15px",
            }}
          >
            +971
          </Box>

            {/* <CustomTextField
              name="countryCode"
              label="Code"
              placeholder="+971"
              required
              sx={{ maxWidth: 100 }}
              value={formik.values.countryCode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.countryCode && Boolean(formik.errors.countryCode)}
              helperText={formik.touched.countryCode && formik.errors.countryCode}
            /> */}

            <CustomTextField
              name="phoneNumber"
              label="Number"
              variant="outlined"
              required
              fullWidth
              placeholder="05X-XXXXXXX"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
              helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
            />
          </Box>



          <ForgotPassText align="flex-start" color="#898989">Please enter the mobile number  like, 05X-1234567</ForgotPassText>
          <StyledButton type="submit" variant="contained" disabled={!formik.isValid || !formik.dirty || formik.isSubmitting} >Send Code</StyledButton>
          <LinkText align="center" color="#898989">Already have an account?{" "}<span onClick={() => router.push('/login')} style={{ color: "#FFC107" }}>Sign In</span></LinkText>
          <div id="recaptcha-container"></div>

        </FormContainer>
      </RightSection>
    </Container>
  );
}

export default SignInPage;
