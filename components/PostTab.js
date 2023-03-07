import * as React from "react";
import { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const PostTab = ({
  optionElevation,
  optionBorderStyle,
  optionBorderColor,
  optionBorderWidth,
  separatorHeight,
  separatorTop,
  separatorRight,
  separatorBottom,
  separatorLeft,
  label,
  labelMarginTop,
}) => {
  const option2Style = useMemo(() => {
    return {
      ...getStyleValue("elevation", optionElevation),
      ...getStyleValue("borderStyle", optionBorderStyle),
      ...getStyleValue("borderColor", optionBorderColor),
      ...getStyleValue("borderWidth", optionBorderWidth),
    };
  }, [
    optionElevation,
    optionBorderStyle,
    optionBorderColor,
    optionBorderWidth,
  ]);

  const separator1Style = useMemo(() => {
    return {
      ...getStyleValue("height", separatorHeight),
      ...getStyleValue("top", separatorTop),
      ...getStyleValue("right", separatorRight),
      ...getStyleValue("bottom", separatorBottom),
      ...getStyleValue("left", separatorLeft),
    };
  }, [
    separatorHeight,
    separatorTop,
    separatorRight,
    separatorBottom,
    separatorLeft,
  ]);

  const label2Style = useMemo(() => {
    return {
      ...getStyleValue("marginTop", labelMarginTop),
    };
  }, [labelMarginTop]);

  return (
    <View style={[styles.option, option2Style]}>
      <View style={[styles.separator, separator1Style]} />
      <Text style={[styles.label, label2Style]}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  separator: {
    height: "57.14%",
    width: "0.57%",
    top: "21.43%",
    right: "1.15%",
    bottom: "21.44%",
    left: "98.28%",
    borderRadius: Border.br_7xs,
    backgroundColor: Color.separatorColorLightWithTransparency1,
    display: "none",
    position: "absolute",
  },
  label: {
    marginTop: -8,
    top: "50%",
    left: 8,
    fontSize: FontSize.size_4xl,
    lineHeight: 16,
    fontWeight: "700",
    fontFamily: FontFamily.readexProBold,
    color: Color.lightThemeWhite1,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 67,
    height: 16,
    position: "absolute",
  },
  option: {
    alignSelf: "stretch",
    flex: 1,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.midnightblue,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
});

export default PostTab;
