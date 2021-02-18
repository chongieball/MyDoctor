import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import GoodNewsItem from './GoodNewsItem';

const GoodNewsList = ({list}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={list}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item, index}) => (
          <GoodNewsItem
            data={item}
            index={index}
            isLastPosition={index === list.length - 1}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default GoodNewsList;
