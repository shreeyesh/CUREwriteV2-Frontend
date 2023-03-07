import * as React from "react";
import { Pressable, Image, StyleSheet, TouchableHighlight } from "react-native";

const CreateTab = ({ onGroupTouchableHighlightPress }) => {
  return (
    <TouchableHighlight
      style={[styles.vectorWrapper, styles.vectorPosition]}
      underlayColor="#fff"
      activeOpacity={0.2}
      onPress={onGroupTouchableHighlightPress}
    >
      <Image
        style={[styles.vectorIcon, styles.vectorPosition]}
        resizeMode="cover"
        source={require("../assets/vector1.png")}
      />
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  vectorPosition: {
    top: "0%",
    position: "absolute",
  },
  vectorIcon: {
    height: "100%",
    width: "100%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorWrapper: {
    height: "92.45%",
    width: "8.12%",
    right: "45.78%",
    bottom: "7.55%",
    left: "46.1%",
  },
});

export default CreateTab;
