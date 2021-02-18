import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../utils';

const Link = ({title, fontSize, alignment, onPress}) => {
  return (
    <TouchableOpacity>
      <Text style={styles.text(fontSize, alignment)} onPress={onPress}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Link;

const styles = StyleSheet.create({
  text: (size, alignment) => ({
    color: colors.link.default,
    fontSize: size,
    fontFamily: fonts.primary[400],
    textDecorationLine: 'underline',
    textAlign: alignment,
  }),
});
