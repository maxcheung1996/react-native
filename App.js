import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Image, View, SafeAreaView } from "react-native";

export default function App() {
  const handlePress = () => {
    console.log("Text Clicked");
  };

  console.log(require("./assets/icon.png"));

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={4} onPress={handlePress} style={{ fontSize: 30 }}>
        This is My Love Sally!
      </Text>
      <Image source={require("./assets/traingirl.png")} />
      <Image source={require("./assets/japangirl.png")} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
});
