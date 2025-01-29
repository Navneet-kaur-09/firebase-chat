import ChatList from '@/components/ChatList';
import { useAuth } from '@/context/authContext';
import { usersRef } from '@/firebaseConfig';
import { doc, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { View, Text, Button, StatusBar, ActivityIndicator } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function Home() {
    const {logout, user} = useAuth();
    const [users, setUsers] = useState([]);
    useEffect(()=>{
      if(user?.uid)
        getUsers();
    },[])
    const getUsers = async ()=>{
      //fetch users
      const q= query(usersRef, where('userId', '!=', user?.uid));

      const querySnapshot = await getDocs(q);
      let data =[];
      querySnapshot.forEach(doc=>{
        data.push({...doc.data()});
      });

      setUsers(data);
    }
    
  return (
    <View className="flex-1 bg-white">
      <StatusBar style="light" />
      {
        users.length>0? (
          <ChatList users={users} />
        ):(
          <View className='flex items-center' style={{top: hp(30)}}> 
            <ActivityIndicator size="large" />
          
          </View>

        )
      }
      
     </View>
  );
}
