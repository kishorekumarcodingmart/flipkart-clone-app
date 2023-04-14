import React from 'react';
import StoreIcon from 'react-native-vector-icons/MaterialIcons';
import StarIcon from 'react-native-vector-icons/Feather';
import AccountOptionSettings from './AccountOptionSettings';

const EarnwithFlipkart = () => {
  const menuList = [
    {
      icon: <StarIcon name="star" size={22} color="rgb(42, 85, 229)" />,
      menuName: 'Flipkart Creator Studio',
    },
    {
      icon: <StoreIcon name="storefront" size={22} color="rgb(42, 85, 229)" />,
      menuName: 'Sell on Flipkart',
    },
  ];

  return (
    <AccountOptionSettings title="Earn with Flipkart" menuList={menuList} />
  );
};

export default EarnwithFlipkart;
