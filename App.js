import { StatusBar } from "expo-status-bar";
//import { useDimensions } from "@react-native-community/hooks";
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
  Alert,
  Platform,
  StatusBar as nativeStatusBar,
  Dimensions,
} from "react-native";

export default function App() {
  const handlePress = () => {
    alert("Text Clicked");
  };

  //console.log(useDimensions());

  console.log(require("./assets/icon.png"));

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{ backgroundColor: "dodgerblue", width: "100%", height: "30%" }}
      ></View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? nativeStatusBar.currentHeight : 0,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
