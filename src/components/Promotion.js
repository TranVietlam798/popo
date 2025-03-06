import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Promotion = () => {
    
    return (
        <View style={{
            flex: 1,
            flexDirection: 'row',
            width: 310,
            backgroundColor: '#F178B6',
            borderRadius: 14,
            marginHorizontal: 20,
        }} >
            <View>
                <Text style={{
                    height: 50,
                    width: 190,
                    fontSize: '16',
                    fontWeight: 'bold',
                    marginLeft: 10,
                    marginTop: 10,
                }} >Biaya Sepatu Rebook dengan discount 15%</Text>
                <TouchableOpacity style={{
                    backgroundColor: 'white',
                    height: 40,
                    width: 140,
                    justifyContent: 'center',
                    borderRadius: 10,
                    marginLeft: 10,
                    marginBottom: 10,
                }}
                    onPress={() => { }}>
                    <Text style={{
                        fontSize: '16',
                        fontWeight: 'bold',
                        textAlign: 'center'
                    }} >
                        Beli Sekarang
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <Image style={{ height: 90, width: 140, top: 20 }}
                    source={require("../assets/images/shoe.png")}

                />
            </View>

        </View>
    )
}

export default Promotion

const styles = StyleSheet.create({})