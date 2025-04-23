'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import SignUpModel from "@/components/common/SignUpModel";

const SignUpPage = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setOpen(true); // open modal on mount
  }, []);

  const handleRoleSelect = (role) => {
    // setOpen(false);
    if (role === 'customer') {
      router.push('/signup/customer-signup');
    } else if (role === 'corporate') {
      router.push('/signup/corporate-signup');
    }
  };

  return (
    <>
      <SignUpModel
        open={open}
        handleClose={() => setOpen(false)}
        onSelectRole={handleRoleSelect}
      />
    </>
  );
};

export default SignUpPage;
