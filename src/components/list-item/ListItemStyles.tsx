import styled from 'styled-components/native';

export const StyledListItemContainer = styled.View`
  flex-direction: row;
  margin-left: 20px;
  padding: 15px;
`;

type TextProps = {
  fontSize: string;
  fontColor: string;
  fontWeight: string;
};

export const StyledListItemText = styled.Text<Partial<TextProps>>`
  font-size: ${({ fontSize = '16px' }) => fontSize};
  color: ${({ fontColor = 'black' }) => fontColor};
  font-weight: ${({ fontWeight = 'normal' }) => fontWeight};
`;

export const StyledTextContainer = styled.View`
  flex-direction: column;
  margin-left: 10px;
`;
