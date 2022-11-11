import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  
} from "react-native";
import React, { useState, useEffect } from "react";
import { getMarketData } from '/Users/affaankidwai/Desktop/stock-crypto/services/cryptodata.jsx'

const Coin = () => {
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
    <SafeAreaView>
        <View style={styles.container}>
      <View style={styles.topText}>
        <Text style={{ color: "#888", fontSize: 20, paddingBottom: "2%" }}>
          Welcome Back!
        </Text>
        <Text style={{ color: `#487d8b`, fontSize: 28, marginBottom: '10%' }}>Affaan Kidwai</Text>
        <StatusBar style="auto" />
        {/* <Switch /> */}
      </View>
      
      <View style={{ flex: 1, flexDirection: "row"}}>
      <TouchableOpacity
        style={styles.midBar}
        onPress={() => console.log("you pressed a text")}
      >
        <Text>Trending</Text>
      </TouchableOpacity>
        <Text style={styles.midBar} onPress={() => console.log("you pressed a text")}>Top Stocks</Text>
        <Text style={styles.midBar} onPress={() => console.log("you pressed a text")}>Top Crypto</Text>
        <Text style={styles.midBar} onPress={() => console.log("you pressed a text")}>Wishlist</Text>
      </View>
      {/* <ScrollView style={{flex: 1, flexDirection: 'row'}}>
        <Text>Hello</Text>

      </ScrollView> */}
      {/* <Coin /> */}
    </View>
        <View style={styles.wrapper}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={data}
        renderItem={({ item }) => (
          <ListItem
            name={item.name}
            // symbol={item.symbol}
            // currentPrice={item.current_price}
            // priceChangePercentage7d={item.price_change_percentage_7d_in_currency}
            // logoUrl={item.image}
            // onPress={() => openModal(item)}
            onPress={"console.log()"}
          />
        )}
        //     ListHeaderComponent={<ListHeader />}
      />
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '000000'
  },
});

export default Coin;
