import React, { FC } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styled from 'styled-components/native';

type TProps = {
  iconName?: string;
};

export const AppTextInput: FC<TProps> = ({ iconName }) => {
  return (
    <StyledTextInputContainer>
      {iconName && <MaterialCommunityIcons name={iconName as any} size={25} />}
      <StyledTextInput placeholder='Input' />
    </StyledTextInputContainer>
  );
};

const StyledTextInputContainer = styled.View`
  background-color: #e8e6e6;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  border-radius: 30px;
`;

const StyledTextInput = styled.TextInput`
  margin-left: 10px;
  font-size: 16px;
  color: #222;
  padding: 2px;
`;
