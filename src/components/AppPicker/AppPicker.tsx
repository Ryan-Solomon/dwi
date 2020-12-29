import React, { FC, useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styled from 'styled-components/native';
import { Button, Modal, TouchableWithoutFeedback } from 'react-native';
import { Screen } from '../../components/scr/Screen';

type TProps = {
  iconName?: string;
  placeholder?: string;
};

export const AppPicker: FC<TProps> = ({ iconName, placeholder }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <StyledPickerContainer>
          {iconName && (
            <MaterialCommunityIcons name={iconName as any} size={20} />
          )}
          <StyledPicker placeholder={placeholder} />
          <MaterialCommunityIcons name='chevron-down' size={20} />
        </StyledPickerContainer>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType='slide'>
        <Screen>
          <Button title='Close' onPress={() => setModalVisible(false)} />
        </Screen>
      </Modal>
    </>
  );
};

// Styles

const StyledPickerContainer = styled.View`
  background-color: #e8e6e6;
  flex-direction: row;
  align-items: center;
  padding: 10px 16px;
  border-radius: 30px;
`;

const StyledPicker = styled.TextInput`
  margin-left: 10px;
  font-size: 16px;
  color: #222;
  padding: 2px;
  flex: 1;
`;
