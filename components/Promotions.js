import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

function Promotions() {
  return (
    <View style={styles.promotionsContainer}>
      <Text style={styles.heading}>Promotions</Text>
      <View style={styles.promotionsBox}>
        <View style={styles.promotionText}>
          <Text style={styles.thinText}>Today's Offer</Text>
          <Text style={styles.thickText}>Free box of Fries</Text>
          <Text style={styles.thinText}>on all orders above $150</Text>
        </View>
        <Image 
          source={require("../assets/French-fries.png")}
          style={styles.promotionsImage}
        />
      </View>
    </View>
  )
}

export default Promotions

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: "400",
    marginVertical: 13,
  },
  promotionsBox: {
    flexDirection: "row",
    backgroundColor: COLORS.lightPurple,
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 16,
    justifyContent: "space-between",
  },
  promotionText: {
    // backgroundColor: "red",
    marginRight: 10,
  },
  thinText: {
    marginBottom: 7,
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "400"
  },
  thickText: {
    marginBottom: 12,
    fontSize: 20,
    color: COLORS.white,
    fontWeight: "600"
  },
  promotionsImage: {
    width: 96,
    height: 96,
  },
})