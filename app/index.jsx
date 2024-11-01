import { View, Text, Image } from 'react-native'
import React from 'react'
import logo from '../assets/images.jpeg'
import CustomButton from '../components/CustomButton'
import { router } from 'expo-router'

const index = () => {
  return (
    <View className="bg-red-400 flex-1 items-center justify-center">
        <Image source={logo} className="p-4 rounded-full" />
      <CustomButton name="Get started" style=" bg-white rounded-full mt-12 p-2" tsize="font-bold text-4xl " Hpress={()=>router.push("./(auth)/signin")}/>
    </View>
  )
}

export default index