import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from '../../components/list-item/ListItem';
import { Screen } from '../../components/scr/Screen';
import { StyledSeparator } from '../../components/separator/ItemSeparator';
import { ListItemDelete } from './../../components/ListItemActions/ListItemDelete';

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
  const [messages, setMessages] = useState(fakeMessages);

  const deleteMessage = (id: number) => {
    console.log('__________');
    const newMessages = messages.filter((message) => {
      console.log(id);
      console.log(message);
      if (message.id !== id) return message;
      else {
        return;
      }
    });
    setMessages(newMessages);
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => {
          return (
            <ListItem
              subtitle={item.description}
              title={item.title}
              key={item.id}
              image={item.image}
              onPress={() => console.log(item)}
              renderRightActions={() => (
                <ListItemDelete
                  onPressFunction={() => deleteMessage(item.id)}
                />
              )}
            />
          );
        }}
        ItemSeparatorComponent={StyledSeparator}
      />
    </Screen>
  );
};
