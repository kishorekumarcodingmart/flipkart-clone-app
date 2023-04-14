import {
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import OrderComponent from '../Components/OrderComponent';
import CreditOptions from '../Components/CreditOptions';
import AccountSettings from '../Components/AccountSettings';
import MyActivity from '../Components/MyActivity';
import EarnwithFlipkart from '../Components/EarnwithFlipkart';
import FeedbackAndInformation from '../Components/FeedbackAndInformation';

const AccountScreen = () => {
  return (
    <ScrollView>
      <OrderComponent />
      <CreditOptions />
      <AccountSettings />
      <MyActivity />
      <EarnwithFlipkart />
      <FeedbackAndInformation />
      <View style={styles.logoutBtnWrapper}>
        <TouchableOpacity style={styles.logoutBtn}>
          <Text style={styles.logoutBtnText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  logoutBtnWrapper: {
    padding: 16,
  },
  logoutBtn: {
    backgroundColor: 'white',
    paddingTop: 5,
    paddingBottom: 5,
    borderWidth: 1,
    borderColor: 'rgb(213, 215, 219)',
  },
  logoutBtnText: {
    textAlign: 'center',
    color: 'rgb(42, 85, 229)',
    fontSize: 15,
    fontWeight: '600',
  },
});
