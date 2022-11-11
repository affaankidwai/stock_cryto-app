import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import axios from 'axios'
import Switch from "./components/Switch";
import Coin from "./components/Coin";

export default function App() {
  const [coins, setCoins] = useState([])

  useEffect(() => {
    const 
    })
  },[url])
  return (
    
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
      <Coin />
    </View>
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
    padding: '3%',
    fontSize: 19,

  }
});
