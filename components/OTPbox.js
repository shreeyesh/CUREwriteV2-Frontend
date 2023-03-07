import * as React from "react";
import { useMemo } from "react";
import { TextInput, StyleSheet } from "react-native";
import { Border, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const OTPbox = ({
  rectangle14ClearTextOnFoc,
  rectangle14KeyboardType,
  rectangle14TextAlign,
  rectangle14Top,
  rectangle14Left,
  rectangle14BorderRadius,
  rectangle14BackgroundColor,
  rectangle14Width,
  rectangle14Height,
  otpi1,
}) => {
  const rectangleTextInputStyle = useMemo(() => {
    return {
      ...getStyleValue("top", rectangle14Top),
      ...getStyleValue("left", rectangle14Left),
      ...getStyleValue("borderRadius", rectangle14BorderRadius),
      ...getStyleValue("backgroundColor", rectangle14BackgroundColor),
      ...getStyleValue("width", rectangle14Width),
      ...getStyleValue("height", rectangle14Height),
    };
  }, [
    rectangle14Top,
    rectangle14Left,
    rectangle14BorderRadius,
    rectangle14BackgroundColor,
    rectangle14Width,
    rectangle14Height,
  ]);

  return (
    <TextInput
      style={[styles.verificationChild, rectangleTextInputStyle]}
      keyboardType={rectangle14KeyboardType}
      maxLength={1}
      underlineColor="#FFFFFF"
      textAlign={rectangle14TextAlign}
      clearTextOnFocus={rectangle14ClearTextOnFoc}
      value={otpi1}
    />
  );
};

const styles = StyleSheet.create({
  verificationChild: {
    position: "absolute",
    top: 214,
    left: 27,
    borderRadius: Border.br_lg,
    backgroundColor: Color.midnightblue,
    width: 70,
    height: 60,
  },
});

export default OTPbox;
