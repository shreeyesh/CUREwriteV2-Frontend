import * as React from "react";
import {
  Pressable,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
} from "react-native";

const QuestionTabExt = ({ onOptionPress, labelAdjustsFontSizeToFit }) => {
  return (
    <TouchableHighlight
      style={styles.option}
      underlayColor="#fff"
      activeOpacity={0.2}
      onPress={onOptionPress}
    >
      <>
        <Image
          resizeMode="cover"
          source={require("../assets/separator1.png")}
        />
        <Text adjustsFontSizeToFit={labelAdjustsFontSizeToFit}>Question</Text>
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

export default QuestionTabExt;
