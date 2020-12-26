import styled from 'styled-components/native';
import { ImageBackground } from 'react-native';
import { FC } from 'react';

export const StyledText = styled.Text`
  color: black;
`;

export const StyledView = styled.View`
  flex: 1;
  align-items: center;
`;

type ButtonProps = {
  backgroundColor: string;
  buttonText: string;
};

const StyledButton = styled.TouchableOpacity<ButtonProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const StyledButtonCreator: FC<ButtonProps> = ({
  buttonText,
  backgroundColor = 'black',
}) => {
  return (
    <StyledButton buttonText={buttonText} backgroundColor={backgroundColor}>
      <StyledText>{buttonText}</StyledText>
    </StyledButton>
  );
};
