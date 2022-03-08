import React, { useState } from 'react'
import { StyleSheet, Text, View, Platform, SafeAreaView, TouchableOpacity, FlatList, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectTravelTimeInformation } from '../slices/navSlice';





const data = [
    {
        id: 'Uber-X-123',
        title: 'UberX',
        multiplier: 1,
        image: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_537/v1568070387/assets/b5/0a5191-836e-42bf-ad5d-6cb3100ec425/original/UberX.png'
    },
    {
        id: 'Uber-XL-456',
        title: 'Uber XL',
        multiplier: 1.2,
        image: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_537/v1569012915/assets/4f/599c47-7f5c-4544-a5d2-926babc8e113/original/Lux.png'
    },
    {
        id: 'Uber-LUX-789',
        title: 'Uber LUX',
        multiplier: 1.75,
        image: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_537/v1568134115/assets/6d/354919-18b0-45d0-a151-501ab4c4b114/original/XL.png'
    },
]

const SURGE_CHANGE_RATE = 1.5


const RideOptionsCard = () => {
    const navigation = useNavigation();
    const [selected, setSelected] = useState(null)
    const travelTimeInformation = useSelector(selectTravelTimeInformation)


    return (
        <SafeAreaView style={styles.container}>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('NavigateCard')} style={tw`absolute top-3  p-3 rounded-full`}>
                    <Icon name='chevron-left' type='fontawesome' />
                </TouchableOpacity>
                <Text style={tw`text-center py-5 text-xl`}>Select A Ride - {travelTimeInformation?.distance?.text}</Text>

            </View>
            <FlatList data={data} keyExtractor={(item) => item.id} renderItem={({ item: { id, title, multiplier, image }, item }) => (<TouchableOpacity
                onPress={() => setSelected(item)} style={tw`flex-row justify-between items-center px-10 ${id === selected?.id && 'bg-gray-100'}`}>
                <Image
                    style={{
                        width: 100,
                        height: 100,
                        resizeMode: 'contain'
                        ,
                    }}
                    source={{ uri: image }} />
                <View style={tw`-ml-3`}>
                    <Text style={tw`text-xl font-semibold`}>{title}</Text>
                    <Text>{travelTimeInformation?.duration?.text}</Text>
                </View>
                <Text style={tw`text-xl`}>
                    {Platform.OS === 'ios' ? new Intl.NumberFormat('en-bg', {
                        currency: 'GBP',
                        style: 'currency',

                    }).format(
                        (travelTimeInformation?.duration?.value * SURGE_CHANGE_RATE * multiplier) / 100,
                    ) : '$32.00'}
                </Text>
            </TouchableOpacity>)} />
            <View>
                <TouchableOpacity disable={!selected} style={tw`bg-black py-3 m-3 ${!selected && 'bg-gray-300'}`}>
                    <Text style={tw`text-center text-white `}>Choose {selected?.title}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default RideOptionsCard

const styles = StyleSheet.create({
    container: {
        padding: 5,
        backgroundColor: 'white',
        flex: 1

    }

})
