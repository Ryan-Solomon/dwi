import React, { FC, ReactNode } from 'react';
import { Image, StyleSheet, TouchableHighlight } from 'react-native';
import {
  StyledListItemContainer,
  StyledListItemText,
  StyledTextContainer,
} from './ListItemStyles';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type TListItemProps = {
  image?: string;
  title: string;
  subtitle: string;
  onPress: () => void;
  renderRightActions: ({}: {}) => JSX.Element;
  iconComponent?: ReactNode;
};

export const ListItem: FC<Partial<TListItemProps>> = ({
  image,
  onPress,
  title = 'Ryan Solomon',
  subtitle = '',
  renderRightActions,
  iconComponent,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress}>
        <StyledListItemContainer>
          {iconComponent}
          {image && (
            <Image
              style={styles.image}
              source={(image = require('../../../assets/img/logo-red.png'))}
            />
          )}
          <StyledTextContainer>
            <StyledListItemText numberOfLines={1} fontWeight='bold'>
              {title}
            </StyledListItemText>
            {subtitle ? (
              <StyledListItemText numberOfLines={1}>
                {subtitle}
              </StyledListItemText>
            ) : null}
          </StyledTextContainer>
          <MaterialCommunityIcons color='grey' name='chevron-right' size={25} />
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
