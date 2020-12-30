import React from 'react';
import { ListItem } from './src/components/list-item/ListItem';
import { Screen } from './src/components/scr/Screen';
import { LoginScreen } from './src/screens/LoginScreen/LoginScreen';

export default function App() {
  return (
    <Screen>
      <ListItem image={require('./assets/img/logo-red.png')} />
    </Screen>
  );
}
