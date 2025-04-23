"use client"

// import withAuthLayout from "@/components/layouts/AuthLayout";
import { Container, FormContainer, Illustration, LeftSection, LinkText, NormalText, RightSection, StyledButton, Title, WelcomeText } from "./details.styles";
import OtpInput from "@/components/common/input/NumberSelector";
import CustomTextField from "@/components/common/input/CustomTextField";
import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import {signupDetailsCorporateSchema} from "@/utils/validateSchema";
import { useFormik } from "formik";
import { useSelector } from "react-redux";

function VerifyPage() {
  const router = useRouter();
  const user = useSelector((state) => state.auth.user);
  const accessToken = useSelector((state) => state.auth.accessToken);
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [locationError, setLocationError] = useState("");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setLocationError(""); // clear error if any
        },
        (error) => {
          console.error("Error getting location:", error);
          if (error.code === error.PERMISSION_DENIED) {
            setLocationError("Location access denied. Please allow location to proceed.");
          } else {
            setLocationError("Failed to fetch location. Please try again.");
          }
        }
      );
    } else {
      setLocationError("Geolocation is not supported by this browser.");
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      address: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: signupDetailsCorporateSchema,
    onSubmit: (values) => {
      const trimmedValues = {
        name: values.fullName.trim(),
        email: values.email.trim(),
        address: values.address.trim(),
        password: values.password.trim(),
        token: user.token || accessToken,
        latitude: location.latitude,
        longitude: location.longitude
      };
  
      const formData = new FormData();
      Object.entries(trimmedValues).forEach(([key, val]) => {
        formData.append(key, val);
      });

      localStorage.setItem("corporateDetails", JSON.stringify(trimmedValues));
  
      router.push("/signup/corporate-signup/profile-details");
    },
  });


    return (
        <Container>
            <LeftSection>
                <WelcomeText><span style={{ color: "#FFD300" }}>Join Now! {" "} </span>Discover or Offer Trusted Car Services.</WelcomeText>
                <Illustration src="/icons/signup-background.svg" alt="signup Background" />
            </LeftSection>

            <RightSection>
                <FormContainer onSubmit={formik.handleSubmit} component="form">
                    <Title>Create  <span style={{ color: "#FFC107" }}>Account</span></Title>
                    <Title fontSize={'1.4rem'}>Basic Details</Title>

                    <CustomTextField
                      name="fullName"
                      label="Full Name"
                      placeholder="Full Name"
                      value={formik.values.fullName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                      helperText={formik.touched.fullName && formik.errors.fullName}
                    />

                    <CustomTextField
                      name="email"
                      label="Email"
                      placeholder="Email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.email && Boolean(formik.errors.email)}
                      helperText={formik.touched.email && formik.errors.email}
                    />

                    <CustomTextField
                      name="address"
                      label="Address"
                      placeholder="Address"
                      multiline
                      rows={2}
                      value={formik.values.address}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.address && Boolean(formik.errors.address)}
                      helperText={formik.touched.address && formik.errors.address}
                    />

                    <CustomTextField
                      name="password"
                      label="Password"
                      placeholder="Password"
                      type="password"
                      showPasswordToggle
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.password && Boolean(formik.errors.password)}
                      helperText={formik.touched.password && formik.errors.password}
                    />

                    <CustomTextField
                      name="confirmPassword"
                      label="Confirm Password"
                      placeholder="Confirm Password"
                      type="password"
                      showPasswordToggle
                      value={formik.values.confirmPassword}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                      helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                    />

                    {locationError && (
                      <p style={{ color: "red", marginBottom: "10px" }}>{locationError}</p>
                    )}

                    <StyledButton 
                    type="submit"
                    variant="contained" 
                    disabled={
                        !formik.isValid ||
                        !formik.dirty ||
                        formik.isSubmitting ||
                        !!locationError
                    }>
                      Submit
                    </StyledButton>

                    <LinkText align="center" color="#898989">Already have an account? <span style={{ color: "#FFC107" }}> Sign In</span></LinkText>
                </FormContainer>
            </RightSection>
        </Container>
    )
}

export default VerifyPage;