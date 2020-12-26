import React from 'react';
import { StyledText, StyledView } from './HomeScreenStyles';
import { ImageBackground, Image, StyleSheet } from 'react-native';

export const HomeScreen = () => {
  return (
    <StyledView>
      <ImageBackground
        source={require('../../../assets/img/background.jpg')}
        style={styles.bgImage}
      />
      <Image
        style={styles.logo}
        source={require('../../../assets/img/logo-red.png')}
      />

      <StyledText>HomeScreen</StyledText>
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
    width: 30,
    height: 100,
    aspectRatio: 1,
  },
});
