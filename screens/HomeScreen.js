import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
import NavFavorites from '../components/NavFavorites';

const HomeScreen = () => {
    const dispatch = useDispatch();
    return (

        <View style={tw`bg-white h-full`}>
            <View>
                <Image style={{ width: 100, height: 100, resizeMode: 'contain', paddingTop: 150 }} source={{
                    uri: 'https://brandlogos.net/wp-content/uploads/2021/12/uber-brandlogo.net_.png'
                }} />
            </View>
            <GooglePlacesAutocomplete styles={{
                container: {
                    flex: 0,
                },
                textInput: {
                    fontSize: 18,
                }
            }}
                onPress={(data, details = null) => {
                    dispatch(setOrigin({
                        location: details.geometry.location,
                        description: data.description,
                    }));
                    dispatch(setDestination(null))
                }}
                fetchDetails={true}
                returnKeyType={'search'}
                placeholder='Where From'
                nearbyPlacesAPI='GooglePlacesSearch' enablePoweredByContainer={false} minLength={2} query={{
                    key: GOOGLE_MAPS_APIKEY,
                    language: 'en'
                }}
            />
            <NavOptions />
            <NavFavorites />



        </View>

    )
}

export default HomeScreen

const styles = StyleSheet.create({})
