import { View, Text, TextInput } from 'react-native'
import React from 'react'

const CustomInputField = (props) => {
  return (
    <View  className="justify-center  px-3 mt-2 border-transparent shadow-transparent">
    <Text className="text-2xl font-bold">{props.title}</Text>
    <View className="bg-white p-2 rounded-full  w-full">
      <TextInput value={props.code} onChangeText={props.htext}>
      </TextInput>
    </View>
    </View>
  )
}

export default CustomInputField