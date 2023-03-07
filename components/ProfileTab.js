import * as React from "react";
import { Pressable, Image, StyleSheet } from "react-native";

const ProfileTab = () => {
  return (
    <Image
      style={styles.vectorIcon}
      resizeMode="cover"
      source={require("../assets/vector.png")}
    />
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    position: "absolute",
    height: "92.45%",
    width: "7.79%",
    top: "0%",
    right: "0%",
    bottom: "7.55%",
    left: "92.21%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
});

export default ProfileTab;
