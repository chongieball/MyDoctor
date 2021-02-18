import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {ILNullPhoto} from '../assets';
import {colors, fonts} from '../utils';

const ChatMe = ({data}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.message}>{data.message}</Text>
        <Text style={styles.date}>{data.date}</Text>
      </View>
    </View>
  );
};

export default ChatMe;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  content: {
    alignItems: 'flex-end',
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
  },
  message: {
    padding: 12,
    backgroundColor: colors.cardBackground,
    fontFamily: fonts.primary[400],
    fontSize: 14,
    color: colors.text.default,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomStartRadius: 8,
    maxWidth: 210,
  },
  date: {
    marginTop: 8,
    fontFamily: fonts.primary[400],
    fontSize: 11,
    color: colors.text.accent,
    textAlign: 'right',
  },
});
