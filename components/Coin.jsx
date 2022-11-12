import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";

const Coin = () => {
  return (
    <TouchableOpacity>
      <View style={styles.coinInfo}>
        <View style={styles.left}>
          {/* <Image
          style={{width: 50, height: 50}}
            source={{
              uri: "https://img.freepik.com/premium-vector/gold-coin-bitcoin-bitcoin-cryptocurrency-symbol-isolated-transparent-background_279501-2310.jpg?w=20",
            }}
          /> */}
          <View>
            <Text>Bitcoin</Text>
            <Text>BTC</Text>
          </View>
        </View>

        <View style={styles.right}>
          <Text>34,545</Text>
          <Text>+9.7%</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Coin;

const styles = StyleSheet.create({
  coinInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ECEAEA",
    borderRadius: 10,
    marginHorizontal: 6,
    marginTop: 15,
    height: 70,
  },
  left: {},
  right: {},
});

// import {
//   StyleSheet,
//   Text,
//   View,
//   FlatList,
//   TouchableOpacity,
//   SafeAreaView,

// } from "react-native";
// import React, { useState, useEffect } from "react";
// import { getMarketData } from '/Users/affaankidwai/Desktop/stock-crypto/services/cryptodata.jsx'

// const Coin = () => {
//   const [data, setData] = useState([]);
// //   const [selectedCoinData, setSelectedCoinData] = useState(null);

//   useEffect(() => {
//     const fetchMarketData = async () => {
//       const marketData = await getMarketData();
//       setData(marketData);
//     };
//     fetchMarketData();
//     //   console.log(response.data);
//     // });
//   }, []);

//   return (
//     <SafeAreaView>
//         <View style={styles.container}>
//       <View style={styles.topText}>
//         <Text style={{ color: "#888", fontSize: 20, paddingBottom: "2%" }}>
//           Welcome Back!
//         </Text>
//         <Text style={{ color: `#487d8b`, fontSize: 28, marginBottom: '10%' }}>Affaan Kidwai</Text>
//         <StatusBar style="auto" />
//         {/* <Switch /> */}
//       </View>

//       <View style={{ flex: 1, flexDirection: "row"}}>
//       <TouchableOpacity
//         style={styles.midBar}
//         onPress={() => console.log("you pressed a text")}
//       >
//         <Text>Trending</Text>
//       </TouchableOpacity>
//         <Text style={styles.midBar} onPress={() => console.log("you pressed a text")}>Top Stocks</Text>
//         <Text style={styles.midBar} onPress={() => console.log("you pressed a text")}>Top Crypto</Text>
//         <Text style={styles.midBar} onPress={() => console.log("you pressed a text")}>Wishlist</Text>
//       </View>
//       {/* <ScrollView style={{flex: 1, flexDirection: 'row'}}>
//         <Text>Hello</Text>

//       </ScrollView> */}
//       {/* <Coin /> */}
//     </View>
//         <View style={styles.wrapper}>
//       <FlatList
//         keyExtractor={(item) => item.id}
//         data={data}
//         renderItem={({ item }) => (
//           <ListItem
//             name={item.name}
//             // symbol={item.symbol}
//             // currentPrice={item.current_price}
//             // priceChangePercentage7d={item.price_change_percentage_7d_in_currency}
//             // logoUrl={item.image}
//             // onPress={() => openModal(item)}
//             onPress={"console.log()"}
//           />
//         )}
//         //     ListHeaderComponent={<ListHeader />}
//       />
//       </View>

//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   wrapper: {
//     flex: 1,
//     backgroundColor: '000000'
//   },
// });

// export default Coin;
