import { Text, SafeAreaView, View, Image, Dimensions, StyleSheet } from 'react-native';
import React, { useLayoutEffect } from 'react'
import { useNavigation } from "@react-navigation/native"
import {
    BarChart,
  } from 'react-native-chart-kit';

const MyChart = () => {
    return(
        <>
            
            <BarChart
                data={{
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept'],
                datasets: [
                    {
                    data: [100, 999, 28, 87, 99, 43, 7000, 999, 1019],
                    },
                ],
                }}
                width={Dimensions.get('window').width - 25}
                height={250}
                withInnerLines = {false}
                showValuesOnTopOfBars={true}
                withHorizontalLabels={false}
                chartConfig={{
                    barRadius:1,
                    strokeWidth:1,	
                    backgroundGradientFrom: '#eff3ff',
                    backgroundGradientTo: '#efefef',
                    decimalPlaces: 0,
                    barPercentage:0.35,
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    style: {
                        borderRadius: 5,
                    },
                    }}
                    style={{
                    borderRadius: 5,
                }}
            />
        </>
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

            <View className="column">
                <View className="mt-8 flex-row justify-center ">
                    <View className="">
                        <Text className="py-1 text-center text-base">Today's Sales</Text>
                        <Text className="text-3xl font-bold">RM 3970.00</Text>
                        <Text className="text-center text-base">20 Orders</Text>
                    </View>
                </View>
                <View style={styles.container} className="mr-12">
                    <View>
                        <MyChart />
                    </View>
                </View>

                <View className="mt-4 column bg-white shadow-md rounded-lg p-4">
                    <View className="flex-row space-between ">
                        <View className=" flex-row flex-auto">
                            <Text >Ads Cost</Text>
                            <Text className=" text-blue-600">Edit</Text>
                        </View>
                        <View className="flex-auto">
                            <Text > Profit / Loss</Text>
                        </View>
                    </View>
                    <View className="flex-row space-between rounded">
                        <Text className="flex-auto text-lg">RM1733.20</Text>
                        <Text className="flex-auto text-lg text-green-700">RM2200.90</Text>
                    </View>
                </View>
                
            </View>
            
            
           
            
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
      
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: 10,
    },
})