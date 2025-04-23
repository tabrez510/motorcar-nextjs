import { fonts } from "@/components/ThemeRegistry/theme";
import { TextField, MenuItem, styled } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"; 


const SelectPlaceholder = styled("span")(({ theme }) => ({
  fontFamily: fonts.primary,
  fontSize: "15px",
  fontWeight: "bold",
  color: theme.palette.text.secondary,
}));

const SelectedValue = styled("span")(({ theme }) => ({
  fontFamily: fonts.primary,
  fontSize: "0.9rem",
  fontWeight: "500",
  color:  "#757575",
}));

const StyledSelect = styled(TextField, {
    shouldForwardProp: (prop) => prop !== "iconMarginRight", 
  })(({ theme, iconMarginRight = 5 }) => ({
    minWidth: 95,
    maxWidth: 150,
    "& label": {
      transform: "translate(0, .5px) scale(1)",
      fontFamily: fonts.primary,
      fontSize: "0.9rem",
      fontWeight: 600,
      color: theme.palette.text.primary,
      transition: "none",
    },
    "& .MuiInputBase-root": {
      borderBottom: "none !important",
    },
    "& .MuiSelect-icon": {
      right: 1,
      marginRight: -5, 
    },
  }));

export const CustomSelect = ({
  label = "Select",
  value,
  nonSelectedvalue,
  options = [],
  IconComponent = ArrowDropDownIcon, 
  onChange,
  iconMarginRight = 5,
  ...props
}) => (
  <StyledSelect
    select
    variant="standard"
    label={label}
    value={value}
    onChange={onChange}
    iconMarginRight={iconMarginRight}
    InputProps={{
      disableUnderline: true,
    }}
    SelectProps={{
    IconComponent: IconComponent, 
      renderValue: (selected) =>
        !selected ? (
          <SelectPlaceholder>{nonSelectedvalue}</SelectPlaceholder>
        ) : (
          <SelectedValue>{selected}</SelectedValue>
        ),
      displayEmpty: true,
      style: {
        color: value ? "initial" : "#bdbdbd", // Light grey color if no value selected
      },
    }}
    {...props}
  >
    {options.map((option) => (
      <MenuItem  key={option.value} value={option.value}>
        {option.label}
      </MenuItem>
    ))}
  </StyledSelect>
);