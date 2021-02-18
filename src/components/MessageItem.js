import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {colors, fonts} from '../utils';
import {ILNullPhoto} from '../assets';

const MessageItem = ({data, myId, index}) => {
  return (
    <View style={styles.container(index)}>
      <Image source={ILNullPhoto} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.doctorName}>{data.doctor_detail.name}</Text>
        <Text style={styles.message(data.last_message.sender_id === myId)}>
          {data.last_message.message}
        </Text>
      </View>
    </View>
  );
};

export default MessageItem;

const styles = StyleSheet.create({
  container: (index) => ({
    marginTop: index === 0 ? 0 : 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingVertical: 16,
    paddingHorizontal: 16,
    alignItems: 'center',
  }),
  content: {
    flex: 1,
    marginStart: 12,
  },
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: colors.text.default,
    maxWidth: '90%',
  },
  releaseDate: {
    fontFamily: fonts.primary[400],
    fontSize: 12,
    color: colors.text.accent,
    marginTop: 4,
  },
  image: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
  doctorName: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: colors.text.default,
  },
  message: (isMe) => ({
    fontFamily: fonts.primary[300],
    fontSize: 12,
    color: isMe ? colors.text.accent : colors.text.default,
  }),
});
