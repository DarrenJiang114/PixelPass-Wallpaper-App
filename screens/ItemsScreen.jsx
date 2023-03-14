import { View, Text, ActivityIndicator, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getCategoryItemsById } from '../sanity';
import { Entypo } from '@expo/vector-icons';
import MasonryLayout from './MasonryLayout';
const ItemsScreen = ({route}) => {

    const id = route?.params.param;
    const [items, setItems] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getCategoryItemsById(id).then(data => setItems(data)).catch(err => alert(err)) 
        setInterval(() => {setIsLoading(false)}, 2000);
    }, []);
  return (
    <View className="flex-1 items-center justify-center bg-[#04020d] relative">
      {isLoading ? (
        <ActivityIndicator color={"#ff0000"} size="large"/>)
       : (<>
        {items ? (<><SafeAreaView className="flex w-full h-full items-center justify-start gap-4">
        <View className="w-full px-6 flex-row items-center justify-between">
            <Text className="text-2xl text-gray-50 font-semibold">
                4K Wallpapers
            </Text>
            <TouchableOpacity>
                <Entypo name="dots-three-vertical" size={24} color="white" />
            </TouchableOpacity>
        </View>
        <ScrollView className="w-full h-full px-4">
            {items ? (
                <MasonryLayout data={items} screen="Item"/>
            ): ( <>
            <ActivityIndicator color={"#ff0000"} size="large"/>
            </>)}
        </ScrollView>
      </SafeAreaView></>) : (<><Text className="text-3xl font-bold text-white">No Items Found</Text></>)}
      </>)}
     
    </View>
  )
}

export default ItemsScreen