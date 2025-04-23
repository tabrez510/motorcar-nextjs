"use client"
import React, { useState } from 'react';
import { Box, Tabs, Tab, Button,styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { CustomSelect } from '@/components/common/select/CustomSelect';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const VEHICLE_TYPES = ['All', 'New', 'Used'];
const CAR_BRANDS = ['Audi', 'BMW', 'Mercedes'];
const PRICE_RANGES = ['All Prices', '0-10k', '10k-20k', '20k-30k', '30k+'];
const CURRENT_YEAR = new Date().getFullYear();
const YEARS = Array.from({ length: 25 }, (_, i) => CURRENT_YEAR - i);

const MODELS_BY_BRAND = {
  Audi: ['Q7', 'A4', 'A6'],
  BMW: ['X5', '3 Series', '5 Series'],
  Mercedes: ['GLA', 'C-Class', 'E-Class'],
};

const FilterTab = styled(Tab)(({ isactive }) => ({
  textTransform: 'none',
  fontWeight: 400,
  fontSize: '13px',
  borderRadius: '10px',
  backgroundColor: isactive ? '#FFD600' : '#FFFFFF',
  color: '#000',
  minWidth: '60px',
  height: '40px',
  '&.Mui-selected': {
    color: '#000',
    backgroundColor: '#FFD600',
  },
}));

const FilterRow = styled(Box)(({ theme }) => ({
  width: '95%',
  padding: theme.spacing(1),
  height: '3.7rem',
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: '4%',
  left: '2%',
  borderRadius: theme.shape.borderRadius,
  display: 'flex',
  gap: theme.spacing(4),
  alignItems: 'center',
}));

export default function CarSearch() {
  const [activeTab, setActiveTab] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    brand: 'Audi',
    model: 'Q7',
    year: '0-2024',
    price: '0-10K',
  });

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleFilterChange = (filterType) => (event) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: event.target.value,
      ...(filterType === 'brand' && { model: '' })
    }));
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}
      >
        {VEHICLE_TYPES.map((type, index) => (
          <FilterTab
            key={type}
            label={type}
            isactive={activeTab === index ? 1 : 0}
          />
        ))}
      </Tabs>

      <FilterRow>
        <CustomSelect
          label="Select Car"
          value={filters.brand}
          options={CAR_BRANDS.map(brand => ({ value: brand, label: brand }))}
          onChange={handleFilterChange('brand')}
          IconComponent={KeyboardArrowDownIcon}
        />

        <CustomSelect
          label="Select Model"
          value={filters.model}
          options={filters.brand ?
            MODELS_BY_BRAND[filters.brand]?.map(model => ({ value: model, label: model })) :
            []
          }
          disabled={!filters.brand}
          onChange={handleFilterChange('model')}
          IconComponent={KeyboardArrowDownIcon}
        />

        <CustomSelect
          label="Year"
          // nonSelectedvalue={'0-2024'}
          value={filters.year}
          options={YEARS.map(year => ({ value: year, label: year }))}
          onChange={handleFilterChange('year')}
          IconComponent={KeyboardArrowDownIcon}
        />

        <CustomSelect
          label="Price Range"
          value={filters.price}
          options={PRICE_RANGES.map(range => ({ value: range, label: range }))}
          onChange={handleFilterChange('price')}
          IconComponent={KeyboardArrowDownIcon}
        />
        <Button
          variant="contained"
          onClick={() => console.log('Searching for:', searchQuery)}
          startIcon={<SearchIcon />}
          sx={{
            backgroundColor: '#FFD600',
            color: 'black',
            borderRadius: '10px',
            fontWeight: '400',
            height: '40px',
            width:'25%',
            textTransform: 'none',
            px: 2,
            '&:hover': {
              backgroundColor: '#FFC000',
            },
          }}
        >
          Search
        </Button>

      </FilterRow>

    </Box>
  );
}