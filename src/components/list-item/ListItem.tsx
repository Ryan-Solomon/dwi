import React, { FC } from 'react';
import { Image } from 'react-native';
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
  title = 'main title',
  subtitle = 'subtitle',
}) => {
  return (
    <StyledListItemContainer>
      <Image source={require('../../../assets/img/logo-red.png')} />
      <StyledTextContainer>
        <StyledListItemText>{title}</StyledListItemText>
        <StyledListItemText>{subtitle}</StyledListItemText>
      </StyledTextContainer>
    </StyledListItemContainer>
  );
};
