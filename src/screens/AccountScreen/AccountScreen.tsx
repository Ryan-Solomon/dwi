import React from 'react';
import { FlatList } from 'react-native';
import { Icon } from '../../components/Icon/Icon';
import { ListItem } from '../../components/list-item/ListItem';
import { StyledSeparator } from '../../components/separator/ItemSeparator';
import { Screen } from '../../components/scr/Screen';
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
    <Screen>
      <StyledAccountScreenContainer>
        <ListItem
          image={require('../../../assets/img/logo-red.png')}
          title='Ryan Solomon'
          subtitle='ryan@ryansolomon.io'
        />
        <StyledAccountStuffContainer>
          <FlatList
            data={accountDetails}
            keyExtractor={(item) => item.title}
            ItemSeparatorComponent={StyledSeparator}
            renderItem={({ item }) => {
              return (
                <ListItem
                  title={item.title}
                  iconComponent={
                    <Icon
                      name={item.icon.name}
                      backgroundColor={item.icon.backgroundColor}
                    />
                  }
                />
              );
            }}
          />
        </StyledAccountStuffContainer>
        <ListItem title='Log Out' iconComponent={<Icon name='logout' />} />
      </StyledAccountScreenContainer>
    </Screen>
  );
};
