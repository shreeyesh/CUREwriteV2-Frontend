import * as React from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from "react-native";

const GoogleAccess = () => {
  return (
    <TouchableHighlight
      style={styles.wrapper}
      underlayColor="#fff"
      activeOpacity={0.2}
      onPress={() => {}}
    >
      <>
        <Text>Google</Text>
        <Image
          resizeMode="cover"
          source={require("../assets/google-logo.png")}
        />
      </>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 81,
    height: 23,
  },
});

export default GoogleAccess;
