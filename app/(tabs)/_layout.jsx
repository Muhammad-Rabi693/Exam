import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Header } from 'react-native/Libraries/NewAppScreen'
import { Ionicons } from '@expo/vector-icons'
const TabIcon=()=>{
    <Ionicons
    name="home"/>

}

const _layout = () => {
  return (
    <Tabs screenOptions={{headerShown:false}}>
        <Tabs.Screen name='home' />
        <Tabs.Screen name='bookmark'/>
        <Tabs.Screen name='create'/>
        <Tabs.Screen name='settings'/>
    </Tabs>
  )
}

export default _layout