import * as React from "react";
import {
  Pressable,
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from "react-native";

const GroupComponent2 = ({ style }) => {
  return (
    <TouchableHighlight
      style={[styles.parent, style]}
      underlayColor="#fff"
      activeOpacity={0.2}
      onPress={() => {}}
    >
      <>
        <Image resizeMode="cover" source={require("../assets/vector39.png")} />
        <Image resizeMode="cover" source={require("../assets/vector40.png")} />
        <Image resizeMode="cover" source={require("../assets/vector41.png")} />
        <Image resizeMode="cover" source={require("../assets/vector42.png")} />
        <Text>Niger</Text>
        <View />
        <Text>+227</Text>
      </>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  parent: {
    width: 129,
    height: 24,
    opacity: 0.9,
  },
});

export default GroupComponent2;
