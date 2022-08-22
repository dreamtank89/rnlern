import { Text, SafeAreaView } from 'react-native';
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
            <Text className="text-red-500">This is HomeScreen Header</Text>            
        </SafeAreaView>
    )
}

export default HomeScreen