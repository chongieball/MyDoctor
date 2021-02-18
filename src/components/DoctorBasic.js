import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {ILNullPhoto, ICChoose} from '../assets';
import {fonts, colors} from '../utils';

const DoctorBasic = ({doctor, onPress, index}) => {
  return (
    <TouchableOpacity style={styles.container(index)} onPress={onPress}>
      <View style={styles.content}>
        <Image source={ILNullPhoto} style={styles.doctorImage} />
        <View style={styles.doctorProfile}>
          <Text style={styles.doctorName}>{doctor.name}</Text>
          <Text style={styles.gender}>
            {doctor.gender === 'men' ? 'Pria' : 'Wanita'}
          </Text>
        </View>
        <ICChoose style={styles.icon} />
      </View>
    </TouchableOpacity>
  );
};

export default DoctorBasic;

const styles = StyleSheet.create({
  container: (index) => ({
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  }),
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  doctorImage: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
  doctorProfile: {
    alignContent: 'center',
    marginStart: 12,
    justifyContent: 'center',
    flex: 1,
  },
  doctorName: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: colors.text.default,
  },
  gender: {
    fontFamily: fonts.primary[400],
    fontSize: 12,
    color: colors.text.accent,
  },
  icon: {
    alignContent: 'center',
    justifyContent: 'center',
  },
});
