import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { BG } from '../assets'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

const OnBoardingScreen = () => {

    const navigation = useNavigation();

  return (
    <View className="flex-1 items-center justify-center bg-[#04020d] relative">
      <Image source={BG} className="w-full h-full object-cover"/>
      <SafeAreaView className="absolute z-10 inset-0 flex items-center justify-start">
        <View className="w-full flex px-4 pt-44">
            <Text className="text-xl text-[#f6e8e1]">Mobile</Text>
            <Text className="text-[54px] text-white tracking-wider font-bold">4k Wallpapers</Text>
        </View>
        <TouchableOpacity onPress={() => {navigation.navigate("HomeScreen")}} className="w-full px-16 mt-96">
            <View className="w-full bg-[#E1A334] p-4 flex-row items-center justify-center
             rounded-full ">
                <Text className="text-[#6F0F00] text-xl font-bold">
                    Get Started!
                </Text>
            </View>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  )
}

export default OnBoardingScreen