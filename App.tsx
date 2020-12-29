import React from 'react';
import { Screen } from './src/components/scr/Screen';
import { AppPicker } from './src/components/AppPicker/AppPicker';

const categories = [
  { label: 'Furniture1', value: 1 },
  { label: 'Furniture2', value: 2 },
  { label: 'Furniture3', value: 3 },
];

export default function App() {
  return (
    <Screen>
      <AppPicker items={categories} iconName='apps' placeholder='Category' />
    </Screen>
  );
}
