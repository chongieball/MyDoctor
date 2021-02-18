import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, Input, Button, Gap} from '../components';
import {colors} from '../utils';
import {BasicHeaderType, HeaderType} from '../models/Constant';

const dataHeader = {
  title: 'Daftar Akun',
  type: BasicHeaderType.white,
};

const SignUp = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        data={dataHeader}
        onPress={() => navigation.goBack()}
        type={HeaderType.basic}
      />
      <View style={styles.content}>
        <Input label="Fullname" />
        <Input label="Pekerjaan" />
        <Input label="Email Address" />
        <Input label="Password" />
        <Gap height={40} />
        <Button
          title="Continue"
          onPress={() => navigation.replace('UploadPhoto')}
        />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    padding: 40,
  },
});
