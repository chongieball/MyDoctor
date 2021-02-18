import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../assets';
import {Gap, Input, Link, Button} from '../components';
import {colors, fonts} from '../utils';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
      <Gap height={40} />
      <Input label={'Email Address'} />
      <Gap height={24} />
      <Input label={'Password'} />
      <Gap height={10} />
      <Link
        title={'Forgot Password'}
        fontSize={12}
        onPress={() => navigation.navigate('SignUp')}
      />
      <Gap height={40} />
      <Button title={'Sign In'} onPress={() => navigation.replace('MainApp')} />
      <Gap height={30} />
      <Link
        title={'Create New Account'}
        fontSize={16}
        alignment={'center'}
        onPress={() => navigation.navigate('SignUp')}
      />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    flex: 1,
  },
  title: {
    fontSize: 20,
    color: colors.black,
    maxWidth: 153,
    fontFamily: fonts.primary[600],
    marginTop: 40,
  },
});
