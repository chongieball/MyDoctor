import React from 'react';
import {FlatList} from 'react-native';
import DoctorItem from './DoctorItem';

const DoctorList = ({listDoctor, doctorType, onPress}) => {
  return (
    <FlatList
      data={listDoctor}
      keyExtractor={(item) => item.id.toString()}
      showsHorizontalScrollIndicator={false}
      renderItem={({item, index}) => (
        <DoctorItem
          doctor={item}
          doctorType={doctorType}
          index={index}
          onPress={onPress}
        />
      )}
    />
  );
};

export default DoctorList;
