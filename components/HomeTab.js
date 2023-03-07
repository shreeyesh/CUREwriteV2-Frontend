import * as React from "react";
import {
  Pressable,
  Image,
  StyleSheet,
  View,
  TouchableHighlight,
} from "react-native";

const HomeTab = ({ onIconlyLightOutlineHomePress }) => {
  return (
    <TouchableHighlight
      style={styles.iconlylightOutlinehome}
      underlayColor="#fff"
      activeOpacity={0.2}
      onPress={onIconlyLightOutlineHomePress}
    >
      <View style={styles.homePosition}>
        <Image
          style={[styles.fill1Icon, styles.homePosition]}
          resizeMode="cover"
          source={require("../assets/fill1.png")}
        />
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  homePosition: {
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    left: "0%",
    position: "absolute",
  },
  fill1Icon: {
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  iconlylightOutlinehome: {
    height: "92.45%",
    width: "8.12%",
    top: "3.7%",
    right: "91.88%",
    bottom: "3.85%",
    left: "0%",
    position: "absolute",
  },
});

export default HomeTab;
