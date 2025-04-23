import React from 'react'
import { CarsGrid, GridItem, SectionWrapper, StyledTab, TabNavigation } from './listedcar.styles';
import SectionHeader from '../components/SectionHeader';
import { listedcarsData } from '@/utils/dummy';
import ListedCarCard from '../components/listedCarCard/ListedCarCard';

const GRID_BREAKPOINTS = {
    xs: 12,
    sm: 6,
    md: 4,
    lg: 2.4,
    xl: 2.4
  };
  
const ListedCars = () => {
  const [tabIndex, setTabIndex] = React.useState(0);

  return (
    <SectionWrapper>
      <SectionHeader
        icon="/icons/separator-carsblue.svg"
        subtitle="Cars"
        title="Our Listed Cars"
        actionIcon="/icons/view-all.svg"
      />

      <TabNavigation value={tabIndex} onChange={(e, v) => setTabIndex(v)}>
        <StyledTab label="New Cars" />
        <StyledTab label="Used Cars" />
        <StyledTab label="In Stock" />
      </TabNavigation>

      <CarsGrid container spacing={1.5}>
        {listedcarsData.map((car,i) => (
          <GridItem sx={{ width: '19%'}} key={car.id+i} {...GRID_BREAKPOINTS}>
            <ListedCarCard car={car} />
          </GridItem>
        ))}
      </CarsGrid>
    </SectionWrapper>
  );
};

export default ListedCars