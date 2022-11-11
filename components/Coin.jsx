import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Coin = () => {
  const [coins, setCoins] = useState([]);
  
  useEffect(() => {
    const fetchMarketData = async () =>
    //   console.log(response.data);
    });
  }, []);

  return (
    <TouchableOpacity>
    <View style={styles.wrapper}>
        {/* Left side */}
        <View style={styles.leftwrapper}>

        </View>
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    wrapper: {
      
    },
  });

export default Coin;


