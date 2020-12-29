import React, { useState } from 'react';
import { Screen } from './src/components/scr/Screen';
import { AppPicker, TItem } from './src/components/AppPicker/AppPicker';

const categories = [
  { label: 'Furniture1', value: 1 },
  { label: 'Furniture2', value: 2 },
  { label: 'Furniture3', value: 3 },
];

export default function App() {
  const [category, setCategory] = useState<TItem | undefined>();
  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={(item: TItem) => setCategory(item)}
        items={categories}
        iconName='apps'
        placeholder='Category'
      />
    </Screen>
  );
}
