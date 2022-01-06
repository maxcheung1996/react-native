import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  Image,
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  Button,
} from "react-native";

export default function App() {
  const handlePress = () => {
    alert("Text Clicked");
  };

  console.log(require("./assets/icon.png"));

  return (
    <SafeAreaView style={styles.container}>
      <Button color="orange" title="Click Me" onPress={handlePress} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
