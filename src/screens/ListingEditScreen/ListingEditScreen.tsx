import React from 'react';
import { Screen } from '../../components/scr/Screen';
import { Image, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { AppFormField } from './../../components/AppFormField/AppFormField';
import AppFormPicker from '../../components/AppFormPicker/AppFormPicker';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
});

export type TCategory = { label: string; value: number };

const categories: TCategory[] = [
  { label: 'Furniture', value: 1 },
  { label: 'Clothing', value: 2 },
  { label: 'Camera', value: 3 },
];

export const ListingEditScreen = () => {
  return (
    <Screen>
      <StyledContainer>
        <Image
          style={styles.image}
          source={require('../../../assets/img/logo-red.png')}
        />
        <Formik
          initialValues={{
            title: '',
            price: '',
            description: '',
            category: null,
          }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          {({ handleSubmit }) => (
            <>
              <AppFormField maxLength={255} name='title' placeholder='Title' />
              <AppFormField
                keyboardType='numeric'
                maxLength={8}
                name='price'
                placeholder='Price'
              />
              <AppFormPicker
                items={categories}
                name='category'
                placeholder='Category'
              />
              <AppFormField
                maxLength={255}
                multiline
                name='description'
                numberOfLines={3}
                placeholder='Description'
              />

              {/* @ts-ignore */}
              <StyledLoginButton onPress={handleSubmit}>
                <StyledButtonText>Post</StyledButtonText>
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
