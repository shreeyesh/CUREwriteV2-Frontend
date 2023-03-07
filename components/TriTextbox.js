import * as React from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";
import { Color, Border } from "../GlobalStyles";

const TriTextbox = ({ captionValue, hashtagsValue }) => {
  return (
    <View style={styles.textbox}>
      <Image
        style={styles.textboxChild}
        resizeMode="cover"
        source={require("../assets/imgbox.png")}
      />
      <TextInput
        style={[styles.textboxItem, styles.textboxLayout]}
        keyboardType="default"
        value={captionValue}
      />
      <TextInput
        style={[styles.textboxInner, styles.textboxLayout]}
        keyboardType="default"
        value={hashtagsValue}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textboxLayout: {
    backgroundColor: Color.whitesmoke_200,
    borderRadius: Border.br_lg,
    width: 321,
    left: 0,
    position: "absolute",
  },
  textboxChild: {
    top: 0,
    height: 133,
    borderRadius: Border.br_lg,
    width: 321,
    left: 0,
    position: "absolute",
  },
  textboxItem: {
    top: 176,
    height: 84,
  },
  textboxInner: {
    top: 303,
    height: 49,
  },
  textbox: {
    top: 26,
    height: 352,
    width: 321,
    left: 0,
    position: "absolute",
  },
});

export default TriTextbox;
