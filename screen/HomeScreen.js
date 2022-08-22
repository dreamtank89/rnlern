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
          
                    <Text className="text-2xl">This is text</Text>
                     
        </SafeAreaView>
    )
}

export default HomeScreen