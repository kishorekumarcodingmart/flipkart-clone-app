import {StyleSheet, Text, View} from 'react-native';
import RightIcon from 'react-native-vector-icons/Entypo';
import React, {Fragment} from 'react';

interface IMenuList {
  icon: JSX.Element;
  menuName: String;
}

interface IAccountOptionSettingsProps {
  title: string;
  menuList: IMenuList[];
}

const AccountOptionSettings = ({
  title,
  menuList,
}: IAccountOptionSettingsProps) => {
  return (
    <View style={{backgroundColor: 'white', padding: 16, marginBottom: 10}}>
      <Text style={{color: 'rgb(17, 17, 18)', fontSize: 16, fontWeight: '600'}}>
        {title}
      </Text>
      {menuList.map((val, index) => {
        return (
          <View
            key={index}
            style={{
              marginTop: 16,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', gap: 15, alignItems: 'center'}}>
              <View>
                <Fragment>{val.icon}</Fragment>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 14,
                    color: 'rgb(17, 17, 18)',
                    fontWeight: '400',
                  }}>
                  {val.menuName}
                </Text>
              </View>
            </View>
            <View>
              <RightIcon name="chevron-small-right" size={25} color="black" />
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default AccountOptionSettings;

const styles = StyleSheet.create({});
