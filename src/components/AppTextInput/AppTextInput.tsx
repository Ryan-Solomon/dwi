import React, { ChangeEvent, FC } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styled from 'styled-components/native';

type TProps = {
  iconName: string;
  width: string;
  [key: string]: string | boolean | ((e: string | ChangeEvent<any>) => void);
};

export const AppTextInput: FC<Partial<TProps>> = ({
  iconName,
  width = '100%',
  ...otherProps
}) => {
  return (
    <StyledTextInputContainer width={width}>
      {iconName && <MaterialCommunityIcons name={iconName as any} size={25} />}
      <StyledTextInput {...otherProps} />
    </StyledTextInputContainer>
  );
};

// Styles

type TextContainerProps = {
  width: string;
};

const StyledTextInputContainer = styled.View<TextContainerProps>`
  background-color: #e8e6e6;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  border-radius: 30px;
  width: ${({ width }) => width};
  margin-top: 20px;
`;

const StyledTextInput = styled.TextInput`
  margin-left: 10px;
  font-size: 16px;
  color: #222;
  padding: 2px;
`;
