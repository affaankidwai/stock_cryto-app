import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const MidBar = () => {
  return (
    <View style={{flexDirection: 'row', backgroundColor: 'white', marginHorizontal: 6, height: 50, borderRadius: 10, borderColor: 'black', borderWidth: 2}}>
        {/* <TouchableOpacity
          style={styles.midBar}
          onPress={() => console.log("you pressed a text")}
        >
          <Text>Trending</Text>
        </TouchableOpacity> */}
        <Text
          style={styles.midBar}
          onPress={() => console.log("you pressed a text")}
        >
          Trending
        </Text>
        <Text
          style={styles.midBar}
          onPress={() => console.log("you pressed a text")}
        >
          Top Stocks
        </Text>
        <Text
          style={styles.midBar}
          onPress={() => console.log("you pressed a text")}
        >
          Top Crypto
        </Text>
        <Text
          style={styles.midBar}
          onPress={() => console.log("you pressed a text")}
        >
          Wishlist
        </Text>
      </View>
  )
}

export default MidBar

const styles = StyleSheet.create({
midBar: {
    padding: 10,
    fontSize: 19,
  },
});