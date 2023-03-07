import * as React from "react";
import {
  Pressable,
  StyleProp,
  ViewStyle,
  Text,
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
} from "react-native";

const GroupComponent3 = ({ style }) => {
  return (
    <TouchableHighlight
      style={[styles.parent, style]}
      underlayColor="#fff"
      activeOpacity={0.2}
      onPress={() => {}}
    >
      <>
        <Text>India</Text>
        <View />
        <Text>+91</Text>
        <Image resizeMode="cover" source={require("../assets/group-641.png")} />
      </>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  parent: {
    width: 131,
    height: 24,
  },
});

export default GroupComponent3;
