import React from 'react';
import {
  StyledButtonContainer,
  StyledButtonCreator,
  StyledLogoAndHeadingContainer,
  StyledText,
  StyledView,
} from './HomeScreenStyles';
import { ImageBackground, Image, StyleSheet, View } from 'react-native';

export const HomeScreen = () => {
  return (
    <StyledView>
      <ImageBackground
        blurRadius={2}
        source={require('../../../assets/img/background.jpg')}
        style={styles.bgImage}
      />
      <StyledLogoAndHeadingContainer>
        <Image
          style={styles.logo}
          source={require('../../../assets/img/logo-red.png')}
        />
        <StyledText color='black' fontSize='22px'>
          Sell What You Don't Need
        </StyledText>
      </StyledLogoAndHeadingContainer>
      <StyledButtonContainer>
        <StyledButtonCreator
          borderRadius='30px'
          backgroundColor='teal'
          buttonText='Login'
        />
        <StyledButtonCreator
          borderRadius='30px'
          backgroundColor='orange'
          buttonText='Register'
        />
      </StyledButtonContainer>
    </StyledView>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  logo: {
    marginTop: 50,
    marginBottom: 20,
    width: 30,
    height: 100,
    aspectRatio: 1,
  },
});
