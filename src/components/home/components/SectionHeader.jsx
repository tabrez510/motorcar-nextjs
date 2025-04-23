import React from 'react'
import { HeaderContainer, HeaderTitleWrapper, SectionSubtitle, SectionTitle } from './header.styles';

const SectionHeader = ({ icon, subtitle, title, actionIcon }) => (
    <HeaderContainer>
      <div>
        <HeaderTitleWrapper>
          <img src={icon} alt="Section separator" />
          <SectionSubtitle variant="subtitle2">{subtitle}</SectionSubtitle>
        </HeaderTitleWrapper>
        <SectionTitle variant="h2">{title}</SectionTitle>
      </div>
      <img src={actionIcon} alt="View all" />
    </HeaderContainer>
  );

export default SectionHeader

  