import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface INotificationTabProps {
  tabName: string;
  isActive: boolean;
}

const NotificationTab = ({tabName, isActive}: INotificationTabProps) => {
  const styles = StyleSheet.create({
    notificationTabWrapper: {
      paddingTop: 2,
      paddingBottom: 2,
      paddingLeft: 9,
      paddingRight: 9,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: isActive ? 'rgb(40, 116, 240)' : 'black',
      alignSelf: 'flex-start',
      backgroundColor: isActive ? 'rgba(40, 116, 240,0.1)' : 'white',
    },
  });

  return (
    <View style={styles.notificationTabWrapper}>
      <Text
        style={{
          color: isActive ? 'rgb(40, 116, 240)' : 'black',
          fontWeight: '500',
        }}>
        {tabName}
      </Text>
    </View>
  );
};

export default NotificationTab;
