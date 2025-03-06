import { TouchableOpacity, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')



  const navigation = useNavigation()

  const handleLogin = async () => {
    const user = {
      email: email,
      password: password
    }
    // console.log(user);


    // axios.post('http://localhost:8000/login', user).then((response) => {
    //   console.log(response);
    //   const token = response.data.token;
    //   AsyncStorage.setItem("authenToken", token)

      navigation.replace('Main')

    // }
    // ).catch((err) => {
    //   Alert.alert("Login Error", "Invalid Email");
    //   console.log(err);

    // }

    // )
  }

  return (
    <View style={{
      flex: 1,
      backgroundColor: 'white'
    }}>
      <View style={{
        alignItems: 'center',
        marginTop: 100
      }}>

        <Text style={{
          color: 'black',
          fontSize: 30,
          fontWeight: 'bold',
          alignItems: 'center',

        }} >Welcome to POPO</Text>
        <Text style={{
          width: '70%',
          color: 'black',
          fontSize: 18,
          alignItems: 'center',
          textAlign: "center",
          marginTop: '8',

        }} >Login or Sign up to access your account</Text>
      </View>
      <View style={{
        // flex: 1,
        flexDirection: "row",
        height: 50,
        marginTop: '50'
      }}>
        <TouchableOpacity style={{
          width: '50%',
          backgroundColor: '#00172d0d',
          justifyContent: 'center',
          alignItems: 'center',
          borderTopRightRadius: 10

        }}

        >

          <Text style={{
            color: 'black',
            fontSize: 22,
            alignItems: 'center',
            textAlign: 'center',
            width: '50%',
          }} >Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          width: '50%',
          // backgroundColor: '#00172d0d',
          justifyContent: 'center',
          alignItems: 'center'
        }}>

          <Text style={{
            width: '70%',
            color: 'black',
            fontSize: 22,
            textAlign: "center",
            width: '50%',

          }} >Sign up</Text>
        </TouchableOpacity>
      </View>

      <View style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#00172d0d',

      }}>
        <View style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          height: 60,
          alignItems: 'center',
          marginTop: 20,
          width: '90%',
          paddingHorizontal: '8',
          borderRadius: 10

        }}>
          <AntDesign name="mail" size={24} color='black' />
          <TextInput
            style={{
              width: "70%",
              marginHorizontal: 8,
              fontSize: 20
            }}
            value={email}
            placeholder='Email Address'
            onChangeText={(email) => setEmail(email)}
          />
        </View>
        <View style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          height: 60,
          alignItems: 'center',
          marginTop: 20,
          width: '90%',
          paddingHorizontal: '8',
          borderRadius: 10
        }}>
          <AntDesign name="lock1" size={24} color='black' />
          <TextInput
            secureTextEntry={true}
            style={{
              width: "70%",
              marginHorizontal: 8,
              fontSize: 20
            }}
            placeholder='Password'
            onChangeText={(password) => setPassword(password)}
            value={password}
          />
        </View>



        <TouchableOpacity style={{
          width: '90%',
          marginTop: 20,
        }}>
          <Text style={{
            fontSize: 16,
          }}>Forgot password?</Text>
        </TouchableOpacity>
        <Text style={{
          fontSize: 16,
          marginTop: 36,
        }}>Or continue with email</Text>

        <TouchableOpacity
          style={{
            flexDirection: 'row',
            height: 100,
            backgroundColor: 'white',
            height: 60,
            alignItems: 'center',
            marginTop: 36,
            width: '90%',
            paddingHorizontal: '8',
            borderRadius: 10,
            justifyContent: 'center',
          }}>

          <AntDesign name="google" size={24} color='blue' />
          <Text style={{
            color: 'black',
            fontSize: 22,
            alignItems: 'center',
            textAlign: 'center',
            // width: '50%',

            marginHorizontal: '8',
          }} >Login with Google</Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: 'row',
            height: 100,
            backgroundColor: 'white',
            height: 60,
            alignItems: 'center',
            marginTop: 16,
            width: '90%',
            paddingHorizontal: '8',
            borderRadius: 10,
            justifyContent: 'center'
          }}>

          <AntDesign name="apple1" size={24} color='black' />
          <Text style={{
            color: 'black',
            fontSize: 22,
            alignItems: 'center',
            textAlign: 'center',
            // width: '50%',

            marginHorizontal: '8',
          }} >Login with Apple</Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: 'row',
            backgroundColor: 'white',
            height: 60,
            alignItems: 'center',
            marginTop: 36,
            width: '90%',
            paddingHorizontal: '8',
            borderRadius: 10,
            justifyContent: 'center',
            backgroundColor: '#0098FF'

          }}
          onPress={handleLogin}
        >

          <Text style={{
            color: 'black',
            fontSize: 25,
            alignItems: 'center',
            textAlign: 'center',
            // width: '50%',

            marginHorizontal: '8',
            color: 'white'
          }} >Login</Text>

        </TouchableOpacity>




      </View>

    </View >
  )
}

export default LoginScreen

const styles = StyleSheet.create({})