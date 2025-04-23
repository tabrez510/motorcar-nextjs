"use client"

import React, { useState, useEffect } from "react";
// import withAuthLayout from "@/components/layouts/AuthLayout";
import { useFormik } from 'formik';
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
} from "./login.styles";
import { useRouter } from "next/navigation";
import SignUpModel from "@/components/common/SignUpModel";
import { loginSchema } from '@/utils/validateSchema';
import { useDispatch } from "react-redux";
import { useLoginMutation } from "@/redux/api/authApi";
import toast from "react-hot-toast";
import { requestForToken } from "@/utils/firebase";
import { logInUser } from "@/redux/slice/authSlice";


export default function SignInPage() {
  const router = useRouter();
  const [offerModel, setOfferModel] = useState(false);
  const [login, {isLoading}] = useLoginMutation();
  const dispatch = useDispatch();
  const [fcmToken, setFcmToken] = useState(null);

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

  const formik = useFormik({
    initialValues: {
      emailOrPhone: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: async(values) => {
      try {
        console.log('Login payload:', values);
        const formData = new FormData();
        formData.append("email", values.emailOrPhone);
        formData.append("password", values.password);
        if(fcmToken) {
          formData.append("fcm_token", fcmToken);
        }
        const data = await login(formData).unwrap();
        if(!data.status) {
          toast.error(data.message);
          return;
        }
        dispatch(logInUser({ user: data.data, accessToken: data.accessToken }));
        localStorage.setItem('user', JSON.stringify(data.data));
        localStorage.setItem('accessToken', data.accessToken);
        toast.success("Login successful!");
        // TODO: Call login API here
        router.push('/');
      } catch (error) {
        console.error('Login error:', error);
        toast.error('Login failed. Please try again.');
      }
    },
  });

  return (
    <Container>
      <LeftSection>
        <WelcomeText><span style={{ color: "#FFD300" }}>Welcome Back!</span> Find or Manage Trusted Car Services Near You.</WelcomeText>
        <Illustration src="icons/login-background.svg" alt="Car Illustration" />
      </LeftSection>

      <RightSection>
        <FormContainer as="form" onSubmit={formik.handleSubmit}>
          <Title>Sign <span style={{ color: "#FFC107" }}>In</span></Title>

          <CustomTextField
            name="emailOrPhone"
            label="Email / Number"
            variant="outlined"
            required
            placeholder="Enter your email or phone number"
            value={formik.values.emailOrPhone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.emailOrPhone && Boolean(formik.errors.emailOrPhone)}
            helperText={formik.touched.emailOrPhone && formik.errors.emailOrPhone}
          />

          <CustomTextField
            name="password"
            label="Password"
            variant="outlined"
            required
            type="password"
            showPasswordToggle
            placeholder="Enter your password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />

          <ForgotPassText align="flex-end" color="#FFC107" onClick={() => router.push('/forgot-password')}>Forgot your Password?</ForgotPassText>
          <StyledButton variant="contained" type="submit" disabled={
                        !formik.isValid ||
                        !formik.dirty ||
                        formik.isSubmitting ||
                        isLoading
                    }>Sign in</StyledButton>
          <LinkText align="center" color="#898989">Don't have an account?{" "}<span onClick={() => router.push('/signup')} style={{ cursor: 'pointer', color: "#FFC107" }}>Sign Up</span></LinkText>

        </FormContainer>
      </RightSection>

      <SignUpModel
        open={offerModel}
        setOfferModel={setOfferModel}
        handleClose={() => setOfferModel(false)}
      />
    </Container>
  );
}

// export default withAuthLayout(SignInPage);
