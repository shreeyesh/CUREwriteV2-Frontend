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

const GroupComponent4 = ({ style }) => {
  return (
    <TouchableHighlight
      style={[styles.parent, style]}
      underlayColor="#fff"
      activeOpacity={0.2}
      onPress={() => {}}
    >
      <>
        <Text>Ghana</Text>
        <View />
        <Text>+233</Text>
        <Image resizeMode="cover" source={require("../assets/group-65.png")} />
      </>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  parent: {
    width: 141,
    height: 24,
  },
});

export default GroupComponent4;
