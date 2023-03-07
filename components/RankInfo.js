import * as React from "react";
import { Image, StyleSheet, Pressable } from "react-native";

const RankInfo = ({ onFramePress }) => {
  return (
    <Pressable style={styles.frame} onPress={onFramePress}>
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/frame1.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  frame: {
    position: "absolute",
    left: 332,
    top: 96,
    width: 33,
    height: 33,
  },
});

export default RankInfo;
