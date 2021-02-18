import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MessageList} from '../components';
import {fonts, colors} from '../utils';

const messageList = [
  {
    id: 1,
    last_message: {
      sender_id: 0,
      message: 'Baik ibu, terima kasih banyak atas waktunya',
    },
    doctor_detail: {
      id: 1,
      name: 'Alexander Jannie',
    },
  },
  {
    id: 2,
    last_message: {
      sender_id: 2,
      message: 'Oh tentu saja tidak karena jeruk itu menyehatkan',
    },
    doctor_detail: {
      id: 2,
      name: 'Nairobi Putri Hayza',
    },
  },
  {
    id: 3,
    last_message: {
      sender_id: 0,
      message: 'Oke, menurut dokter bagaimana untuk mengatasinya',
    },
    doctor_detail: {
      id: 3,
      name: 'John McParker Steve',
    },
  },
];

const Messages = () => {
  const [messages] = useState(messageList);
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        <MessageList list={messages} myId={0} />
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  title: {
    paddingHorizontal: 16,
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.text.default,
  },
  content: {
    flex: 1,
    backgroundColor: colors.white,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    paddingVertical: 30,
  },
});
