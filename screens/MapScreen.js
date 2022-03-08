import 'react-native-gesture-handler';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import Map from '../components/Map'
import { createStackNavigator } from '@react-navigation/stack';
import NavigateCard from '../components/NavigateCard'
import RideOptionsCard from '../components/RideOptionsCard';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';




const MapScreen = () => {
    const Stack = createStackNavigator();

    return (
        <View >
            <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")} style={tw`bg-red-100 absolute top-16 left-8 z-50 p-3 rounded-full shadow-lg`}>
                <Icon name='menu' />
                <Text>Hello</Text>
            </TouchableOpacity>
            <View style={{ height: '50%' }}>
                <Map />
            </View>
            <View style={{ height: '50%' }}>
                <Stack.Navigator>
                    <Stack.Screen name="NavigateCard" component={NavigateCard}
                        options={{
                            headerShown: false,
                        }} />
                    <Stack.Screen name="RideOptionsCard" component={RideOptionsCard}
                        options={{
                            headerShown: false,
                        }} />

                </Stack.Navigator>
            </View>
        </View>
    )
}

export default MapScreen

const styles = StyleSheet.create({})
