import React, { FC } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import {
  StyledCardContainer,
  StyledCardText,
  StyledTextContainer,
} from './CardStyles';

const defaultImage = require('../../../assets/img/background.jpg');

type TCardProps = {
  image: string;
  title: string;
  subtitle: string;
};

export const Card: FC<Partial<TCardProps>> = ({
  image = defaultImage,
  title,
  subtitle,
}) => {
  return (
    <StyledCardContainer>
      <Image source={image} style={styles.image} />
      <StyledTextContainer>
        <StyledCardText numberOfLines={1}>{title}</StyledCardText>
        <StyledCardText numberOfLines={1} fontColor='#007e00'>
          {subtitle}
        </StyledCardText>
      </StyledTextContainer>
    </StyledCardContainer>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
});
