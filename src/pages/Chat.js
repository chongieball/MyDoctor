import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, InputChat, ChatList} from '../components';
import {HeaderType} from '../models/Constant';
import {colors} from '../utils';
import {ChatType} from '../models/Chat';

const header = {
  name: 'Nairobi Putri Hayza',
  specialist: 'Dokter Anak',
};

const chats = [
  {
    id: 1,
    date: 'Senin, 21 Maret 2020',
    type: ChatType.date,
    message: null,
  },
  {
    id: 2,
    date: '4.20 AM',
    message: 'Ibu dokter, apakah memakan jeruk tiap hari itu buruk?',
    type: ChatType.me,
  },
  {
    id: 3,
    date: '4.45 AM',
    message: 'Oh tentu saja tidak karena jeruk itu sangat sehat...',
    type: ChatType.doctor,
  },
];

const Chat = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        data={header}
        type={HeaderType.doctor}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.chatContainer}>
        <ChatList list={chats} />
      </View>
      <InputChat />
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  chatContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
