import React, {useState} from 'react'
import { View, Image, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native'
import COLORS from '../COLORS';

const height = Dimensions.get("window").height
const width = Dimensions.get("window").width

function Catagory({name, image, select}) {
  const [selected, setSelected] = useState(false);

  return (
    <TouchableOpacity style={styles.catagory} activeOpacity={0.6}>
      <View style={styles.box}>
        <Image 
          source={image}
        />
      </View>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  )
}

export default Catagory

const styles = StyleSheet.create({
  catagory: {
    alignItems: 'center',
  },
  box: {
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: COLORS.lightGray,
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: 20,
  },
  text: {
    color: COLORS.lightText,
  },
})