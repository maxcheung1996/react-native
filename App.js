import React from "react";
import { View, StyleSheet, Image, ImageBackground } from "react-native";

export default App = () => {
  console.log("App Running");

  return (
    <View style={style.container}>
      <ImageBackground
        style={{
          flex: 1,
          justifyContent: "center",
        }}
        resizeMode="cover"
        source={require("./assets/background.jpg")}
      >
        <Image
          source={require("./assets/logo-red.png")}
          style={{ flex: 0.5, height: "20%", width: "20%", left: 50 }}
        />
      </ImageBackground>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
