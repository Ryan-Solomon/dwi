import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { TItem } from '../AppPicker/AppPicker';

type TProps = {
  onPressFunction: () => void;
  item: TItem;
};

export const PickerItem: FC<TProps> = ({
  onPressFunction,
  item: { label },
}) => {
  return (
    <TouchableOpacity onPress={onPressFunction}>
      <StyledText>{label}</StyledText>
    </TouchableOpacity>
  );
};

const StyledText = styled.Text`
  color: #222;
`;
