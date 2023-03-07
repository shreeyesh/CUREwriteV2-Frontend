import * as React from "react";
import { useMemo } from "react";
import { TextInput, StyleSheet } from "react-native";
import { Border, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const NameBox = ({
  username,
  rectangle13Top,
  rectangle13BorderStyle,
  rectangle13BorderColor,
  rectangle13BorderWidth,
}) => {
  const rectangleTextInput3Style = useMemo(() => {
    return {
      ...getStyleValue("top", rectangle13Top),
      ...getStyleValue("borderStyle", rectangle13BorderStyle),
      ...getStyleValue("borderColor", rectangle13BorderColor),
      ...getStyleValue("borderWidth", rectangle13BorderWidth),
    };
  }, [
    rectangle13Top,
    rectangle13BorderStyle,
    rectangle13BorderColor,
    rectangle13BorderWidth,
  ]);

  return (
    <TextInput
      style={[styles.personalInformationChild, rectangleTextInput3Style]}
      keyboardType="default"
      autoCapitalize="none"
      value={username}
    />
  );
};

const styles = StyleSheet.create({
  personalInformationChild: {
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

export default NameBox;
