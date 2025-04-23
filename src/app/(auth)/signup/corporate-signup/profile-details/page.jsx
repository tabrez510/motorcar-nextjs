"use client";

import { useRef, useState } from "react";
// import withAuthLayout from "@/components/layouts/AuthLayout";
import { Container, DocumentBtn, FormContainer, Illustration, LeftSection, RightSection, StyledButton, Title, WelcomeText } from "./profileDetails.styles";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useUpdateProfileCorporateMutation } from "@/redux/api/authApi";
import { logInUser } from "@/redux/slice/authSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

function VerifyPage() {
    const router = useRouter();
    const [profilePhoto, setProfilePhoto] = useState(null);
    const [document, setDocument] = useState(null);
    const [updateProfileCorporate, { isLoading }] = useUpdateProfileCorporateMutation();
    const dispatch = useDispatch();
    
    const profilePhotoInputRef = useRef(null);
    const documentInputRef = useRef(null);

    const handleProfilePhotoClick = () => {
        profilePhotoInputRef.current?.click();
    };

    const handleDocumentClick = () => {
        documentInputRef.current?.click();
    };

    const handleFileChange = (event, type) => {
        const file = event.target.files[0];
        if (file) {
            if (type === "profilePhoto") {
                setProfilePhoto(file);
            } else {
                setDocument(file);
            }
        }
    };

    const handleSubmit = async () => {
        if (!profilePhoto || !document) return;
    
        const formData = new FormData();
        const savedData = localStorage.getItem("corporateDetails");
        if (savedData) {
            const parsedData = JSON.parse(savedData);
            console.log("Received from previous form:", parsedData);
            Object.entries(parsedData).forEach(([key, value]) => {
                formData.append(key, value);
            });
            formData.append("image", profilePhoto);
            formData.append("document", document);
            const data = await updateProfileCorporate(formData).unwrap();
            if(!data.status) {
                toast.error(data.message);
                return;
            }
            console.log("update profile data", data.data);
            localStorage.removeItem("corporateDetails");
            dispatch(logInUser({ user: data.data, accessToken: data.token }));
            
            router.push("/signup/corporate-signup/approval-status");
        } else {
            router.push("/signup/corporate-signup/details");
        }
    };

    return (
        <Container>
            <LeftSection>
                <WelcomeText><span style={{ color: "#FFD300" }}>Join Now! {" "} </span>Discover or Offer Trusted Car Services.</WelcomeText>
                <Illustration src="/icons/signup-background.svg" alt="signup Background" />
            </LeftSection>

            <RightSection>
                <FormContainer>
                    <Title>Create <span style={{ color: "#FFC107" }}>Account</span></Title>
                    <Title fontSize={'1.4rem'}>Profile Details</Title>

                    <DocumentBtn 
                        src={profilePhoto ? URL.createObjectURL(profilePhoto) : "/icons/profile-photo-btn.svg" }
                        alt="profile photo btn"
                        onClick={handleProfilePhotoClick}
                        style={
                            !profilePhoto
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

                    {!document ? (
                        <DocumentBtn
                        src="/icons/document-btn.svg"
                        alt="document btn"
                        onClick={handleDocumentClick}
                        style={{ marginBottom: "1rem" }}
                        />
                    ) : (
                        <div
                        onClick={handleDocumentClick}
                        style={{
                            fontSize: "0.9rem",
                            fontWeight: "500",
                            marginBottom: "1rem",
                            cursor: "pointer",
                        }}
                        >
                        📄 {document.name}
                        </div>
                    )}
                    <input 
                        type="file" 
                        ref={documentInputRef} 
                        style={{ display: "none" }} 
                        accept=".pdf,.doc,.docx" 
                        onChange={(e) => handleFileChange(e, "document")}
                    />

                    <StyledButton 
                     onClick={handleSubmit}
                     variant="contained"
                     disabled={!profilePhoto || !document || isLoading}
                    >
                        {isLoading ? "Uploading..." : "Upload"}
                    </StyledButton>
                </FormContainer>
            </RightSection>
        </Container>
    );
}

export default VerifyPage;