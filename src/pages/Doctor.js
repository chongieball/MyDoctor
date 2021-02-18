import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {
  HomeProfile,
  DoctorMenuList,
  DoctorList,
  GoodNewsList,
  Gap,
} from '../components';
import {fonts, colors} from '../utils';
import {DoctorType} from '../models/Doctor';

const topRatedList = [
  {
    id: 1,
    name: 'Alexa Rachel',
    specialist: 'Pediaticrian',
    rating: 5,
    gender: 'women',
    online: 0,
    picture: '',
  },
  {
    id: 2,
    name: 'Sunny Frank',
    specialist: 'Dentist',
    rating: 5,
    gender: 'men',
    online: 1,
    picture: '',
  },
  {
    id: 3,
    name: 'Poe Minn',
    specialist: 'Pediaticrian',
    rating: 5,
    gender: 'men',
    online: 0,
    picture: '',
  },
];

const goodNewsList = [
  {
    id: 1,
    title: 'Is it safe to stay at home during coronavirus?',
    link: '',
    release_date: 'Today',
    image: '',
  },
  {
    id: 2,
    title: 'Consume yellow citrus helps you healthier',
    link: '',
    release_date: 'Today',
    image: '',
  },
  {
    id: 3,
    title: 'Learn how to make a proper orange juice at home',
    link: '',
    release_date: 'Today',
    image: '',
  },
];

const Doctor = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={30} />
          <View style={styles.wrapperContent}>
            <HomeProfile />
            <Text style={styles.title}>
              Mau konsultasi dengan siapa hari ini?
            </Text>
          </View>
          <DoctorMenuList
            style={styles.doctorList}
            onPress={() => navigation.navigate('ChooseDoctor')}
          />
          <View style={styles.wrapperContent}>
            <Text style={styles.titleList}>Top Rated Doctors</Text>
            <DoctorList
              listDoctor={topRatedList}
              doctorType={DoctorType.topRated}
              style={styles.doctorList}
            />
            <Text style={styles.titleList}>Good News</Text>
          </View>
          <GoodNewsList list={goodNewsList} />
          <Gap height={30} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.text.primary,
    maxWidth: 209,
    marginTop: 30,
  },
  doctorList: {
    marginTop: 16,
  },
  titleList: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    marginTop: 30,
    marginBottom: 16,
    color: colors.text.primary,
  },
  content: {
    flex: 1,
    backgroundColor: colors.white,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  wrapperContent: {
    paddingHorizontal: 16,
  },
});
