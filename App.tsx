import React from 'react';
import { Screen } from './src/components/scr/Screen';
import { AppTextInput } from './src/components/AppTextInput/AppTextInput';
import { AppPicker } from './src/components/AppPicker/AppPicker';

export default function App() {
  return (
    <Screen>
      <AppPicker iconName='apps' placeholder='Category' />
    </Screen>
  );
}
