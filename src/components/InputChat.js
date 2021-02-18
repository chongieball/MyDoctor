import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {colors, fonts} from '../utils';
import {Button} from '.';
import IconButton from './IconButton';
import {ICSendDark} from '../assets';

const InputChat = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Tulis Pesan untuk Nairobi" />
      <IconButton icon={<ICSendDark />} backgroundColor={colors.disable} />
    </View>
  );
};

export default InputChat;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
  },
  input: {
    backgroundColor: colors.disable,
    padding: 14,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
    fontFamily: fonts.primary[400],
    maxHeight: 45,
    fontSize: 14,
  },
});
