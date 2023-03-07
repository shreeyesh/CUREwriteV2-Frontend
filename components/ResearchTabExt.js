import * as React from "react";
import { useMemo } from "react";
import {
  Pressable,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
} from "react-native";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const ResearchTabExt = ({
  onOptionPress,
  optionBorderStyle,
  optionBorderColor,
  optionBorderWidth,
  optionBorderRadius,
  optionElevation,
  separatorHeight,
  separatorTop,
  separatorRight,
  separatorBottom,
  separatorLeft,
  labelMarginTop,
  labelWidth,
  labelFontWeight,
  labelColor,
  labelFontFamily,
}) => {
  const optionStyle = useMemo(() => {
    return {
      ...getStyleValue("borderStyle", optionBorderStyle),
      ...getStyleValue("borderColor", optionBorderColor),
      ...getStyleValue("borderWidth", optionBorderWidth),
      ...getStyleValue("borderRadius", optionBorderRadius),
      ...getStyleValue("elevation", optionElevation),
    };
  }, [
    optionBorderStyle,
    optionBorderColor,
    optionBorderWidth,
    optionBorderRadius,
    optionElevation,
  ]);

  const separatorIconStyle = useMemo(() => {
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

  const labelStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", labelMarginTop),
      ...getStyleValue("width", labelWidth),
      ...getStyleValue("fontWeight", labelFontWeight),
      ...getStyleValue("color", labelColor),
      ...getStyleValue("fontFamily", labelFontFamily),
    };
  }, [
    labelMarginTop,
    labelWidth,
    labelFontWeight,
    labelColor,
    labelFontFamily,
  ]);

  return (
    <TouchableHighlight
      style={[styles.option, optionStyle]}
      underlayColor="#fff"
      activeOpacity={0.2}
      onPress={onOptionPress}
    >
      <>
        <Image resizeMode="cover" source={require("../assets/separator.png")} />
        <Text>Research</Text>
      </>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  option: {
    alignSelf: "stretch",
    flex: 1,
  },
});

export default ResearchTabExt;
