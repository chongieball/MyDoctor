import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  ICDoctorUnactive,
  ICMessagesUnactive,
  ICHospitalsUnactive,
  ICDoctorActive,
  ICHospitalsActive,
  ICMessagesActive,
} from '../assets';
import {colors, fonts} from '../utils';

const TabItem = ({title, isActive, onPress, onLongPress}) => {
  const Icon = () => {
    switch (title) {
      case 'Doctor':
        return isActive ? <ICDoctorActive /> : <ICDoctorUnactive />;
      case 'Messages':
        return isActive ? <ICMessagesActive /> : <ICMessagesUnactive />;
      case 'Hospitals':
        return isActive ? <ICHospitalsActive /> : <ICHospitalsUnactive />;
      default:
        return isActive ? <ICDoctorActive /> : <ICDoctorUnactive />;
    }
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text(isActive)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: (isActive) => ({
    color: isActive ? colors.text.active : colors.text.inactive,
    fontSize: 10,
    fontFamily: fonts.primary[600],
    marginTop: 4,
  }),
});
