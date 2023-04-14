import React from 'react';
import NotificationIcon from 'react-native-vector-icons/SimpleLineIcons';
import ChatIcon from 'react-native-vector-icons/Ionicons';
import AccountOptionSettings from './AccountOptionSettings';

const MyActivity = () => {
  const menuList = [
    {
      icon: <NotificationIcon name="note" size={22} color="rgb(42, 85, 229)" />,
      menuName: 'Reviews',
    },
    {
      icon: (
        <ChatIcon
          name="chatbubbles-outline"
          size={22}
          color="rgb(42, 85, 229)"
        />
      ),
      menuName: 'Questions & Answers',
    },
  ];

  return <AccountOptionSettings title="My Activity" menuList={menuList} />;
};

export default MyActivity;
