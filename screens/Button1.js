import * as React from "react";
import { Image, StyleSheet, View } from "react-native";

const Button1 = () => {
  return (
    <View style={styles.button}>
      <Image
        style={styles.surfaceIcon}
        resizeMode="cover"
        source={require("../assets/surface.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  surfaceIcon: {
    position: "absolute",
    marginTop: 1951,
    marginLeft: -2491,
    top: "50%",
    left: "50%",
    width: 32,
    height: 32,
  },
  button: {
    flex: 1,
    width: "100%",
    height: 32,
  },
});

export default Button1;
