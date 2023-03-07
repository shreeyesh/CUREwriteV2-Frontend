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

const GroupComponent1 = ({ style }) => {
  return (
    <TouchableHighlight
      style={[styles.parent, style]}
      underlayColor="#fff"
      activeOpacity={0.2}
      onPress={() => {}}
    >
      <>
        <Text>Cameroon</Text>
        <View />
        <Text>+237</Text>
        <Image resizeMode="cover" source={require("../assets/group-64.png")} />
      </>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  parent: {
    width: 173,
    height: 24,
  },
});

export default GroupComponent1;
