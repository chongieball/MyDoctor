import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {ILNullPhoto} from '../assets';
import {colors, fonts} from '../utils';

const ChatDoctor = ({data}) => {
  return (
    <View style={styles.container}>
      <Image source={ILNullPhoto} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.message}>{data.message}</Text>
        <Text style={styles.date}>{data.date}</Text>
      </View>
    </View>
  );
};

export default ChatDoctor;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  content: {
    alignItems: 'flex-start',
    marginStart: 12,
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
  },
  message: {
    padding: 12,
    backgroundColor: colors.text.active,
    fontFamily: fonts.primary[400],
    fontSize: 14,
    color: colors.text.default,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
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
