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
import { SAMPLE_DATA } from "./assets/data/sampleData";

import React, { useState, useEffect } from "react";
import { getMarketData } from "/Users/affaankidwai/Desktop/stock-crypto/services/cryptodata.jsx";
import MidBar from "./components/MidBar";

export default function App() {
  const [data, setData] = useState([]);
  const [selectedCoinData, setSelectedCoinData] = useState(null);

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
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 30 }}>
        <View style={[styles.topText, { flexDirection: "column" }]}>
          <Text style={{ color: "#888", fontSize: 20, paddingBottom: "2%" }}>
            Welcome Back! 👋
          </Text>
          <Text style={{ color: `#1881FD`, fontSize: 28, marginBottom: "10%" }}>
            Affaan Kidwai
          </Text>
        </View>
        <View>
          <TouchableOpacity
          onPress={() => console.log("you pressed a text")}>
          <Image
            source={{
              uri: "https://media-exp1.licdn.com/dms/image/C4D03AQF84Vo3s7IUYg/profile-displayphoto-shrink_400_400/0/1654702185650?e=1673481600&v=beta&t=p3fxdj68eI2HIp8QCw3TgDLzXXTkm-vX5KILZlno41E",
            }}
            style={{
              width: 120,
              height: 120,
              borderRadius: 60,
              marginTop: "23%",
              marginRight: "6%",
            }}
            
          />
          </TouchableOpacity>
        </View>
        {/* <StatusBar style="auto" /> */}
        {/* <Switch /> */}
      </View>
      <MidBar />
      <View style={styles.divider} />
      <FlatList
      keyExtractor={(item) => item.id}
      data={SAMPLE_DATA}
      renderItem={({item}) => (
        <Coin 
        name={item.name}
        symbol={item.symbol}
        currentPrice={item.current_price}
        priceChangePercentage7d={item.price_change_percentage_7d_in_currency}
        logoUrl={item.image}

        
        />

      )}
      
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",},
  topText: {
    paddingTop: "16%",
    paddingLeft: "6%",
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
