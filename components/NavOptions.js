import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';




const data = [
    {
        id: '123',
        title: 'Geta ride',
        image: 'https://w7.pngwing.com/pngs/546/191/png-transparent-madrid-taxicabs-of-the-united-kingdom-bus-ubicabs-toyota-free-car-car-vehicle-transport.png',
        screen: 'MapScreen',
    },
    {
        id: '456',
        title: 'Order food',
        image: 'https://www.vhv.rs/dpng/d/426-4261779_help-us-placer-food-bank-box-of-food.png',
        screen: 'EatScreen',
    }
]

const NavOptions = () => {
    const navigation = useNavigation();
    const origin = useSelector(selectOrigin);
    return (
        <FlatList horizontal data={data} keyExtractor={(item) => item.id} renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate(item.screen)} style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-100 m-2 w-40 h-60`} disabled={!origin}>
                <View style={tw`${!origin && 'opacity-20'}`}>
                    <Image style={{ width: 129, height: 120, resizeMode: 'contain' }} source={{ uri: item.image }} />
                    <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                    <Icon style={tw` p-2 bg-black rounded-full w-10 mt-4 `} name='arrowright' color='white' type='antdesign' />
                </View>
            </TouchableOpacity>
        )} />
    )
}

export default NavOptions

const styles = StyleSheet.create({})
