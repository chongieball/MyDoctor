import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DummyProfile} from '../assets';
import {fonts, colors} from '../utils';

const HomeProfile = () => {
  return (
    <View style={styles.container}>
      <Image source={DummyProfile} style={styles.avatar} />
      <View style={styles.profile}>
        <Text style={styles.name}>Shayna Melinda</Text>
        <Text style={styles.job}>Product Desginer</Text>
      </View>
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
  name: {
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    fontSize: 16,
  },
  job: {
    fontFamily: fonts.primary[400],
    color: colors.text.accent,
    fontSize: 12,
  },
  profile: {
    alignContent: 'center',
    marginStart: 12,
    justifyContent: 'center',
  },
});
