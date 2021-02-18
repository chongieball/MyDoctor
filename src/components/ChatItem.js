import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ChatType} from '../models/Chat';
import ChatDate from './ChatDate';
import ChatDoctor from './ChatDoctor';
import ChatMe from './ChatMe';

const ChatItem = ({data, index, onPress}) => {
  const Chat = () => {
    switch (data.type) {
      case ChatType.doctor:
        return <ChatDoctor data={data} />;
      case ChatType.me:
        return <ChatMe data={data} />;
      default:
        return <ChatDate data={data} />;
    }
  };
  return (
    <View style={styles.container}>
      <Chat />
    </View>
  );
};

export default ChatItem;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});
