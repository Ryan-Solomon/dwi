import React from 'react';
import { FlatList } from 'react-native';
import { ListItem } from '../../components/list-item/ListItem';
import {
  StyledAccountScreenContainer,
  StyledAccountStuffContainer,
} from './AccountScreenStyles';

const accountDetails = [
  {
    title: 'My Listings',
    icon: { name: 'format-list-bulleted', backgroundColor: 'teal' },
  },
  {
    title: 'My Messages',
    icon: { name: 'email', backgroundColor: 'teal' },
  },
];

export const AccountScreen = () => {
  return (
    <StyledAccountScreenContainer>
      <ListItem />
      <StyledAccountStuffContainer>
        <FlatList
          data={accountDetails}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => {
            return <ListItem />;
          }}
        />
      </StyledAccountStuffContainer>
      <ListItem />
    </StyledAccountScreenContainer>
  );
};
