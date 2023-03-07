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

const GroupComponent5 = ({ style }) => {
  return (
    <TouchableHighlight
      style={[styles.parent, style]}
      underlayColor="#fff"
      activeOpacity={0.2}
      onPress={() => {}}
    >
      <>
        <Text>Canada</Text>
        <View />
        <Text>+1</Text>
        <Image resizeMode="cover" source={require("../assets/group-60.png")} />
      </>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  parent: {
    width: 142,
    height: 24,
  },
});

export default GroupComponent5;
