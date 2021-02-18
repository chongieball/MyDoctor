import React from 'react';
import {ICDokterUmum, ICPsikiater, ICDokterObat, ICDokterAnak} from '../assets';
import {FlatList} from 'react-native-gesture-handler';
import DoctorMenuItem from './DoctorMenuItem';

const menuList = [
  {
    id: 1,
    title: 'dokter umum',
    icon: <ICDokterUmum />,
    navigation: 'DokterUmum',
  },
  {
    id: 2,
    title: 'psikiater',
    icon: <ICPsikiater />,
    navigation: 'Psikiater',
  },
  {
    id: 3,
    title: 'dokter obat',
    icon: <ICDokterObat />,
    navigation: 'DokterObat',
  },
  {
    id: 4,
    title: 'dokter anak',
    icon: <ICDokterAnak />,
    navigation: 'DokterAnak',
  },
];

const DoctorMenuList = ({onPress}) => {
  return (
    <FlatList
      data={menuList}
      horizontal={true}
      keyExtractor={(item) => item.id.toString()}
      showsHorizontalScrollIndicator={false}
      renderItem={({item, index}) => (
        <DoctorMenuItem
          title={item.title}
          icon={item.icon}
          isLastPosition={index === menuList.length - 1}
          onPress={onPress}
        />
      )}
    />
  );
};

export default DoctorMenuList;
