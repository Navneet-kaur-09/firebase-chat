import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

export default function chatRoom() {
    const item = useLocalSearchParams();
    console.log('got item data: ', item);
  return (
    <View>
      <Text>chatRoom</Text>
     </View>
  );
}
