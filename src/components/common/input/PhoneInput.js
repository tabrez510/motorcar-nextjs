import { TextField, MenuItem, Box } from "@mui/material";
import { useState } from "react";

const PhoneInput = ({ label = "Phone Number", countryCode = "+971", onChange }) => {
  const [phone, setPhone] = useState("");

  const handleChange = (event) => {
    setPhone(event.target.value);
    if (onChange) onChange(event.target.value);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <TextField
        select
        defaultValue={countryCode}
        sx={{ width: "100px" }}
      >
        <MenuItem value="+971">+971</MenuItem>
        <MenuItem value="+91">+91</MenuItem>
        <MenuItem value="+1">+1</MenuItem>
      </TextField>

      {/* Phone Number Input */}
      <TextField
        label={label}
        variant="outlined"
        fullWidth
        value={phone}
        onChange={handleChange}
        sx={{ flex: 1 }}
      />
    </Box>
  );
};

export default PhoneInput;
