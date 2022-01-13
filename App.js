import React from "react";
import { View, StyleSheet, Image, ImageBackground, Text } from "react-native";

export default App = () => {
  console.log("App Running");

  return (
    <View style={style.container}>
      <ImageBackground
        style={{
          flex: 0.8,
          justifyContent: "center",
        }}
        resizeMode="cover"
        source={require("./assets/background.jpg")}
      >
        <Image
          source={require("./assets/logo-red.png")}
          style={{
            height: "20%",
            width: "30%",
            top: "-25%",
            left: "35%",
          }}
        />
        <Text style={{ top: "-25%", left: "28%" }}>
          Sell What You Don't Need
        </Text>
      </ImageBackground>
      <View style={{ backgroundColor: "red", flex: 0.1 }}></View>
      <View style={{ backgroundColor: "blue", flex: 0.1 }}></View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
