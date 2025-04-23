'use client';

import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import customTextFieldStyles from './CustomTextFieldStyles';

const CustomTextField = ({ type = 'text', showPasswordToggle = false, ...rest }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleToggleVisibility = () => setShowPassword((prev) => !prev);
  const handleMouseDownPassword = (event) => event.preventDefault();

  return (
    <TextField
      {...rest}
      type={showPasswordToggle && showPassword ? 'text' : type}
      InputProps={{
        sx: customTextFieldStyles.inputRoot,
        inputProps: { sx: customTextFieldStyles.inputPadding },
        endAdornment: showPasswordToggle && (
          <InputAdornment position="end">
            <IconButton
              onClick={handleToggleVisibility}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <Visibility /> : <VisibilityOff /> }
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default CustomTextField;