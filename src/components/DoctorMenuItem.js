import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '../utils/colors';
import {fonts} from '../utils';

const DoctorMenuItem = ({title, icon, onPress, isLastPosition}) => {
  return (
    <TouchableOpacity
      style={styles.container(isLastPosition)}
      onPress={onPress}>
      {icon}
      <Text style={styles.header}>Saya butuh</Text>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default DoctorMenuItem;

const styles = StyleSheet.create({
  container: (isLastPosition) => ({
    padding: 12,
    backgroundColor: colors.cardBackground,
    marginStart: 10,
    marginEnd: isLastPosition ? 10 : 0,
    borderRadius: 10,
    width: 100,
    height: 130,
  }),
  title: {
    color: colors.text.default,
    fontFamily: fonts.primary[600],
    fontSize: 12,
  },
  header: {
    color: colors.text.default,
    fontFamily: fonts.primary[300],
    marginTop: 28,
    fontSize: 12,
  },
});
