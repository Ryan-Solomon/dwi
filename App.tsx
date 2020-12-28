import React from 'react';
import { Screen } from './src/components/scr/Screen';
import { AppTextInput } from './src/components/AppTextInput/AppTextInput';

export default function App() {
  return (
    <Screen>
      <AppTextInput iconName='email' />
    </Screen>
  );
}
