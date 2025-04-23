"use client";
import React, { useState, useRef } from 'react';
import { Box, TextField } from '@mui/material';

export default function OtpInput({ length = 6, onChangeOTP }) {
  const [otpValues, setOtpValues] = useState(Array(length).fill(''));
  const inputRefs = useRef([]);

  const handleChange = (index, event) => {
    const newValue = event.target.value;
    if (newValue.length > 1) return;

    const newOtpValues = [...otpValues];
    newOtpValues[index] = newValue;
    setOtpValues(newOtpValues);

    if (newValue && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }

    if (onChangeOTP) {
      onChangeOTP(newOtpValues.join(''));
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === 'Backspace' && !otpValues[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <Box display="flex" justifyContent="center" gap={1}>
      {Array.from({ length }).map((_, index) => (
        <TextField
          key={index}
          variant="outlined"
          inputRef={(el) => (inputRefs.current[index] = el)}
          value={otpValues[index]}
          onChange={(e) => handleChange(index, e)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          inputProps={{
            maxLength: 1,
            style: { textAlign: 'center', fontSize: '1.25rem' },
          }}
          sx={{
            width: 55,
            '& .MuiOutlinedInput-root': {
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              '&.Mui-focused fieldset': {
                borderColor: '#FFD700',
                borderWidth: '2px',
              },
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#D9D9D9',
            },
          }}
        />
      ))}
    </Box>
  );
}
