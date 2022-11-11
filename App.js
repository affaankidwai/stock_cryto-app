import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Image
} from "react-native";

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
        <StatusBar style="auto" />
        {/* <Switch /> */}
      </View>

      <View style={{ flex: 1, flexDirection: "row" }}>
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
      </View>

      <View style={styles.coinInfo}>
        <View style={styles.left}>
          <Image
            source={{
              uri: "https://img.freepik.com/premium-vector/gold-coin-bitcoin-bitcoin-cryptocurrency-symbol-isolated-transparent-background_279501-2310.jpg?w=20",
            }}
          />
          <View>
            <Text>
              Bitcoin
            </Text>
            <Text>
              BTC
            </Text>
          </View>
          
        </View>

        <View style={styles.right}>
          <Text>Bitcoin</Text>
          <Text>BTC</Text>
        </View>

        {/* <FlatList
    keyExtractor={(item) => item.id}
    data={data}
    // renderItem={({ item }) => (
    //   <ListItem
    //     name={item.name}
    //     // symbol={item.symbol}
    //     // currentPrice={item.current_price}
    //     // priceChangePercentage7d={item.price_change_percentage_7d_in_currency}
    //     // logoUrl={item.image}
    //     // onPress={() => openModal(item)}
    //     onPress={"console.log()"}
      
    
  /> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  topText: {
    paddingTop: "20%",
    paddingLeft: "6%",
  },
  midBar: {
    padding: "3%",
    fontSize: 19,
  },
  coinInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'

  },
  left: {

  },
  right: {

  }
});
