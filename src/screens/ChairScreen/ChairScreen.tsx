import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';

export const ChairScreen = () => {
  return (
    <View style={styles.container}>
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
