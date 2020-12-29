import React from 'react';
import { Screen } from '../../components/scr/Screen';
import { Image, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { Formik } from 'formik';
import { AppTextInput } from './../../components/AppTextInput/AppTextInput';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

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
          validationSchema={validationSchema}
        >
          {({
            handleChange,
            handleSubmit,
            errors,
            setFieldTouched,
            touched,
          }) => (
            <>
              <AppTextInput
                keyboardType='email-address'
                onChangeText={handleChange('email')}
                placeholder='Email'
                autoCapitalize='none'
                autoCorrect={false}
                icon='email'
                textContentType='emailAddress'
                onBlur={() => setFieldTouched('email')}
              />
              {touched.email && <StyledText>{errors.email}</StyledText>}
              <AppTextInput
                autoCapitalize='none'
                autoCorrect={false}
                icon='lock'
                onChangeText={handleChange('password')}
                placeholder='Password'
                secureTextEntry={true}
                textContentType='password'
                onBlur={() => setFieldTouched('password')}
              />
              {touched.password && <StyledText>{errors.password}</StyledText>}

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

const StyledText = styled.Text`
  font-size: 10px;
  color: #c00d0d;
  margin-top: 5px;
  margin-left: 10px;
  align-self: flex-start;
`;
