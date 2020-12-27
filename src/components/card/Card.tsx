import React, { FC } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { StyledCardContainer, StyledCardText } from './CardStyles';

type TCardProps = {
  image: string;
  title: string;
  subtitle: string;
};

export const Card: FC<TCardProps> = ({ image, title, subtitle }) => {
  return (
    <StyledCardContainer>
      <Image
        source={require('../../../assets/img/jacket.jpg')}
        style={styles.image}
      />
      <StyledCardText>Red Jacket</StyledCardText>
      <StyledCardText>$100</StyledCardText>
    </StyledCardContainer>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
});
