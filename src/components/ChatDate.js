import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fonts, colors} from '../utils';

const ChatDate = ({data}) => {
  return (
    <View>
      <Text style={styles.date}>{data.date}</Text>
    </View>
  );
};

export default ChatDate;

const styles = StyleSheet.create({
  date: {
    fontFamily: fonts.primary[400],
    fontSize: 11,
    color: colors.text.accent,
    textAlign: 'center',
  },
});
