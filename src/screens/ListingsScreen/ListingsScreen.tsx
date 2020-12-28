import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { Card } from '../../components/card/Card';
import { Screen } from '../../components/scr/Screen';

const fakeListings = [
  {
    id: 1,
    title: 'Red jacket',
    description: '$100',
    image: require('../../../assets/img/jacket.jpg'),
  },
  {
    id: 2,
    title: 'Couch for sitting',
    description: '$1000',
    image: require('../../../assets/img/couch.jpg'),
  },
];

export const ListingsScreen = () => {
  return (
    <Screen>
      <FlatList
        data={fakeListings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <Card
              title={item.title}
              image={item.image}
              subtitle={item.description}
            />
          );
        }}
      />
    </Screen>
  );
};
