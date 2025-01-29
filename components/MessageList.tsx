import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import MessageItem from './MessageItem';

export default function MessageList({messages, currentUser}) {
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingTop: 10}}>
        {
            messages.map((message, index)=>{
                return (
                    <MessageItem message={message} key={index} currentUser={currentUser}/>
                )
            })
        }
    </ScrollView>

  );
}
