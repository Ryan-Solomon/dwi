import React from 'react';
import { Screen } from './src/components/scr/Screen';
import { LoginScreen } from './src/screens/LoginScreen/LoginScreen';

export default function App() {
  return (
    <Screen>
      <LoginScreen />
    </Screen>
  );
}
