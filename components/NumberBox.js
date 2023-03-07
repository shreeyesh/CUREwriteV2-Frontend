import * as React from "react";
import { useMemo } from "react";
import { TextInput, StyleSheet } from "react-native";
import { Border, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const NumberBox = ({
  number,
  rectangle15Top,
  rectangle15Left,
  rectangle15BorderRadius,
  rectangle15BackgroundColor,
  rectangle15Width,
  rectangle15Height,
  rectangle15Opacity,
}) => {
  const rectangleTextInput1Style = useMemo(() => {
    return {
      ...getStyleValue("top", rectangle15Top),
      ...getStyleValue("left", rectangle15Left),
      ...getStyleValue("borderRadius", rectangle15BorderRadius),
      ...getStyleValue("backgroundColor", rectangle15BackgroundColor),
      ...getStyleValue("width", rectangle15Width),
      ...getStyleValue("height", rectangle15Height),
      ...getStyleValue("opacity", rectangle15Opacity),
    };
  }, [
    rectangle15Top,
    rectangle15Left,
    rectangle15BorderRadius,
    rectangle15BackgroundColor,
    rectangle15Width,
    rectangle15Height,
    rectangle15Opacity,
  ]);

  return (
    <TextInput
      style={[styles.forgotPasswordChild, rectangleTextInput1Style]}
      keyboardType="phone-pad"
      autoCapitalize="none"
      value={number}
    />
  );
};

const styles = StyleSheet.create({
  forgotPasswordChild: {
    position: "absolute",
    top: 416,
    left: 27,
    borderRadius: Border.br_lg,
    backgroundColor: Color.whitesmoke_200,
    width: 321,
    height: 49,
  },
});

export default NumberBox;
