import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ICBackDark} from '../assets';

const IconButton = ({icon, onPress, backgroundColor}) => {
  const Icon = () => {
    if (backgroundColor) {
      return (
        <View style={styles.container(backgroundColor)}>
          {icon ? icon : <ICBackDark />}
        </View>
      );
    } else {
      return icon ? icon : <ICBackDark />;
    }
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  container: (backgroundColor) => ({
    backgroundColor: backgroundColor,
    width: 45,
    height: 45,
    borderRadius: 10,
    paddingTop: 3,
    paddingRight: 3,
    paddingBottom: 8,
    paddingLeft: 8,
  }),
});
