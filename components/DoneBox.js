import * as React from "react";
import { useMemo } from "react";
import { Image, StyleSheet } from "react-native";
import { Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const DoneBox = ({
  rectangle13Position,
  rectangle13Top,
  rectangle13Left,
  rectangle13BorderRadius,
  rectangle13Width,
  rectangle13Height,
}) => {
  const rectangleIconStyle = useMemo(() => {
    return {
      ...getStyleValue("position", rectangle13Position),
      ...getStyleValue("top", rectangle13Top),
      ...getStyleValue("left", rectangle13Left),
      ...getStyleValue("borderRadius", rectangle13BorderRadius),
      ...getStyleValue("width", rectangle13Width),
      ...getStyleValue("height", rectangle13Height),
    };
  }, [
    rectangle13Position,
    rectangle13Top,
    rectangle13Left,
    rectangle13BorderRadius,
    rectangle13Width,
    rectangle13Height,
  ]);

  return (
    <Image
      style={[styles.groupChild, rectangleIconStyle]}
      resizeMode="cover"
      source={require("../assets/rectangle-1.png")}
    />
  );
};

const styles = StyleSheet.create({
  groupChild: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: Border.br_lg,
    width: 321,
    height: 49,
  },
});

export default DoneBox;
