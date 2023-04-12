import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import SearchIcons from 'react-native-vector-icons/Feather';
import MicIcons from 'react-native-vector-icons/FontAwesome';

const CustomHeader = () => {
  return (
    <View style={style.customHeader}>
      <View>
        <Text style={{color: 'white', fontSize: 18}}>All Categories</Text>
      </View>
      <View style={{flexDirection: 'row', gap: 30}}>
        <SearchIcons name="search" size={20} color="white" />
        <MicIcons name="microphone" size={20} color="white" />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  customHeader: {
    height: 55,
    backgroundColor: 'rgba(40,116,240,1.00)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 12,
    paddingRight: 15,
  },
});

export default CustomHeader;
