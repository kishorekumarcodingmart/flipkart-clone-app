import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CalendarIcon from 'react-native-vector-icons/AntDesign';
import RightIcon from 'react-native-vector-icons/Entypo';

const CreditOptions = () => {
  return (
    <View style={styles.creditOptionsWrapper}>
      <Text style={{color: 'rgb(17, 17, 18)', fontSize: 16, fontWeight: '600'}}>
        Credit Options
      </Text>
      <View style={styles.payLaterOptionsWrapper}>
        <View style={{flexDirection: 'row', gap: 15, alignItems: 'center'}}>
          <View>
            <CalendarIcon name="calendar" size={22} color="rgb(42, 85, 229)" />
          </View>
          <View>
            <Text
              style={{
                fontSize: 14,
                color: 'rgb(17, 17, 18)',
                fontWeight: '400',
              }}>
              Flipkart Pay Later
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: 'rgb(113, 116, 120)',
                fontWeight: '400',
              }}>
              Complete application & get ₹500* gift card
            </Text>
          </View>
        </View>
        <View>
          <RightIcon name="chevron-small-right" size={25} color="black" />
        </View>
      </View>
    </View>
  );
};

export default CreditOptions;

const styles = StyleSheet.create({
  creditOptionsWrapper: {
    backgroundColor: 'white',
    padding: 16,
    marginBottom: 10,
  },
  payLaterOptionsWrapper: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
  },
});
