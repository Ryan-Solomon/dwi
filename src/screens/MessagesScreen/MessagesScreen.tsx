import React from 'react';
import { FlatList } from 'react-native';
import { ListItem } from '../../components/list-item/ListItem';
import { Screen } from '../../components/scr/Screen';
import { StyledSeparator } from '../../components/separator/ItemSeparator';

const fakeMessages = [
  {
    id: 1,
    title: 'T1',
    description: 'words1',
    image: require('../../../assets/img/logo-red.png'),
  },
  {
    id: 2,
    title: 'T2',
    description: 'words2',
    image: require('../../../assets/img/logo-red.png'),
  },
];

export const MessagesScreen = () => {
  return (
    <Screen>
      <FlatList
        data={fakeMessages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => {
          return (
            <ListItem
              subtitle={item.description}
              title={item.title}
              key={item.id}
              image={item.image}
              onPress={() => console.log(item)}
              renderRightActions={() => {}}
            />
          );
        }}
        ItemSeparatorComponent={StyledSeparator}
      />
    </Screen>
  );
};
