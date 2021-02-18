import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DummyNews} from '../assets';
import {fonts, colors} from '../utils';

const GoodNewsItem = ({data, index, isLastPosition}) => {
  return (
    <View style={styles.container(index, isLastPosition)}>
      <View style={styles.content}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.releaseDate}>{data.release_date}</Text>
      </View>
      <Image source={DummyNews} style={styles.image} />
    </View>
  );
};

export default GoodNewsItem;

const styles = StyleSheet.create({
  container: (index, isLastPosition) => ({
    marginTop: index === 0 ? 0 : 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: isLastPosition ? 0 : 1,
    borderBottomColor: colors.border,
    paddingBottom: 12,
    paddingHorizontal: 16,
  }),
  content: {
    flex: 1,
  },
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: colors.text.default,
    maxWidth: '90%',
  },
  releaseDate: {
    fontFamily: fonts.primary[400],
    fontSize: 12,
    color: colors.text.accent,
    marginTop: 4,
  },
  image: {
    width: 80,
    height: 60,
    borderRadius: 11,
  },
});
