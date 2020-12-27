import styled from 'styled-components/native';

export const StyledCardContainer = styled.View`
  width: 90%;
  margin: auto;
  border-radius: 10px;
  overflow: hidden;
  background-color: #cbcbcb;
`;

type StyledTextProps = {
  fontColor: string;
  fontSize: string;
};

export const StyledCardText = styled.Text<Partial<StyledTextProps>>`
  color: ${({ fontColor = 'black' }) => fontColor};
  font-size: ${({ fontSize = '16px' }) => fontSize};
  margin-top: 16px;
  margin-bottom: 10px;
  margin-left: 16px;
`;
