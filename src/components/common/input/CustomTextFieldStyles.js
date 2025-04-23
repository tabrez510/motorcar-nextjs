const customTextFieldStyles = {
  inputRoot: {
    borderRadius: 3.4,
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#898989',
      borderWidth: '1.5px',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#898989',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#898989',
      opacity: 0.7,
    },
  },
  inputPadding: {
    py: 1.7,
  },
};

export default customTextFieldStyles;
