import React, { FC, ReactNode } from 'react';
import { Image, StyleSheet, TouchableHighlight } from 'react-native';
import {
  StyledListItemContainer,
  StyledListItemText,
  StyledTextContainer,
} from './ListItemStyles';
import Swipeable from 'react-native-gesture-handler/Swipeable';

type TListItemProps = {
  image?: string;
  title: string;
  subtitle: string;
  onPress: () => void;
  renderRightActions: ({}: {}) => JSX.Element;
  imageComponent?: ReactNode;
};

export const ListItem: FC<Partial<TListItemProps>> = ({
  image,
  onPress,
  title = 'Ryan Solomon',
  subtitle = '5 Listings',
  renderRightActions,
  imageComponent,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress}>
        <StyledListItemContainer>
          {imageComponent}
          {image && (
            <Image
              style={styles.image}
              source={(image = require('../../../assets/img/logo-red.png'))}
            />
          )}
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
