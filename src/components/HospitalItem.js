import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {DummyHospital} from '../assets';
import {colors, fonts} from '../utils';

const HospitalItem = ({data, index, isLastPosition}) => {
  return (
    <TouchableOpacity style={styles.container(isLastPosition)}>
      <Image source={DummyHospital} style={styles.image} />
      <View style={styles.detail}>
        <Text style={styles.name}>Rumah Sakit {data.type}</Text>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.address}>{data.address}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HospitalItem;

const styles = StyleSheet.create({
  container: (isLastPosition) => ({
    paddingVertical: 16,
    borderBottomWidth: isLastPosition ? 0 : 1,
    borderBottomColor: colors.border,
    flexDirection: 'row',
    alignItems: 'center',
  }),
  image: {
    marginStart: 16,
    width: 80,
    height: 60,
    borderRadius: 10,
  },
  detail: {
    marginHorizontal: 16,
  },
  name: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: colors.text.default,
  },
  address: {
    fontFamily: fonts.primary[300],
    fontSize: 12,
    color: colors.text.accent,
    maxWidth: '90%',
    marginTop: 6,
  },
});
