import { Image, Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';


const Sizes = [39, 40, 41, 42, 43];

const InfoProduct = () => {
  const navigator = useNavigation()
  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 24
      }}>
        <Pressable
          onPress={() => { navigator.goBack() }}
        >
          <MaterialIcons name='arrow-back-ios' size={24} color='black' />
        </Pressable>
        <AntDesign name='hearto' size={24} color='black' />
      </View>
      <View style={{
        width: '100%',
        alignItems: 'center',
        marginTop: '20'
      }}>
        <Image source={require('../assets/images/info_Image_AirMax.png')} />
      </View>

      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: '24',
        marginTop: 32
      }}>
        <View>
          <Text style={{
            fontSize: 12,
            color: '#9D9EA3'

          }}
          >Sepatu Laki laki</Text>
          <Text style={{
            fontSize: 18,
            color: 'black',
            fontWeight: 'bold'

          }}
          >Nike Air VaporMax Evo</Text>
        </View>
        <Text style={{
          fontSize: 22,
          color: 'black',
          fontWeight: 'bold'

        }}>Rp. 120.000</Text>
      </View>

      <View style={{
        marginHorizontal: 24,
        marginTop: '32'
      }}>
        <Text style={{
          fontSize: 13,
          color: 'black',
          fontWeight: 'bold',


        }}>Ukuran Tersedia</Text>

        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: '12'
        }}>
          {
            Sizes.map((item) =>
              <>
                <TouchableOpacity style={{
                  height: 26,
                  width: 52,
                  borderColor: '#F0F0F0',
                  borderWidth: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 12,
                }}>
                  <Text style={{
                    fontSize: 13,
                    color: 'black',
                    fontWeight: 'bold',
                  }}>{item}</Text>
                </TouchableOpacity>
              </>
            )
          }
        </View>
      </View>


      <Text style={{
        fontSize: 13,
        color: 'black',
        fontWeight: 'bold',
        marginHorizontal: 24,
        marginTop: 20,

      }}>Decription</Text>

      <Text style={{
        fontSize: 13,
        color: '#9D9EA3',
        marginHorizontal: 24,

      }}>Terbuat dari setidaknya 20% bahan daur ulang menurut beratnya, Nike Air VaporMax 2021 FK lapang dan mudah dipakai dengan kain Flyknit daur ulang yang sangat melar (ditambah kerah lembut yang membentuk pergelangan kaki Anda). Swoosh yang dijahit dan TPU daur ulang klip tumit yang sangat lembut.Colour Shown: White/Gypsy Rose/Metallic Silver/Thunder Blue
      </Text>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#F0F0F0',
        height: 97,
        paddingTop: 16,
        paddingHorizontal: 24,
        position: 'absolute',
        bottom: 0,
        width: '100%'
      }}>
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: 46,
          width: 46,
          borderRadius: 10,
          backgroundColor: 'white'
        }}>
          <AntDesign name='shoppingcart' size={24} color='black' />
        </View>
        <TouchableOpacity
          onPress={() => { navigator.navigate('Cart') }}
          style={{
            backgroundColor: 'black',
            justifyContent: 'center',
            alignItems: 'center',
            height: 46,
            width: '70%',
            borderRadius: 70
          }}>
          <Text style={{
            fontSize: 13,
            color: 'white',
            fontWeight: 'bold',

          }}>Beli Sekarang</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

export default InfoProduct

const styles = StyleSheet.create({})