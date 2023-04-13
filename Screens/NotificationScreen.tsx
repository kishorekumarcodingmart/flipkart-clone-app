import {StyleSheet, View} from 'react-native';
import React from 'react';
import NotificationTab from '../Components/NotificationTab';
import NotificationMessage from '../Components/NotificationMessage';

const NotificationScreen = () => {
  return (
    <View>
      <View style={styles.notificationHeader}>
        <NotificationTab tabName="All" isActive={true} />
        <NotificationTab tabName="Offers" isActive={false} />
      </View>
      <View>
        <NotificationMessage />
      </View>
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  notificationHeader: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f8f8f8',
    flexDirection: 'row',
    gap: 10,
    backgroundColor: 'white',
  },
});
