import React, { FC } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styled from 'styled-components/native';

type TProps = {
  iconName: string;
};

export const AppTextInput: FC<TProps> = ({ iconName }) => {
  return (
    <StyledTextInputContainer>
      {iconName && <MaterialCommunityIcons name={iconName as any} />}
      <StyledTextInput placeholder='Input some shit' />
    </StyledTextInputContainer>
  );
};

const StyledTextInputContainer = styled.View``;

const StyledTextInput = styled.TextInput``;
