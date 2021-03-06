import React, { ChangeEvent, FC } from 'react';
import { useFormikContext } from 'formik';
import styled from 'styled-components/native';
import { AppTextInput } from '../AppTextInput/AppTextInput';

type TProps = {
  name: string;
  width: string;
  [key: string]:
    | string
    | boolean
    | number
    | ((e: string | ChangeEvent<any>) => void);
};

export const AppFormField: FC<Partial<TProps>> = ({
  name,
  width,
  children,
  ...otherProps
}) => {
  const { setFieldTouched, errors, touched, handleChange } = useFormikContext();
  if (!name) return <AppTextInput />;
  return (
    <>
      <AppTextInput
        width={width}
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />
      {/* @ts-ignore */}
      {touched[name] && <StyledText>{errors[name]}</StyledText>}
    </>
  );
};

// Styles

const StyledText = styled.Text`
  font-size: 10px;
  color: #c00d0d;
  margin-top: 5px;
  margin-left: 10px;
  align-self: flex-start;
`;
