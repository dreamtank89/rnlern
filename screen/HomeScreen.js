import { Text, SafeAreaView, View, Image, Dimensions } from 'react-native';
import React, { useLayoutEffect } from 'react'
import { useNavigation } from "@react-navigation/native"

const MyChart = () => {
    return(
        <Text>Hello</Text>
    )
}

function HomeScreen() {
    const navigation = useNavigation()

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false
        })
    },[])
    return(
        <SafeAreaView className="mx-4">
            <View className="mt-4 flex-row items-center">
                <Image 
                    className="rounded-full h-11 w-11 mr-4"
                    source={require('../assets/logo-shoppegram-2021-Logo.png')}
                />
                <View>
                    <Text className="text-xl">Today's Overview</Text>
                </View>
            </View>     

            {/* Body */}

            <View className="mt-8 flex-row justify-center ">
                <View className="">
                    <Text className="text-center text-base">Today's Sales</Text>
                    <Text className="text-3xl font-bold">RM 3970.00</Text>
                </View>
            </View>
            <View>
                <MyChart />
            </View>
            
        </SafeAreaView>
    )
}

export default HomeScreen