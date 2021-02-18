import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {ILNullPhoto, ICRate} from '../assets';
import {fonts, colors} from '../utils';

const DoctorTopRate = ({doctor, onPress, index}) => {
  return (
    <View style={styles.container(index)}>
      <View>
        <Image source={ILNullPhoto} style={styles.doctorImage} />
      </View>
      <View style={styles.doctorProfile}>
        <Text style={styles.doctorName}>{doctor.name}</Text>
        <Text style={styles.doctorSpecialist}>{doctor.specialist}</Text>
      </View>
      <View style={styles.rate}>
        <ICRate />
        <ICRate />
        <ICRate />
        <ICRate />
        <ICRate />
      </View>
    </View>
  );
};

export default DoctorTopRate;

const styles = StyleSheet.create({
  container: (index) => ({
    marginTop: index === 0 ? 0 : 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }),
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
  doctorSpecialist: {
    fontFamily: fonts.primary[400],
    fontSize: 12,
    color: colors.text.accent,
  },
  rate: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
});
