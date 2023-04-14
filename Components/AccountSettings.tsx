import React from 'react';
import AccountOptionSettings from './AccountOptionSettings';
import PlusIcon from 'react-native-vector-icons/Fontisto';
import UserIcon from 'react-native-vector-icons/AntDesign';
import WalletIcon from 'react-native-vector-icons/AntDesign';
import LocationIcon from 'react-native-vector-icons/Ionicons';
import LanguageIcon from 'react-native-vector-icons/FontAwesome';
import NotificationIcon from 'react-native-vector-icons/Ionicons';

const AccountSettings = () => {
  const menuList = [
    {
      icon: <PlusIcon name="plus-a" size={22} color="rgb(42, 85, 229)" />,
      menuName: 'Flipcart Plus',
    },
    {
      icon: <UserIcon name="user" size={22} color="rgb(42, 85, 229)" />,
      menuName: 'Edit Profile',
    },
    {
      icon: <WalletIcon name="wallet" size={22} color="rgb(42, 85, 229)" />,
      menuName: 'Saved Cards & Wallet',
    },
    {
      icon: (
        <LocationIcon
          name="md-location-outline"
          size={22}
          color="rgb(42, 85, 229)"
        />
      ),
      menuName: 'Saved Addresses',
    },
    {
      icon: <LanguageIcon name="language" size={22} color="rgb(42, 85, 229)" />,
      menuName: 'Select Language',
    },
    {
      icon: (
        <NotificationIcon
          name="notifications-outline"
          size={22}
          color="rgb(42, 85, 229)"
        />
      ),
      menuName: 'Notification Settings',
    },
  ];

  return <AccountOptionSettings title="Account Settings" menuList={menuList} />;
};

export default AccountSettings;
