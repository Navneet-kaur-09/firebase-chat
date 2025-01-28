import { useAuth } from '@/context/authContext';
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Home() {
    const {logout, user} = useAuth();
    const handleLogout = async ()=>{
        await logout();
    }
    console.log('user data: ', user)
  return (
    <View>
      <Text>Home</Text>
      <Button title="Sign Out" onPress={handleLogout}></Button>
     </View>
  );
}
