import React, {useState} from 'react';
import ToggleSwitch from 'toggle-switch-react-native';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import SearchIcons from 'react-native-vector-icons/AntDesign';
import MicIcon from 'react-native-vector-icons/Ionicons';
import CameraIcon from 'react-native-vector-icons/Feather';

function Search() {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <View style={style.searchWrapper}>
      <View style={style.toggleWrapper}>
        <View>
          <Text style={style.toggleText}>Brand Mall</Text>
        </View>
        <View>
          <ToggleSwitch
            isOn={toggle}
            onColor="black"
            offColor="#bbbbbb"
            size="small"
            onToggle={isOn => setToggle(isOn)}
          />
        </View>
      </View>
      <View style={style.inputWrapper}>
        <View style={style.inputBorder}>
          <View style={style.inputIcons}>
            <SearchIcons name="search1" size={20} color="#cccccc" />
          </View>
          <View style={style.inputBox}>
            <TextInput placeholder="Search for products" />
          </View>
          <View style={style.inputIcons}>
            <MicIcon name="md-mic-outline" size={25} color="#cccccc" />
          </View>
          <View style={style.inputIcons}>
            <CameraIcon name="camera" size={25} color="#cccccc" />
          </View>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  searchWrapper: {
    display: 'flex',
    flexDirection: 'row',
    height: 55,
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  toggleWrapper: {
    width: '20%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  toggleText: {
    fontSize: 10,
    color: 'black',
    fontWeight: '600',
  },
  inputWrapper: {
    padding: '1%',
    // borderWidth: 2,
    width: '80%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  inputBorder: {
    borderWidth: 1,
    width: '96%',
    borderColor: '#cccccc',
    height: '90%',
    backgroundColor: '#F8F8F8',
    borderRadius: 2,
    display: 'flex',
    flexDirection: 'row',
  },
  inputIcons: {
    alignItems: 'center',
    width: '15%',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
  },
  inputBox: {
    width: '55%',
  },
});

export default Search;
