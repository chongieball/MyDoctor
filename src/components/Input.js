import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {colors, fonts} from '../utils';

const Input = ({label}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    color: colors.input.label,
    fontFamily: fonts.primary[400],
  },
  input: {
    borderRadius: 10,
    borderColor: colors.input.border,
    borderWidth: 1,
    marginTop: 6,
    padding: 12,
  },
});
