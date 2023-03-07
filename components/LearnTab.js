import * as React from "react";
import {
  Pressable,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from "react-native";

const LearnTab = ({ onOptionPress }) => {
  return (
    <TouchableHighlight
      style={styles.option}
      underlayColor="#fff"
      activeOpacity={0.2}
      onPress={onOptionPress}
    >
      <>
        <View />
        <Text>Learn</Text>
      </>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  option: {
    alignSelf: "stretch",
    flex: 1,
  },
});

export default LearnTab;
