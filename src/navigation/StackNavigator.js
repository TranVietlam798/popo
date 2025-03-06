import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import MainScreen from '../screens/MainScreen'
import InfoProductScreen from '../screens/InfoProductScreen'
import CartScreen from '../screens/CartScreen'

const StackNavigator = () => {
    const stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen
                    name='Login'
                    component={LoginScreen}
                    options={{ headerShown: false }}
                />
                <stack.Screen
                    name='Register'
                    component={RegisterScreen}
                    options={{ headerShown: false }}
                />
                <stack.Screen
                    name='Main'
                    component={MainScreen}
                    options={{ headerShown: false }}
                />
                <stack.Screen
                    name='Info'
                    component={InfoProductScreen}
                    options={{ headerShown: false }}
                />
                <stack.Screen
                    name='Cart'
                    component={CartScreen}
                    options={{ headerShown: false }}
                />
            </stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator

const styles = StyleSheet.create({})



