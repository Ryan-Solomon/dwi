import styled from 'styled-components/native';
import React from 'react';

import { FC } from 'react';

type TextProps = {
  color: string;
  fontSize: string;
};

export const StyledText = styled.Text<Partial<TextProps>>`
  color: ${({ color = 'white' }) => color};
  text-align: center;
  font-size: ${({ fontSize = '16px' }) => fontSize};
`;

export const StyledLogoAndHeadingContainer = styled.View`
  flex-direction: column;
  align-items: center;
`;

export const StyledView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const StyledButtonContainer = styled.View`
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

type ButtonProps = {
  backgroundColor: string;
  buttonText: string;
  borderRadius: string;
};

const StyledButton = styled.TouchableOpacity<ButtonProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: ${({ borderRadius }) => borderRadius};
  width: 90%;
  padding: 14px 10px;
  margin-bottom: 10px;
`;

export const StyledButtonCreator: FC<Partial<ButtonProps>> = ({
  buttonText = '',
  backgroundColor = 'black',
  borderRadius = '0px',
}) => {
  return (
    <StyledButton
      borderRadius={borderRadius}
      buttonText={buttonText}
      backgroundColor={backgroundColor}
    >
      <StyledText>{buttonText}</StyledText>
    </StyledButton>
  );
};
