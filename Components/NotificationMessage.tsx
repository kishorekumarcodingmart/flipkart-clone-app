import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import OfferIcon from 'react-native-vector-icons/MaterialIcons';
import ChecklistIcon from 'react-native-vector-icons/Octicons';

const NotificationMessage = () => {
  return (
    <View style={styles.notificationMessageWrapper}>
      <View style={{width: '8%'}}>
        <OfferIcon name="local-offer" size={18} color="#2874f0" />
      </View>
      <View style={{width: '80%', paddingBottom: 12}}>
        <Text style={{color: 'black', fontWeight: '600'}}>
          Share your feedback
        </Text>
        <Text style={{marginTop: 3, fontSize: 12, fontWeight: '500'}}>
          Hi, Thanks for browsing Flipkart. Please help us improve by sharing
          you feeback.
        </Text>
        <Text style={{marginTop: 7, fontSize: 9, marginBottom: 10}}>
          2 days age
        </Text>
      </View>
      <View style={{width: '12%', borderWidth: 1}}>
        <ChecklistIcon name="checklist" size={50} color="#2874f0" />
      </View>
    </View>
  );
};

export default NotificationMessage;

const styles = StyleSheet.create({
  notificationMessageWrapper: {
    flexDirection: 'row',
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 10,
    justifyContent: 'space-around',
    backgroundColor: 'white',
  },
});
