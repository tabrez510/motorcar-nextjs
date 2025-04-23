"use client"

// import withAuthLayout from "@/components/layouts/AuthLayout";
import { useState, use, useEffect } from "react";
import { Container, FormContainer, Illustration, LeftSection, RightSection, NormalText, Title, WelcomeText, StyledButton, LinkText } from "./reset.styles";
import CustomTextField from "@/components/common/input/CustomTextField";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import { resetPasswordSchema } from "@/utils/validateSchema";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { requestForToken } from "@/utils/firebase";
import { useResetPasswordMutation } from "@/redux/api/authApi";


function ForgorPassPage({searchParams}) {
 const router = useRouter();
 const [phoneNumber, setPhoneNumber] = useState("");
 const [sessionChecked, setSessionChecked] = useState(false);
 const searchParam = use(searchParams);
 const [fcmToken, setFcmToken] = useState(null);
 const [resetPassword, { isLoading }] = useResetPasswordMutation();
 
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

 const formik = useFormik({
  initialValues: {
    password: '',
    confirmPassword: ''
  },
  validationSchema: resetPasswordSchema,
  onSubmit: async (values, { setSubmitting }) => {
    try {
      const formData = new FormData();
      formData.append("mobile_number", phoneNumber);
      formData.append("password", values.password);
      if(fcmToken) {
        formData.append("fcm_token", fcmToken);
      }
      const data = await resetPassword(formData).unwrap();
      if(!data.status) {
        toast.error(data.message);
        return;
      }
      toast.success("Password reset successfully!");
      router.push("/login");
    } catch (error) {
      console.error("Reset error", error);
      toast.error("Password reset failed. Please try again.");
      router.push("/forgot-password");
    } finally {
      setSubmitting(false);
    }
   }
  });

  const password = formik.values.password;

  // Check password criteria
  const passwordChecks = {
    length: password.length >= 8,
    upperLower: /[a-z]/.test(password) && /[A-Z]/.test(password),
    number: /\d/.test(password),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    noSpace: !/\s/.test(password),
  };

  const getColor = (condition) => {
    if (!password) return "#929292";
    return condition ? "#27CE56" : "#EC2727";
  };

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
        <Illustration src="/icons/verify-background.svg" alt="Forgot Background" />
      </LeftSection>
      <RightSection>
        <FormContainer component="form" onSubmit={formik.handleSubmit}>
          <Title sx={{ mb: 2}}>Forgot <span style={{ color: "#FFC107" }}>Password</span></Title>
           <Title fontSize={'1.4rem'}>Create New Password</Title>
          
         <Box>
         <NormalText color={getColor(passwordChecks.length)}>Minimum 8 characters</NormalText>
          <NormalText color={getColor(passwordChecks.upperLower)}>Includes uppercase and lowercase letters</NormalText>
          <NormalText color={getColor(passwordChecks.number)}>Must contains numbers</NormalText>
          <NormalText color={getColor(passwordChecks.special)}>Must contains special characters</NormalText>
          <NormalText color={getColor(passwordChecks.noSpace)}>No spaces allowed</NormalText>
            </Box>
          <CustomTextField
            label="Enter new password"
            name="password"
            variant="outlined"
            required
            placeholder="Enter new password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <CustomTextField
            label="Enter confirm password"
            name="confirmPassword"
            variant="outlined"
            required
            placeholder="Enter confirm password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
            error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
            helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
          />
          <StyledButton type="submit" disabled={!formik.isValid || !formik.dirty || formik.isSubmitting || isLoading} variant="contained">Reset</StyledButton>
         
        </FormContainer>
      </RightSection>
    </Container>
  );
};

export default ForgorPassPage;