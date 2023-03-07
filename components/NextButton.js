import * as React from "react";
import { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const NextButton = ({
  rectangle13Position,
  rectangle13Top,
  rectangle13Left,
  rectangle13BackgroundColor,
  rectangle13Width,
  rectangle13Height,
  rectangle13BorderRadius,
}) => {
  const rectangleView1Style = useMemo(() => {
    return {
      ...getStyleValue("position", rectangle13Position),
      ...getStyleValue("top", rectangle13Top),
      ...getStyleValue("left", rectangle13Left),
      ...getStyleValue("backgroundColor", rectangle13BackgroundColor),
      ...getStyleValue("width", rectangle13Width),
      ...getStyleValue("height", rectangle13Height),
      ...getStyleValue("borderRadius", rectangle13BorderRadius),
    };
  }, [
    rectangle13Position,
    rectangle13Top,
    rectangle13Left,
    rectangle13BackgroundColor,
    rectangle13Width,
    rectangle13Height,
    rectangle13BorderRadius,
  ]);

  return <View style={[styles.groupChild, rectangleView1Style]} />;
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

export default NextButton;
