import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {ILCoverHospital} from '../assets/illustration';
import {fonts, colors} from '../utils';
import {HospitalList} from '../components';

const nearbyHospitals = [
  {
    id: 1,
    picture: '',
    name: 'Citra Bunga Merdeka',
    type: '',
    address: 'Jln. Surya Sejahtera 20',
  },
  {
    id: 2,
    picture: '',
    type: 'Anak',
    name: 'Happy Family & Kids',
    address: 'Jln. Surya Sejahtera 20',
  },
  {
    id: 3,
    picture: '',
    type: 'Jiwa',
    name: 'Tingkatan Paling Atas',
    address: 'Jln. Surya Sejahtera 20',
  },
];
const Hospitals = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={ILCoverHospital} style={styles.cover}>
        <Text style={styles.title}>Nearby Hospitals</Text>
        <Text style={styles.textAvailable}>
          {nearbyHospitals.length} Tersedia
        </Text>
      </ImageBackground>
      <View style={styles.list}>
        <HospitalList list={nearbyHospitals} />
      </View>
    </View>
  );
};

export default Hospitals;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  cover: {
    height: 240,
    alignItems: 'center',
  },
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.white,
    marginTop: 30,
  },
  textAvailable: {
    fontFamily: fonts.primary[300],
    fontSize: 14,
    color: colors.white,
    marginTop: 6,
  },
  list: {
    borderRadius: 20,
    backgroundColor: colors.white,
    flex: 1,
    marginTop: -20,
    paddingVertical: 16,
  },
});
