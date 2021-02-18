import React from 'react';
import {DoctorType} from '../models/Doctor';
import DoctorTopRate from './DoctorTopRate';
import DoctorBasic from './DoctorBasic';

const DoctorItem = ({doctor, doctorType, index, onPress}) => {
  const Doctor = () => {
    switch (doctorType) {
      case DoctorType.topRated:
        return <DoctorTopRate doctor={doctor} index={index} />;
      default:
        return <DoctorBasic doctor={doctor} index={index} onPress={onPress} />;
    }
  };
  return <Doctor />;
};

export default DoctorItem;
