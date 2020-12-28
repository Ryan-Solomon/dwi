import React from 'react';
import { Icon } from './src/components/Icon/Icon';
import { ListItem } from './src/components/list-item/ListItem';

export default function App() {
  return (
    <>
      <ListItem
        title='My title'
        subtitle='My subtitle'
        imageComponent={<Icon name='email' />}
      />
    </>
  );
}
