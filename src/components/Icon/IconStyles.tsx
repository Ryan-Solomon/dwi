import styled from 'styled-components/native';

type TIconProps = {
  size: number;
};

export const StyledIconContainer = styled.View<TIconProps>`
  justify-content: center;
  align-items: center;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
`;
