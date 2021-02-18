import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import ChatItem from './ChatItem';

const ChatList = ({list, onPress}) => {
  return (
    <FlatList
      data={list}
      keyExtractor={(item) => item.id.toString()}
      showsHorizontalScrollIndicator={false}
      renderItem={({item, index}) => (
        <ChatItem data={item} index={index} onPress={onPress} />
      )}
    />
  );
};

export default ChatList;

const styles = StyleSheet.create({});
