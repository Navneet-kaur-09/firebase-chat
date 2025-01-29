import React from 'react';
import { View, Text } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function MessageItem({message, currentUser}) {
    if(currentUser?.userId==message?.userId){

        return (
            <View className='flex-row justify-end mb-3 mr-3' style={{justifyContent: 'flex-end'}}>
                <View style={{maxWidth: '80%', width: wp(80), alignSelf: 'flex-end'}}>
                    <View style={{ backgroundColor: '#E5E7EB', borderColor: '#E5E7EB', padding: 12,
        borderRadius: 16,
        borderWidth: 1, alignSelf: 'flex-end' }} className='flex p-3 rounded-2xl bg-white border border-neutral-200' >
                    <Text style={{fontSize: hp(1.9)}}>
                        {message?.text}
                    </Text>
                    </View>
                    
                </View>            
             </View>
          );

    }else{
        return (
            <View style={{alignSelf: 'flex-start', width: wp(80)}} className='ml-3 mb-3'>
                <View style={{ backgroundColor: '#E0E7FF', borderColor: '#C7D2FE', padding: 12,
        borderRadius: 16,
        borderWidth: 1, alignSelf: 'flex-start'}} className='flex self-start p-3 px-4 bg-indigo-100 border border-indigo-200 rounded-2xl'>
                <Text style={{fontSize: hp(1.9)}}>
                    {message?.text}
                </Text>

                </View>
            </View>

        )
    }
  
}
