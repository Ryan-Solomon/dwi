import styled from 'styled-components/native';

export const StyledCardContainer = styled.View`
  width: 100%;
  margin-top: 30px;
  margin-right: 30px;
  margin-bottom: 30px;
  margin-left: 30px;
  border-radius: 10px;
  overflow: hidden;
  background-color: blue;
`;

type StyledTextProps = {
  fontColor: string;
  fontSize: string;
};

export const StyledCardText = styled.Text<Partial<StyledTextProps>>`
  color: ${({ fontColor = 'black' }) => fontColor};
  font-size: ${({ fontSize = '16px' }) => fontSize};
  margin-top: 16px;
  margin-left: 16px;
`;
