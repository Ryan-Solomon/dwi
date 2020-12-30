import React from 'react';
import { Screen } from '../../components/scr/Screen';
import { Image, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { AppFormField } from './../../components/AppFormField/AppFormField';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),

  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

export const RegisterScreen = () => {
  return (
    <Screen>
      <StyledContainer>
        <Image
          style={styles.image}
          source={require('../../../assets/img/logo-red.png')}
        />
        <Formik
          initialValues={{ name: '', email: '', password: '' }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          {({ handleSubmit }) => (
            <>
              <AppFormField
                name='name'
                placeholder='Name'
                autoCorrect={false}
                icon='account'
              />
              <AppFormField
                name='email'
                keyboardType='email-address'
                placeholder='Email'
                autoCapitalize='none'
                autoCorrect={false}
                icon='email'
                textContentType='emailAddress'
              />
              <AppFormField
                name='password'
                autoCapitalize='none'
                autoCorrect={false}
                icon='lock'
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
