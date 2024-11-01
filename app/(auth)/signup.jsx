import { View, Text, Image } from 'react-native'
import React from 'react'
import CustomInputField from '../../components/CustomInputField'
import CustomButton from '../../components/CustomButton'
import logo from '../../assets/images.jpeg'
import { useSignUp } from '@clerk/clerk-expo'
import { useRouter } from 'expo-router'

const signup = () => {
    const { isLoaded, signUp, setActive } = useSignUp()
    const router = useRouter()
  
    const [emailAddress, setEmailAddress] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [pendingVerification, setPendingVerification] = React.useState(false)
    const [code, setCode] = React.useState('')
  
    const onSignUpPress = async () => {
      if (!isLoaded) {
        return
      }
  
      try {
        await signUp.create({
          emailAddress,
          password,
        })
  
        await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })
  
        setPendingVerification(true)
      } catch (err) {
        console.error(JSON.stringify(err, null, 2))
      }
    }
  
    const onPressVerify = async () => {
      if (!isLoaded) {
        return
      }
  
      try {
        const completeSignUp = await signUp.attemptEmailAddressVerification({
          code,
        })
  
        if (completeSignUp.status === 'complete') {
          await setActive({ session: completeSignUp.createdSessionId })
          router.replace('/')
        } else {
          console.error(JSON.stringify(completeSignUp, null, 2))
        }
      } catch (err) {
    
        console.error(JSON.stringify(err, null, 2))
      }
    }
  
  return (
    <View className="bg-red-400 flex-1 justify-center mt-2 w-full">
    {!pendingVerification && (
      <>
        <TextInput
          autoCapitalize="none"
          value={emailAddress}
          placeholder="Email..."
          onChangeText={(email)=> setEmailAddress(email)}
        />
        <TextInput
          value={password}
          placeholder="Password..."
          secureTextEntry={true}
          onChangeText={(password)=> setPassword(password)}
        />
        <Button title="Sign Up" onPress={onSignUpPress} />
      </>
    )}
    {pendingVerification && (
      <>
      <CustomInputField title="Name" htext={(code)=> setCode(code)} />
        <TextInput value={code} placeholder="Code..." onChangeText={(code)=> setCode(code)} />
        <Button title="Verify Email" onPress={onPressVerify} />
      </>
    )}
    
        <Image source={logo} className="p-4 rounded-full" />
        <CustomInputField title="Name"/>
      <CustomInputField title="Eamil"/>
      <CustomInputField title="Password"/>
      <CustomButton name="Sign-up" style="bg-white rounded-full mt-12 p-2" tsize="font-bold text-2xl "/>
      <CustomButton name="Log-in" style="bg-white rounded-full mt-12 p-2" tsize="font-bold text-2xl " Hpress={()=>router.push("../(auth)/signin")}/>
    </View>
  )
}

export default signup