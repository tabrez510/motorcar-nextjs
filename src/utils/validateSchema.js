import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  emailOrPhone: Yup.string().trim()
    .required('Email or phone is required')
    .test('is-email-or-phone', 'Must be a valid email or phone number', function (value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^\d{10,15}$/;
      return emailRegex.test(value) || phoneRegex.test(value);
    }),
  password: Yup.string().trim().required('Password is required'),
});

export const emailOrPhoneSchema = Yup.object().shape({
  emailOrPhone: Yup.string().trim()
    .required('Email or phone is required')
    .test('is-email-or-phone', 'Must be a valid email or phone number', function (value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^\d{10,15}$/;
      return emailRegex.test(value) || phoneRegex.test(value);
    }),
});

export const signupPhoneSchema = Yup.object().shape({
  // countryCode: Yup.string().trim()
  //   .matches(/^\+\d{1,4}$/, 'Invalid')
  //   .required('Required'),

  phoneNumber: Yup.string().trim()
    .matches(/^\d{10,15}$/, 'Invalid Phone number')
    .required('Phone number is required'),
});

export const signupDetailsCustomerSchema = Yup.object().shape({
  fullName: Yup.string().trim().required("Required"),
  email: Yup.string().trim().email("Invalid email").required("Required"),
  address: Yup.string().trim().required("Address is required"),
  password: Yup.string().trim().required("Required"),
  confirmPassword: Yup.string().trim()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Required"),
  profilePhoto: Yup.mixed().required("Photo is required"),
});

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&^])[A-Za-z\d@$!%*?#&^]{8,}$/;

export const resetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .matches(passwordRegex, 'Password must meet all criteria')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

export const signupDetailsCorporateSchema = Yup.object().shape({
  fullName: Yup.string()
    .trim()
    .required("Full Name is required"),

  email: Yup.string()
    .trim()
    .email("Invalid email")
    .required("Email is required"),

  address: Yup.string()
    .trim()
    .required("Address is required"),

  password: Yup.string()
    .trim()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),

  confirmPassword: Yup.string()
    .trim()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});