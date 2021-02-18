import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Gap from './Gap';
import {colors, fonts} from '../utils';
import IconButton from './IconButton';
import {HeaderType, BasicHeaderType} from '../models/Constant';
import {ICBackWhite, ICBackDark, ILNullPhoto} from '../assets';

/**
 * example data for type HeaderType.basic
 * {
 *  title: 'Header',
 *  type: BasicHeaderType.dark || BasicHeaderType.white
 * }
 */

const Header = ({onPress, type, data}) => {
  const Body = () => {
    switch (type) {
      case HeaderType.doctor:
        return (
          <View style={stylesDoctor.container}>
            <IconButton icon={<ICBackWhite />} onPress={onPress} />
            <View>
              <Text style={stylesDoctor.name}>{data.name}</Text>
              <Text style={stylesDoctor.specialist}>{data.specialist}</Text>
            </View>
            <Image source={ILNullPhoto} style={stylesDoctor.image} />
          </View>
        );
      default:
        return (
          <View style={stylesBasic.container(data.type)}>
            <IconButton
              icon={
                data.type === BasicHeaderType.white ? (
                  <ICBackDark />
                ) : (
                  <ICBackWhite />
                )
              }
              onPress={onPress}
            />
            <Text style={stylesBasic.text(data.type)}>{data.title}</Text>
            <Gap width={24} />
          </View>
        );
    }
  };
  return <Body />;
};

export default Header;

const stylesBasic = StyleSheet.create({
  container: (type) => ({
    paddingHorizontal: 16,
    paddingVertical: 30,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:
      type === BasicHeaderType.dark ? colors.secondary : colors.white,
    borderBottomLeftRadius: type === BasicHeaderType.dark ? 20 : 0,
    borderBottomRightRadius: type === BasicHeaderType.dark ? 20 : 0,
  }),
  text: (type) => ({
    color: type === BasicHeaderType.dark ? colors.white : colors.text.default,
    fontFamily: fonts.primary[600],
    fontSize: 20,
    textAlign: 'center',
    flex: 1,
  }),
});

const stylesDoctor = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 30,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.secondary,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'space-between',
  },
  name: {
    color: colors.white,
    fontFamily: fonts.primary[600],
    fontSize: 20,
    textAlign: 'center',
  },
  specialist: {
    color: colors.text.bodyHeader,
    fontFamily: fonts.primary[600],
    fontSize: 14,
    textAlign: 'center',
    marginTop: 6,
  },
  image: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
});
