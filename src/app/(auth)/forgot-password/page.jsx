"use client"

// import withAuthLayout from "@/components/layouts/AuthLayout";
import { Container, FormContainer, Illustration, LeftSection, RightSection, NormalText, Title, WelcomeText, StyledButton, LinkText } from "./forgotPassword.styles";
import CustomTextField from "@/components/common/input/CustomTextField";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import { emailOrPhoneSchema } from "@/utils/validateSchema";
import { useCheckNumberMutation } from "@/redux/api/authApi";
import toast from 'react-hot-toast';
import { auth } from "@/utils/firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";


function ForgorPassPage() {
 const router = useRouter();
 const [checkNumer] = useCheckNumberMutation();
let onlyLogo=false;

  const formik = useFormik({
    initialValues:{
      emailOrPhone: "",
    },
    validationSchema: emailOrPhoneSchema,
    onSubmit: async (values) => {
      try {
        const formData = new FormData();
        formData.append("countrycode", "+971");
        formData.append("phone", values.emailOrPhone);
        const res = await checkNumer(formData).unwrap();
        const phone = `$+971${values.emailOrPhone}`;
        if(!res.status) {
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
          // router.push(`/signup/corporate-signup/verify-phone?phone=${encodeURIComponent(values.phoneNumber)}`);
          router.push(`/forgot-password/verify?phone=${encodeURIComponent(values.emailOrPhone)}`);
        } else {
          toast.error("Invalid phone number.");
        }
      } catch (error) {
        console.error("API Error:", error);
        toast.error("Something went wrong. Please try again.");
      }
    },
  })
  return (
    <Container>
      <LeftSection>
        <WelcomeText><span style={{ color: "#FFD300" }}>Reset Your Password. </span> Secure Your Account Easily.</WelcomeText>
        <Illustration src="icons/forgot-background.svg" alt="Forgot Background" />
      </LeftSection>
      <RightSection>
        <FormContainer component="form" onSubmit={formik.handleSubmit}>
          <Title>Forgot <span style={{ color: "#FFC107" }}>Password</span></Title>
          <NormalText color="#898989">No worries, we’ll send you reset instruction</NormalText>
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
          <CustomTextField
            name="emailOrPhone"
            label="Number"
            variant="outlined"
            required
            placeholder="Enter your phone number"
            value={formik.values.emailOrPhone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.emailOrPhone && Boolean(formik.errors.emailOrPhone)}
            helperText={formik.touched.emailOrPhone && formik.errors.emailOrPhone}
          />
          </Box>
          <StyledButton
           type="submit"
           variant="contained"
           disabled={
            !formik.isValid ||
            !formik.dirty ||
            formik.isSubmitting
           }
          >
            Reset
          </StyledButton>
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2
          }}>
            <Box component='img' src="/icons/back-light.svg" alt="back icon" /> 
          <LinkText href='/login' align="center" color="#898989">Go Back to Login</LinkText>
          </Box>
          <div id="recaptcha-container"></div>
        </FormContainer>
      </RightSection>
    </Container>
  );
};

export default ForgorPassPage;