import React, { FC } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styled from 'styled-components/native';

type TIconProps = {
  name: string;
  size?: number;
  backgroundColor?: string;
  iconColor?: string;
};

export const Icon: FC<TIconProps> = ({
  name,
  size = 50,
  backgroundColor = 'black',
  iconColor = 'white',
}) => {
  return (
    <StyledIconContainer backgroundColor={backgroundColor} size={size}>
      <MaterialCommunityIcons
        name={name as any}
        size={size * 0.5}
        color={iconColor}
      />
    </StyledIconContainer>
  );
};

type TStyleProps = {
  backgroundColor: string;
  size: number;
};

const StyledIconContainer = styled.View<TStyleProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  justify-content: center;
  align-items: center;
  border-radius: ${({ size }) => size / 2};
`;
