import React from 'react';
import { ListingsScreen } from './src/screens/ListingsScreen/ListingsScreen';
import { Screen } from './src/components/scr/Screen';

export default function App() {
  return (
    <Screen>
      <ListingsScreen />
    </Screen>
  );
}
