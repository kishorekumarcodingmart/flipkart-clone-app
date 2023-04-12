import {Text, View} from 'react-native';
import React from 'react';

interface IDividerHeaderProps {
  content: string;
}

const DividerHeader = ({content}: IDividerHeaderProps) => {
  return (
    <View
      style={{
        paddingTop: 10,
        paddingBottom: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#f8f8f8',
      }}>
      <Text
        style={{
          color: 'black',
          paddingLeft: 12,
          fontSize: 17,
          fontWeight: '600',
        }}>
        {content}
      </Text>
    </View>
  );
};

export default DividerHeader;
