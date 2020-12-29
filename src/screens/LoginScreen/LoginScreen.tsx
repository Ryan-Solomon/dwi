import React from 'react';
import { Screen } from '../../components/scr/Screen';
import { Image, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { Formik } from 'formik';
import { AppTextInput } from './../../components/AppTextInput/AppTextInput';

export const LoginScreen = () => {
  return (
    <Screen>
      <StyledContainer>
        <Image
          style={styles.image}
          source={require('../../../assets/img/logo-red.png')}
        />
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleSubmit }) => (
            <>
              <AppTextInput
                keyboardType='email-address'
                onChangeText={handleChange('email')}
                placeholder='Email'
                autoCapitalize='none'
                autoCorrect={false}
                icon='email'
                textContentType='emailAddress'
              />
              <AppTextInput
                autoCapitalize='none'
                autoCorrect={false}
                icon='lock'
                onChangeText={handleChange('password')}
                placeholder='Password'
                secureTextEntry={true}
                textContentType='password'
              />
              {/* @ts-ignore */}
              <StyledLoginButton onPress={handleSubmit}>
                <StyledButtonText>Login</StyledButtonText>
              </StyledLoginButton>
            </>
          )}
        </Formik>
      </StyledContainer>
    </Screen>
  );
};

// Styles

const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
    resizeMode: 'cover',
  },
});

const StyledContainer = styled.View`
  align-items: center;
  padding: 10px;
`;

const StyledLoginButton = styled.TouchableOpacity`
  background-color: teal;
  width: 100%;
  padding: 15px;
  border-radius: 30px;
  margin-top: 20px;
`;

const StyledButtonText = styled.Text`
  color: white;
  text-align: center;
  font-size: 20px;
`;
