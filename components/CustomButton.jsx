import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = (props) => {
  return (
    <View className={`w-full items-center px-4 ${props.style}`}>
      <TouchableOpacity onPress={props.Hpress} className="w-full items-center">
        <Text className={`${props.tsize}`}>{props.name}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CustomButton