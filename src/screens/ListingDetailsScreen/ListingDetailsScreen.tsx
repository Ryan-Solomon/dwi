import React from 'react';
import { Card } from '../../components/card/Card';
import { ListItem } from '../../components/list-item/ListItem';
import { StyledListingDetailsContainer } from './ListingDetailsStyles';

export const ListingDetailsScreen = () => {
  return (
    <StyledListingDetailsContainer>
      <Card />
      <ListItem />
    </StyledListingDetailsContainer>
  );
};
