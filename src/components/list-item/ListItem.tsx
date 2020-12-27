import React, { FC } from 'react';
import { Image, StyleSheet, TouchableHighlight } from 'react-native';
import {
  StyledListItemContainer,
  StyledListItemText,
  StyledTextContainer,
} from './ListItemStyles';

type TListItemProps = {
  image: string;
  title: string;
  subtitle: string;
  onPress: () => void;
};

export const ListItem: FC<Partial<TListItemProps>> = ({
  image = require('../../../assets/img/logo-red.png'),
  onPress,
  title = 'Ryan Solomon',
  subtitle = '5 Listings',
}) => {
  return (
    <TouchableHighlight onPress={onPress}>
      <StyledListItemContainer>
        <Image style={styles.image} source={image} />
        <StyledTextContainer>
          <StyledListItemText fontWeight='bold'>{title}</StyledListItemText>
          <StyledListItemText>{subtitle}</StyledListItemText>
        </StyledTextContainer>
      </StyledListItemContainer>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 50,
    width: 50,
  },
});
