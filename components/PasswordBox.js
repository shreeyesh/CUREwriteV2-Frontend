import * as React from "react";
import { useMemo } from "react";
import { TextInput, StyleSheet } from "react-native";
import { Border, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const PasswordBox = ({
  rectangle13Top,
  rectangle13BorderStyle,
  rectangle13BorderColor,
  rectangle13BorderWidth,
  rectangle13Left,
  rectangle13BorderRadius,
  rectangle13BackgroundColor,
  rectangle13Width,
  rectangle13Height,
  otpi1 = "0",
}) => {
  const rectangleTextInput2Style = useMemo(() => {
    return {
      ...getStyleValue("top", rectangle13Top),
      ...getStyleValue("borderStyle", rectangle13BorderStyle),
      ...getStyleValue("borderColor", rectangle13BorderColor),
      ...getStyleValue("borderWidth", rectangle13BorderWidth),
      ...getStyleValue("left", rectangle13Left),
      ...getStyleValue("borderRadius", rectangle13BorderRadius),
      ...getStyleValue("backgroundColor", rectangle13BackgroundColor),
      ...getStyleValue("width", rectangle13Width),
      ...getStyleValue("height", rectangle13Height),
    };
  }, [
    rectangle13Top,
    rectangle13BorderStyle,
    rectangle13BorderColor,
    rectangle13BorderWidth,
    rectangle13Left,
    rectangle13BorderRadius,
    rectangle13BackgroundColor,
    rectangle13Width,
    rectangle13Height,
  ]);

  return (
    <TextInput
      style={[styles.passwordResetChild, rectangleTextInput2Style]}
      keyboardType="default"
      autoCapitalize="none"
      secureTextEntry
      value={otpi1}
    />
  );
};

const styles = StyleSheet.create({
  passwordResetChild: {
    position: "absolute",
    top: 242,
    left: 27,
    borderRadius: Border.br_lg,
    backgroundColor: Color.whitesmoke_200,
    borderStyle: "solid",
    borderColor: "#02256d",
    borderWidth: 0.5,
    width: 321,
    height: 49,
  },
});

export default PasswordBox;
