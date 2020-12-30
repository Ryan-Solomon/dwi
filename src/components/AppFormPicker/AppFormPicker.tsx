import React, { FC } from 'react';
import { useFormikContext } from 'formik';
import styled from 'styled-components/native';
import { AppPicker } from '../AppPicker/AppPicker';
import { TCategory } from '../../screens/ListingEditScreen/ListingEditScreen';

type TProps = {
  items: TCategory[];
  name: string;
  placeholder: string;
};

export const AppFormPicker: FC<TProps> = ({ items, name, placeholder }) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        //   @ts-ignore
        selectedItem={values[name]}
      />
      {/*  @ts-ignore */}
      {touched[name] && <StyledText>{errors[name]}</StyledText>}
    </>
  );
};

export default AppFormPicker;

const StyledText = styled.Text`
  font-size: 10px;
  color: #c00d0d;
  margin-top: 5px;
  margin-left: 10px;
  align-self: flex-start;
`;
