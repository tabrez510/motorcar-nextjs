"use client"

// import withAuthLayout from "@/components/layouts/AuthLayout";
import { useRef, useState, useEffect, use } from "react";
import { Container, DocumentBtn ,FormContainer, Illustration, LeftSection, LinkText, NormalText, RightSection, StyledButton, Title, WelcomeText } from "./details.styles";
import OtpInput from "@/components/common/input/NumberSelector";
import CustomTextField from "@/components/common/input/CustomTextField";
import { useRouter } from "next/navigation";
import {signupDetailsCustomerSchema} from "@/utils/validateSchema";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { useUpdateProfileCorporateMutation } from "@/redux/api/authApi";
import { logInUser } from "@/redux/slice/authSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

function VerifyPage() {
  const router = useRouter();
  const profilePhotoInputRef = useRef(null);
  const [preview, setPreview] = useState("/icons/profile-photo-btn.svg");
  const [selectedImage, setSelectedImage] = useState(null);
  const [updateProfileCorporate, { isLoading }] = useUpdateProfileCorporateMutation();
  const dispatch = useDispatch();

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
      profilePhoto: null,
    },
    validationSchema: signupDetailsCustomerSchema,
    onSubmit: async(values) => {
      const formData = new FormData();
      formData.append("name", values.fullName);
      formData.append("email", values.email);
      formData.append("address", values.address);
      formData.append("password", values.password);
      formData.append("token", user.token || accessToken);
      formData.append("latitude", location.latitude);
      formData.append("longitude", location.longitude);
      if (values.profilePhoto) {
        formData.append("image", values.profilePhoto);
      }

      const data = await updateProfileCorporate(formData).unwrap();
      if(!data.status) {
          toast.error(data.message);
          return;
      }
      console.log("update profile data", data.data);
      dispatch(logInUser({ user: data.data, accessToken: data.token }));

      router.push("/");
    },
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    formik.setFieldValue("profilePhoto", file);
    setSelectedImage(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };


  const handleProfilePhotoClick = () => {
    profilePhotoInputRef.current?.click();
};

    return (
        <Container>
            <LeftSection>
                <WelcomeText><span style={{ color: "#FFD300" }}>Join Now! {" "} </span>Discover or Offer Trusted Car Services.</WelcomeText>
                <Illustration src="/icons/login-background.svg" alt="signup Background" />
            </LeftSection>

            <RightSection>
                <FormContainer onSubmit={formik.handleSubmit} component="form">
                    <Title>Create  <span style={{ color: "#FFC107" }}>Account</span></Title>
                    <Title fontSize={'1.4rem'}>Basic Details</Title>

                    <DocumentBtn 
                      src={preview} 
                      alt="profile photo btn" 
                      onClick={handleProfilePhotoClick}
                      style={
                        preview === "/icons/profile-photo-btn.svg"
                          ? { cursor: "pointer" }
                          : {
                              width: "100px",
                              height: "100px",
                              objectFit: "cover",
                              borderRadius: "50%",
                              cursor: "pointer",
                              border: "2px solid #FFC107",
                              marginBottom: "1rem",
                            }
                      } 
                    />
                    <input 
                        type="file" 
                        ref={profilePhotoInputRef} 
                        style={{ display: "none" }} 
                        accept="image/*" 
                        onChange={(e) => handleFileChange(e, "profilePhoto")}
                    />
                    <CustomTextField
                                name="fullName"
                               label="Full Name"
                               variant="outlined"
                               required
                               placeholder="Full Name"
                               value={formik.values.fullName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                                helperText={formik.touched.fullName && formik.errors.fullName}
                             />
                               <CustomTextField
                               label="Email"
                               name="email"
                               variant="outlined"
                               required
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
                               label="Password"
                               name="password"
                               variant="outlined"
                               required
                               type="password"
                               showPasswordToggle
                               placeholder="password"
                               value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.touched.password && formik.errors.password}
                             />
                             <CustomTextField
                               label="Confirm Password"
                               name="confirmPassword"
                               variant="outlined"
                               required
                               type="password"
                               showPasswordToggle
                               placeholder="Confirm Password"
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
                     variant="contained"
                     type="submit"
                      disabled={
                        !formik.isValid ||
                        !formik.dirty ||
                        formik.isSubmitting ||
                        !!locationError
                      }
                    >
                      Submit
                    </StyledButton>

                    <LinkText align="center" color="#898989">Already have an account? <span style={{ color: "#FFC107" }}> Sign In</span></LinkText>
                </FormContainer>
            </RightSection>
        </Container>
    )
}

export default VerifyPage;