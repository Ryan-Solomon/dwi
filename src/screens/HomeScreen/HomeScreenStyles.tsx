import styled from 'styled-components/native';
import React from 'react';

import { FC } from 'react';

export const StyledText = styled.Text`
  color: black;
  text-align: center;
`;

export const StyledView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding-top: 40px;
`;

export const StyledButtonContainer = styled.View`
  flex-direction: column;
  width: 100%;
`;

type ButtonProps = {
  backgroundColor: string;
  buttonText: string;
};

const StyledButton = styled.TouchableOpacity<ButtonProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: 100%;
  padding: 14px 10px;
`;

export const StyledButtonCreator: FC<Partial<ButtonProps>> = ({
  buttonText = '',
  backgroundColor = 'black',
}) => {
  return (
    <StyledButton buttonText={buttonText} backgroundColor={backgroundColor}>
      <StyledText>{buttonText}</StyledText>
    </StyledButton>
  );
};
