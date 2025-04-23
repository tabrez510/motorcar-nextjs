import React from 'react';
import { Box, Button, MenuItem, TextField, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CloseIcon from '@mui/icons-material/Close';
import WithModalHOC from '../layouts/WithModalHOC';
import { modalStyles } from '../common/SignUpModel';

const Container = styled(Box)(({ theme }) => ({
  width: '600px',
  margin: '50px auto',
  padding: theme.spacing(4),
  borderRadius: '16px',
  backgroundColor: '#fff',
  boxShadow: '0 0 20px rgba(0,0,0,0.1)',
  position: 'relative',
}));

const CloseBtn = styled(IconButton)({
  position: 'absolute',
  top: 16,
  right: 16,
});

const Title = styled(Typography)({
  fontSize: '20px',
  fontWeight: 600,
  marginBottom: '20px',
});

const Highlight = styled('span')({
  color: '#f5b400',
});

const FormField = styled(TextField)({
  marginBottom: '20px',
});

const UploadBox = styled(Box)({
  border: '2px dashed #f5b400',
  borderRadius: '12px',
  padding: '20px',
  textAlign: 'center',
  color: '#555',
  backgroundColor: '#fff8e1',
  marginBottom: '20px',
});

const SaveButton = styled(Button)({
  backgroundColor: '#f5b400',
  color: '#fff',
  padding: '10px 20px',
  borderRadius: '8px',
  fontWeight: 600,
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#e4a800',
  },
});

function AddCarForm() {
  return (
    <Container>
      <CloseBtn>
        <CloseIcon />
      </CloseBtn>
      <Title>
        Add <Highlight>New Car</Highlight>
      </Title>
      <FormField select label="Select Car Brand" fullWidth>
        <MenuItem value="">Select a Brand</MenuItem>
        {/* Add options here */}
      </FormField>
      <FormField select label="Select Car Model" fullWidth>
        <MenuItem value="">Select a Model</MenuItem>
        {/* Add options here */}
      </FormField>
      <FormField label="Car Registration Number" fullWidth />
      <FormField select label="Select Fuel Type" fullWidth>
        <MenuItem value="">Select a Fuel Type</MenuItem>
        {/* Add options here */}
      </FormField>
      <FormField label="Select Car Year" type="date" fullWidth InputLabelProps={{ shrink: true }} />
      <FormField label="VIN Number" fullWidth />

      <UploadBox>
        <CloudUploadIcon fontSize="large" style={{ color: '#f5b400' }} />
        <Typography variant="body2" style={{ marginTop: '10px' }}>
          Drag & drop files or <span style={{ color: '#f5b400', cursor: 'pointer' }}>Browse</span>
        </Typography>
        <Typography variant="caption" display="block">
          Supported formats: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT<br />
          Max File Size: 4MB
        </Typography>
      </UploadBox>

      <SaveButton fullWidth>Save My Car</SaveButton>
    </Container>
  );
}

export default WithModalHOC(AddCarForm, modalStyles);