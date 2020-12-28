import styled from 'styled-components/native';

export const StyledCardContainer = styled.View`
  width: 90%;
  margin: 10px auto;
  border-radius: 10px;
  overflow: hidden;
  background-color: #e2e2e2;
`;

type StyledTextProps = {
  fontColor: string;
  fontSize: string;
};

export const StyledCardText = styled.Text<Partial<StyledTextProps>>`
  color: ${({ fontColor = 'black' }) => fontColor};
  font-size: ${({ fontSize = '16px' }) => fontSize};
`;

export const StyledTextContainer = styled.View`
  margin-top: 12px;
  margin-bottom: 10px;
  margin-left: 16px;
`;
