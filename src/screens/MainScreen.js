import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './HomeScreen'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import CartScreen from './CartScreen'
import ProfileScreen from './ProfileScreen'

const MainScreen = () => {
    const Tab = createBottomTabNavigator()
    return (
        <Tab.Navigator>
            <Tab.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Entypo name='home' size={24} color='#008E97' />
                        ) : (
                            <Entypo name='home' size={24} color='black' />
                        )
                }}
            />
            <Tab.Screen
                name='Cart'
                component={CartScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Cart',
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <AntDesign name='shoppingcart' size={24} color='#008E97' />
                        ) : (
                            <AntDesign name='shoppingcart' size={24} color='black' />
                        )
                }}
            />
            <Tab.Screen
                name='Profile'
                component={ProfileScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Ionicons name='person' size={24} color='#008E97' />
                        ) : (
                            <Ionicons name='person' size={24} color='black' />
                        )
                }}
            />
        </Tab.Navigator>
    )
}

export default MainScreen