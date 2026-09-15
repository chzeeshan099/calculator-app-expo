import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({ children ,onPress, style='', textStyle='',  }) => {
   return (
    <TouchableOpacity
      onPress={onPress}
      className={`px-5 py-4 rounded-xl ${style}`}
    >
      <Text className={`text-center font-semibold ${textStyle}`}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}

export default Button;