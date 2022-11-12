import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Image,
} from "react-native";
import Coin from "./components/Coin";

import React, { useState, useEffect } from "react";
import { getMarketData } from "/Users/affaankidwai/Desktop/stock-crypto/services/cryptodata.jsx";

export default function App() {
  const [data, setData] = useState([]);
  //   const [selectedCoinData, setSelectedCoinData] = useState(null);

  useEffect(() => {
    const fetchMarketData = async () => {
      const marketData = await getMarketData();
      setData(marketData);
    };
    fetchMarketData();
    //   console.log(response.data);
    // });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topText}>
        <Text style={{ color: "#888", fontSize: 20, paddingBottom: "2%" }}>
          Welcome Back!
        </Text>
        <Text style={{ color: `#487d8b`, fontSize: 28, marginBottom: "10%" }}>
          Affaan Kidwai
        </Text>
        {/* <StatusBar style="auto" /> */}
        {/* <Switch /> */}
      </View>

      {/* <View style={{ flex: 1, flexDirection: "row" }}>
        <TouchableOpacity
          style={styles.midBar}
          onPress={() => console.log("you pressed a text")}
        >
          <Text>Trending</Text>
        </TouchableOpacity>
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
      </View> */}
      <View style={styles.divider} />
      <Coin />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "flex-start",
    // justifyContent: "flex-start",
  },
  topText: {
    paddingTop: "20%",
    paddingLeft: "6%",
  },
  midBar: {
    padding: "3%",
    fontSize: 19,
  },
  left: {},
  right: {},
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#A9ABB1",
    marginHorizontal: 16,
    marginTop: 16,
  },
});
