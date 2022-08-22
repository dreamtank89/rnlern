import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TailwindProvider } from 'tailwindcss-react-native';
import HomeScreen  from './screen/HomeScreen'
import ProfileScreen from './screen/ProfileScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer >
      <TailwindProvider>
        <Stack.Navigator initialRouteName="Rumah">
          <Stack.Screen name="Rumah" component={HomeScreen}/>
          <Stack.Screen name="Profile" component={ProfileScreen}/>
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
    
  );
}


