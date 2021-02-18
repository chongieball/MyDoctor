import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import MessageItem from './MessageItem';

const MessageList = ({list, myId}) => {
  return (
    <FlatList
      data={list}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item, index}) => (
        <MessageItem data={item} myId={myId} index={index} />
      )}
    />
  );
};

export default MessageList;
