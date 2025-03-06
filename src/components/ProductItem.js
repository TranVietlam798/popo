import { StyleSheet, Text, View, Pressable, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

const ProductItem = ({ item }) => {
  const [addedToCart, setAddedToCart] = useState(false);
  // const dispatch = useDispatch();
  const navigator = useNavigation()
  return (
    <TouchableOpacity onPress={()=> {navigator.navigate('Info')}} style={{ width: "50%", alignItems: 'center' }}>
      <Image style={{ height: 140, resizeMode: 'contain', }}
        source={require("../assets/images/Nike_air_max.png")}

      />

      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%'
      }}>
        <Text>Nike air max:</Text>
        <Text>Rp. 120.000 </Text>
      </View>

      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%'
      }}>
        <Text>Vote:</Text>

        <View style={{
          flexDirection: 'row',
        }}>

          <AntDesign name={'star'} size={20} color={'yellow'} />
          <Text>5 </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;

const styles = StyleSheet.create({});