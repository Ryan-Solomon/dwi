import React from 'react';
import {
  StyledButtonContainer,
  StyledButtonCreator,
  StyledText,
  StyledView,
} from './HomeScreenStyles';
import { ImageBackground, Image, StyleSheet, View } from 'react-native';

export const HomeScreen = () => {
  return (
    <StyledView>
      <ImageBackground
        source={require('../../../assets/img/background.jpg')}
        style={styles.bgImage}
      />
      <View>
        <Image
          style={styles.logo}
          source={require('../../../assets/img/logo-red.png')}
        />
        <StyledText>HomeScreen</StyledText>
      </View>
      <StyledButtonContainer>
        <StyledButtonCreator backgroundColor='teal' buttonText='Button One' />
        <StyledButtonCreator backgroundColor='orange' buttonText='Button Two' />
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
    width: 30,
    height: 100,
    aspectRatio: 1,
  },
});
