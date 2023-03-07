import * as React from "react";
import { useMemo } from "react";
import {
  Pressable,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const BackButton = ({
  onIconlyLightOutlineArrowLPress,
  iconlyLightOutlineArrowLePosition,
  iconlyLightOutlineArrowLeLeft,
  iconlyLightOutlineArrowLeTop,
  iconlyLightOutlineArrowLeRight,
  iconlyLightOutlineArrowLeBottom,
  iconlyLightOutlineArrowLeWidth,
  iconlyLightOutlineArrowLeHeight,
  iconlyLightOutlineArrowLeMarginTop,
  icon,
  iconMaxWidth,
  iconOverflow,
  iconMaxHeight,
}) => {
  const iconlyLightOutlineArrowLStyle = useMemo(() => {
    return {
      ...getStyleValue("position", iconlyLightOutlineArrowLePosition),
      ...getStyleValue("left", iconlyLightOutlineArrowLeLeft),
      ...getStyleValue("top", iconlyLightOutlineArrowLeTop),
      ...getStyleValue("right", iconlyLightOutlineArrowLeRight),
      ...getStyleValue("bottom", iconlyLightOutlineArrowLeBottom),
      ...getStyleValue("width", iconlyLightOutlineArrowLeWidth),
      ...getStyleValue("height", iconlyLightOutlineArrowLeHeight),
      ...getStyleValue("marginTop", iconlyLightOutlineArrowLeMarginTop),
    };
  }, [
    iconlyLightOutlineArrowLePosition,
    iconlyLightOutlineArrowLeLeft,
    iconlyLightOutlineArrowLeTop,
    iconlyLightOutlineArrowLeRight,
    iconlyLightOutlineArrowLeBottom,
    iconlyLightOutlineArrowLeWidth,
    iconlyLightOutlineArrowLeHeight,
    iconlyLightOutlineArrowLeMarginTop,
  ]);

  const iconStyle = useMemo(() => {
    return {
      ...getStyleValue("maxWidth", iconMaxWidth),
      ...getStyleValue("overflow", iconOverflow),
      ...getStyleValue("maxHeight", iconMaxHeight),
    };
  }, [iconMaxWidth, iconOverflow, iconMaxHeight]);

  return (
    <Pressable
      style={[styles.iconlylightOutlinearrowL, iconlyLightOutlineArrowLStyle]}
      onPress={onIconlyLightOutlineArrowLPress}
    >
      <Image
        style={[styles.icon, iconStyle]}
        resizeMode="cover"
        source={icon}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  iconlylightOutlinearrowL: {
    position: "absolute",
    left: "7.2%",
    top: "8.99%",
    right: "90.13%",
    bottom: "88.76%",
    width: "2.67%",
    height: "2.25%",
  },
});

export default BackButton;
