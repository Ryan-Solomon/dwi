import React from 'react';
import { StyledText, StyledView } from './HomeScreenStyles';
import { ImageBackground, StyleSheet } from 'react-native';

export const HomeScreen = () => {
  return (
    <StyledView>
      <ImageBackground
        source={require('../../../assets/img/background.jpg')}
        style={styles.image}
      />
      <StyledText>HomeScreen</StyledText>
    </StyledView>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});
