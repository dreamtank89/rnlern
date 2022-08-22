import { Text, SafeAreaView, View, Image } from 'react-native';
import React, { useLayoutEffect } from 'react'
import { useNavigation } from "@react-navigation/native"

function HomeScreen() {
    const navigation = useNavigation()

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false
        })
    },[])
    return(
        <SafeAreaView>
            
            <View className="mx-4 mt-4 flex-row items-center">
                <Image 
                    className=" rounded-full h-11 w-11 mr-4"
                    source={require('../assets/logo-shoppegram-2021-Logo.png')}
                />
                <View>
                    <Text className="text-2xl">Overview</Text>
                </View>
            </View>            
        </SafeAreaView>
    )
}

export default HomeScreen