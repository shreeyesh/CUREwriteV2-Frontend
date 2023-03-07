import * as React from "react";
import { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const ConfirmButton = ({
  rectangle13Position,
  rectangle13Top,
  rectangle13Left,
  rectangle13BorderRadius,
  rectangle13BackgroundColor,
  rectangle13Width,
  rectangle13Height,
}) => {
  const rectangleView2Style = useMemo(() => {
    return {
      ...getStyleValue("position", rectangle13Position),
      ...getStyleValue("top", rectangle13Top),
      ...getStyleValue("left", rectangle13Left),
      ...getStyleValue("borderRadius", rectangle13BorderRadius),
      ...getStyleValue("backgroundColor", rectangle13BackgroundColor),
      ...getStyleValue("width", rectangle13Width),
      ...getStyleValue("height", rectangle13Height),
    };
  }, [
    rectangle13Position,
    rectangle13Top,
    rectangle13Left,
    rectangle13BorderRadius,
    rectangle13BackgroundColor,
    rectangle13Width,
    rectangle13Height,
  ]);

  return <View style={[styles.groupChild, rectangleView2Style]} />;
};

const styles = StyleSheet.create({
  groupChild: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: Border.br_lg,
    backgroundColor: Color.midnightblue,
    width: 321,
    height: 49,
  },
});

export default ConfirmButton;
