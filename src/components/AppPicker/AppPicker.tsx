import React, { FC } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styled from 'styled-components/native';

type TProps = {
  iconName?: string;
  placeholder?: string;
};

export const AppPicker: FC<TProps> = ({ iconName, placeholder }) => {
  return (
    <StyledPickerContainer>
      {iconName && <MaterialCommunityIcons name={iconName as any} size={20} />}
      <StyledPicker placeholder={placeholder} />
      <MaterialCommunityIcons name='chevron-down' size={20} />
    </StyledPickerContainer>
  );
};

// Styles

const StyledPickerContainer = styled.View`
  background-color: #e8e6e6;
  flex-direction: row;
  align-items: center;
  padding: 10px 16px;
  border-radius: 30px;
`;

const StyledPicker = styled.TextInput`
  margin-left: 10px;
  font-size: 16px;
  color: #222;
  padding: 2px;
  flex: 1;
`;
