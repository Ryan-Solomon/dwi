import React, { FC, ReactNode } from 'react';
import { Image, StyleSheet, TouchableHighlight } from 'react-native';
import {
  StyledListItemContainer,
  StyledListItemText,
  StyledTextContainer,
} from './ListItemStyles';
import Swipeable from 'react-native-gesture-handler/Swipeable';

type TListItemProps = {
  image: string;
  title: string;
  subtitle: string;
  onPress: () => void;
  renderRightActions: ({}: {}) => JSX.Element;
};

export const ListItem: FC<Partial<TListItemProps>> = ({
  image = require('../../../assets/img/logo-red.png'),
  onPress,
  title = 'Ryan Solomon',
  subtitle = '5 Listings',
  renderRightActions,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress}>
        <StyledListItemContainer>
          <Image style={styles.image} source={image} />
          <StyledTextContainer>
            <StyledListItemText fontWeight='bold'>{title}</StyledListItemText>
            <StyledListItemText>{subtitle}</StyledListItemText>
          </StyledTextContainer>
        </StyledListItemContainer>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 50,
    width: 50,
  },
});
