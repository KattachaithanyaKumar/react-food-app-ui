import React from 'react'
import { View, Text, ScrollView, Image, StyleSheet, TextInput, SafeAreaView, StatusBar } from 'react-native'

import { catagoryData } from '../data'
import Catagory from '../components/Catagory'
import COLORS from '../COLORS'
import Promotions from '../components/Promotions'

function Home() {
  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.main}>
        <Text style={styles.title}>Menu</Text>
        <View style={styles.searchbox}>
          <Image 
            source={require("../assets/Search.png")}
          />
          <TextInput 
            placeholder='Search'  
            style={styles.search}
          />
        </View>

        <View
          style={styles.catagories}
        >
          {catagoryData.map((item, index) => {
            return (
              <Catagory 
                key={index}
                name={item.name}
                image={item.imagePath}
              />
            )
          })}
        </View>

        <Promotions />
      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  main: {
    paddingHorizontal: 28,
    paddingVertical: 20,
  },
  title: {
    fontSize: 42,
    fontWeight: "400"
  },
  searchbox: {
    backgroundColor: COLORS.lightGray,
    flexDirection: "row",
    marginVertical: 30,
    padding: 11,
    borderRadius: 30,
  },
  search: {
    flex: 1,
    marginLeft: 10,
    fontSize: 18,
  },
  catagories: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  heading: {
    fontSize: 24,
    fontWeight: "400",
    marginVertical: 13,
  },
  
})