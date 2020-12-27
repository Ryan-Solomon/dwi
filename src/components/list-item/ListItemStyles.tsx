import styled from 'styled-components/native';

export const StyledListItemContainer = styled.View`
  flex-direction: row;
`;

type TextProps = {
  fontSize: string;
  fontColor: string;
};

export const StyledListItemText = styled.Text<Partial<TextProps>>`
  font-size: ${({ fontSize = '16px' }) => fontSize};
  color: ${({ fontColor = '16px' }) => fontColor};
`;

export const StyledTextContainer = styled.View`
  flex-direction: column;
`;
