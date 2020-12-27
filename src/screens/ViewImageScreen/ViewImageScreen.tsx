import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { StyledIconContainer } from './ViewImageScreenStyles';
import { FontAwesome } from '@expo/vector-icons';

export const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <StyledIconContainer>
        <AntDesign name='close' size={30} color='black' />
        <FontAwesome name='trash-o' size={30} color='black' />
      </StyledIconContainer>
      <ImageBackground
        style={styles.bgImg}
        source={require('../../../assets/img/chair.jpg')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, height: '100%' },
  bgImg: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'center',

    width: '100%',
    height: '90%',
    position: 'absolute',
    bottom: 0,
  },
});
