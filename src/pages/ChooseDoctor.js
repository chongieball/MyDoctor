import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, DoctorList} from '../components';
import {DoctorType} from '../models/Doctor';
import {ICBackWhite} from '../assets';
import {BasicHeaderType, HeaderType} from '../models/Constant';

const doctorList = [
  {
    id: 1,
    name: 'Alexander Jannie',
    specialist: 'Pediaticrian',
    rating: 5,
    gender: 'women',
    online: 0,
    picture: '',
  },
  {
    id: 2,
    name: 'John McParker Steve',
    specialist: 'Dentist',
    rating: 5,
    gender: 'men',
    online: 1,
    picture: '',
  },
  {
    id: 3,
    name: 'Nairobi Putri Hayza',
    specialist: 'Pediaticrian',
    rating: 5,
    gender: 'women',
    online: 0,
    picture: '',
  },
  {
    id: 4,
    name: 'James Rivillia',
    specialist: 'Pediaticrian',
    rating: 5,
    gender: 'men',
    online: 0,
    picture: '',
  },
  {
    id: 5,
    name: 'Liu Yue Tian Park',
    specialist: 'Pediaticrian',
    rating: 5,
    gender: 'women',
    online: 0,
    picture: '',
  },
];

const header = {
  title: 'Pilih Dokter Anak',
  type: BasicHeaderType.dark,
};

const ChooseDoctor = ({navigation}) => {
  return (
    <View>
      <Header
        data={header}
        type={HeaderType.basic}
        onPress={() => navigation.goBack()}
      />
      <DoctorList
        listDoctor={doctorList}
        onPress={() => navigation.navigate('Chat')}
        doctorType={DoctorType.basic}
      />
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({});
