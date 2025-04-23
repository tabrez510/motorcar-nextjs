import { api } from "./api";

export const authApi = api.injectEndpoints({
  overrideExisting: true,
  endpoints: (build) => ({

    checkNumber: build.mutation({
      query: (data) => ({ url: 'api/checknumber', body: data, method: 'POST' }),
    }),

    signupCorporate: build.mutation({
      query: (data) => ({ url: 'api/Corporate/signup', body: data, method: 'POST' }),
    }),

    signupCustomer: build.mutation({
      query: (data) => ({ url: 'api/Driver/signup', body: data, method: 'POST' }),
    }),

    updateProfileCorporate: build.mutation({
      query: (data) => ({ url: 'api/Driver/updateprofile', body: data, method: 'POST' }),
    }),

    login: build.mutation({
      query: (data) => ({ url: 'api/Driver/login', body: data, method: 'POST' }),
    }),

    resetPassword: build.mutation({
      query: (data) => ({ url: 'api/auth/reset-password/set-new', body: data, method: 'POST' }),
    }),

  }),
});

export const {
  useCheckNumberMutation,
  useSignupCorporateMutation,
  useSignupCustomerMutation,
  useUpdateProfileCorporateMutation,
  useLoginMutation,
  useResetPasswordMutation
  // useLoginMutation,
  // useSignupMutation,
  // useSendLinkForForgetPasswordMutation,
  // useForgetPasswordMutation
} = authApi;
