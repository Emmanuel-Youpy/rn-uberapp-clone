import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Platform, TouchableOpacity } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from '@env'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { StackView } from '@react-navigation/stack'
import { setDestination } from '../slices/navSlice'
import NavFavorites from './NavFavorites'
import { Icon } from 'react-native-elements';

const NavigateCard = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: 'white',
            paddingTop: Platform.OS === 'android' ? 5 : 0
        }}>



            <Text style={tw`text-center py-5 text-xl`}>Good Morning Youpil</Text>
            <View style={tw`border-t border-gray-200 flex-shrink`}>
                <View>
                    <GooglePlacesAutocomplete placeholder="Where to?"
                        styles={toInputBoxStyle}
                        nearbyPlacesAPI="GooglePlacesSearch"
                        fetchDetails={true}
                        enablePoweredByContainer={false}
                        returnKeyType={'search'}
                        minLength={2}
                        onPress={(data, details = null) => {
                            dispatch(setDestination({
                                location: details.geometry.location,
                                description: data.description,
                            }));
                            navigation.navigate('RideOptionsCard')
                        }}
                        query={{
                            key: GOOGLE_MAPS_APIKEY,
                            language: 'en'
                        }}

                    />

                </View>
                <NavFavorites />
            </View>
            <View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('RideOptionsCard')}

                    style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}>
                    <Icon name="car" type='font-awesome' color='white' size={16} />
                    <Text style={tw`text-white text-center`}>Rides</Text>

                </TouchableOpacity>
                <TouchableOpacity style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full`}>
                    <Icon name="fast-food-outline" type='ionicon' color='black' size={16} />
                    <Text style={tw`text-center`, { color: 'black' }}>Eats</Text>

                </TouchableOpacity>
            </View>

        </SafeAreaView >
    )
}

export default NavigateCard

const toInputBoxStyle = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingTop: 20,
        flex: 0,
    },
    textInput: {
        backgroundColor: 'lightgray',
        borderRadius: 0,
        fontSize: 18,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    }

})
