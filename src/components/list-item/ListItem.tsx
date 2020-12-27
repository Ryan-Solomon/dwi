import React, { FC } from 'react';
import { Image, StyleSheet } from 'react-native';
import {
  StyledListItemContainer,
  StyledListItemText,
  StyledTextContainer,
} from './ListItemStyles';

type TListItemProps = {
  image: string;
  title: string;
  subtitle: string;
};

export const ListItem: FC<Partial<TListItemProps>> = ({
  image,
  title = 'Ryan Solomon',
  subtitle = '5 Listings',
}) => {
  return (
    <StyledListItemContainer>
      <Image
        style={styles.image}
        source={require('../../../assets/img/logo-red.png')}
      />
      <StyledTextContainer>
        <StyledListItemText fontWeight='bold'>{title}</StyledListItemText>
        <StyledListItemText>{subtitle}</StyledListItemText>
      </StyledTextContainer>
    </StyledListItemContainer>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 50,
    width: 50,
  },
});
