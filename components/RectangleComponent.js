import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const RectangleComponent = ({ style }) => {
  return <View style={[styles.rectangleView, style]} />;
};

const styles = StyleSheet.create({
  rectangleView: {
    borderRadius: Border.br_4xs,
    backgroundColor: Color.midnightblue,
    width: 321,
    height: 38,
  },
});

export default RectangleComponent;
