import * as React from "react";
import { Pressable, Image, StyleSheet, TouchableHighlight } from "react-native";

const LeaderboardTab = ({ onGroupTouchableHighlightPress }) => {
  return (
    <TouchableHighlight
      style={styles.combinedShapeWrapper}
      underlayColor="#fff"
      activeOpacity={0.2}
      onPress={onGroupTouchableHighlightPress}
    >
      <Image
        style={styles.combinedShapeIcon}
        resizeMode="cover"
        source={require("../assets/combinedshape.png")}
      />
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  combinedShapeIcon: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  combinedShapeWrapper: {
    height: "92.45%",
    width: "8.12%",
    top: "3.7%",
    right: "68.83%",
    bottom: "3.85%",
    left: "23.05%",
    position: "absolute",
  },
});

export default LeaderboardTab;
