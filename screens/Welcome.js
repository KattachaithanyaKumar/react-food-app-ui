import React from 'react'
import { Text, View, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import COLORS from '../COLORS'

import { LinearGradient } from 'expo-linear-gradient'

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

const imagePerc = 0.75

function Welcome() {
  return (
    <LinearGradient colors={[COLORS.purple, COLORS.lightPurple]} style={styles.linearGradient}>
      <View style={styles.container}>
        <Image source={require("../assets/onboarding_image.png")} style={styles.image}/>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Enjoy</Text>
          <Text style={styles.title}>Your Food</Text>
        </View>
        
        <TouchableOpacity 
          style={styles.button}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  )
}

export default Welcome


const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    // backgroundColor: "red",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  textContainer: {
    // margin: 30,
    // backgroundColor: "red",
    alignItems: 'center',
    padding: 30,
  },
  title: {
    color: COLORS.white,
    fontSize: width * 0.1,
    fontWeight: "bold",
  },  
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    color: COLORS.lightPurple,
    fontWeight: "bold",
    fontSize: width * 0.08,
  },
  image: {
    width: width * imagePerc,
    height: width * imagePerc,
     
  },
  button: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 30,
    paddingVertical: 4,
    borderRadius: 26,
    marginVertical: 18
  }
})