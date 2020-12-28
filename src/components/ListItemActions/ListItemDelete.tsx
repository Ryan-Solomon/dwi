import React from 'react';
import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';

export const ListItemDelete = () => {
  return (
    <StyledDeleteContainer>
      <AntDesign name='delete' size={30} color='white' />
    </StyledDeleteContainer>
  );
};

// Styles

const StyledDeleteContainer = styled.View`
  background-color: #da4141;
  width: 70px;
  justify-content: center;
  align-items: center;
`;
