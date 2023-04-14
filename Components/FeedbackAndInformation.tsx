import React from 'react';
import QuestionIcon from 'react-native-vector-icons/SimpleLineIcons';
import TermsIcon from 'react-native-vector-icons/Ionicons';
import AccountOptionSettings from './AccountOptionSettings';

const FeedbackAndInformation = () => {
  const menuList = [
    {
      icon: (
        <TermsIcon
          name="md-newspaper-outline"
          size={22}
          color="rgb(42, 85, 229)"
        />
      ),
      menuName: 'Terms, Policies and Licenses',
    },
    {
      icon: <QuestionIcon name="question" size={22} color="rgb(42, 85, 229)" />,
      menuName: 'Browse FAQs',
    },
  ];

  return (
    <AccountOptionSettings title="Feedback & Information" menuList={menuList} />
  );
};

export default FeedbackAndInformation;
