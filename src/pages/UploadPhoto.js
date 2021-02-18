import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Header, Button, Link, Gap} from '../components';
import {ICBackDark, ILNullPhoto, ICAdd} from '../assets';
import {colors, fonts} from '../utils';
import {BasicHeaderType, HeaderType} from '../models/Constant';

const header = {
  title: 'Upload Photo',
  type: BasicHeaderType.white,
};

const UploadPhoto = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        data={header}
        icon={<ICBackDark />}
        onPress={() => navigation.goBack()}
        type={HeaderType.basic}
      />
      <View style={styles.content}>
        <View style={styles.profile}>
          <View style={styles.avatarWrapper}>
            <Image source={ILNullPhoto} style={styles.avatar} />
            <ICAdd style={styles.addPhoto} />
          </View>
          <Text style={styles.name}>Shayna Melinda</Text>
          <Text style={styles.job}>Product Designer</Text>
        </View>
        <View>
          <Button title="Upload and Continue" style={styles.button} />
          <Gap height={30} />
          <Link title="Skip for this" alignment="center" size={16} />
        </View>
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
    alignContent: 'center',
  },
  content: {
    paddingHorizontal: 40,
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  profile: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
  },
  avatarWrapper: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addPhoto: {
    position: 'absolute',
    right: 6,
    bottom: 8,
  },
  name: {
    fontFamily: fonts.primary[600],
    fontSize: 24,
    color: colors.text.default,
    textAlign: 'center',
  },
  job: {
    fontFamily: fonts.primary[400],
    fontSize: 18,
    color: colors.text.accent,
    textAlign: 'center',
  },
});
