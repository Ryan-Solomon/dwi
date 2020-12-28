import React, { FC } from 'react';
import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

type TProps = {
  onPressFunction: () => void;
};

export const ListItemDelete: FC<TProps> = ({ onPressFunction }) => {
  return (
    <TouchableWithoutFeedback onPress={onPressFunction}>
      <StyledDeleteContainer>
        <AntDesign name='delete' size={30} color='white' />
      </StyledDeleteContainer>
    </TouchableWithoutFeedback>
  );
};

// Styles

const StyledDeleteContainer = styled.View`
  background-color: #da4141;
  width: 70px;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
