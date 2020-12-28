import React, { FC } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyledIconContainer } from '../../screens/ViewImageScreen/ViewImageScreenStyles';

type TIconProps = {
  name: string;
  size?: number;
  backgroundColor?: string;
  iconColor?: string;
};

export const Icon: FC<TIconProps> = ({
  name,
  size = 40,
  backgroundColor = 'black',
  iconColor = 'white',
}) => {
  return (
    <StyledIconContainer>
      <MaterialCommunityIcons name={name} size={size / 2} color={iconColor} />
    </StyledIconContainer>
  );
};
