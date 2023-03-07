import * as React from "react";
import { useMemo } from "react";
import {
  Pressable,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from "react-native";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const QuestionTab = ({
  onOptionPress,
  optionBorderRadius,
  optionBackgroundColor,
  optionElevation,
  optionBorderStyle,
  optionBorderColor,
  optionBorderWidth,
  separatorHeight,
  separatorTop,
  separatorRight,
  separatorBottom,
  separatorLeft,
  labelMarginTop,
  labelWidth,
  labelColor,
  labelFontWeight,
}) => {
  const option3Style = useMemo(() => {
    return {
      ...getStyleValue("borderRadius", optionBorderRadius),
      ...getStyleValue("backgroundColor", optionBackgroundColor),
      ...getStyleValue("elevation", optionElevation),
      ...getStyleValue("borderStyle", optionBorderStyle),
      ...getStyleValue("borderColor", optionBorderColor),
      ...getStyleValue("borderWidth", optionBorderWidth),
    };
  }, [
    optionBorderRadius,
    optionBackgroundColor,
    optionElevation,
    optionBorderStyle,
    optionBorderColor,
    optionBorderWidth,
  ]);

  const separator2Style = useMemo(() => {
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

  const label3Style = useMemo(() => {
    return {
      ...getStyleValue("marginTop", labelMarginTop),
      ...getStyleValue("width", labelWidth),
      ...getStyleValue("color", labelColor),
      ...getStyleValue("fontWeight", labelFontWeight),
    };
  }, [labelMarginTop, labelWidth, labelColor, labelFontWeight]);

  return (
    <TouchableHighlight
      style={[styles.option, option3Style]}
      underlayColor="#fff"
      activeOpacity={0.2}
      onPress={onOptionPress}
    >
      <>
        <View />
        <Text>Question</Text>
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

export default QuestionTab;
