import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import HospitalItem from './HospitalItem';

const HospitalList = ({list}) => {
  return (
    <FlatList
      data={list}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item, index}) => (
        <HospitalItem
          data={item}
          index={index}
          isLastPosition={index === list.length - 1}
        />
      )}
    />
  );
};

export default HospitalList;

const styles = StyleSheet.create({});
