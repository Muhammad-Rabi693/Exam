import { View, Text, Image } from 'react-native'
import React from 'react'
import CustomInputField from '../../components/CustomInputField'
import CustomButton from '../../components/CustomButton'
import { router } from 'expo-router'
import logo from '../../assets/images.jpeg'

const signin = () => {
  return (
    <View className="bg-red-400 flex-1 justify-center mt-2 w-full">
        <Image source={logo} className="p-4 rounded-full" />
      <CustomInputField title="Eamil"/>
      <CustomInputField title="Password"/>
      <CustomButton name="Log-in" style="bg-white rounded-full mt-12 p-2" tsize="font-bold text-2xl " Hpress={()=>router.push("../(tabs)/home")}/>
      <CustomButton name="Sign-up" style="bg-white rounded-full mt-12 p-2" tsize="font-bold text-2xl " Hpress={()=>router.push("../(auth)/signup")}/>
    </View>
  )
}

export default signin