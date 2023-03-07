import * as React from "react";
import { useMemo } from "react";
import {
  Pressable,
  Image,
  StyleSheet,
  TouchableHighlight,
  ImageSourcePropType,
} from "react-native";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const UserTab = ({
  onVectorPress,
  vectorLeft,
  vectorTop,
  vectorRight,
  vectorBottom,
  vectorWidth,
  vectorHeight,
  icon,
}) => {
  const vectorStyle = useMemo(() => {
    return {
      ...getStyleValue("left", vectorLeft),
      ...getStyleValue("top", vectorTop),
      ...getStyleValue("right", vectorRight),
      ...getStyleValue("bottom", vectorBottom),
      ...getStyleValue("width", vectorWidth),
      ...getStyleValue("height", vectorHeight),
    };
  }, [
    vectorLeft,
    vectorTop,
    vectorRight,
    vectorBottom,
    vectorWidth,
    vectorHeight,
  ]);

  return (
    <TouchableHighlight
      style={[styles.vector, vectorStyle]}
      underlayColor="#fff"
      activeOpacity={0.2}
      onPress={onVectorPress}
    >
      <Image style={styles.icon} resizeMode="cover" source={icon} />
    </TouchableHighlight>
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
  vector: {
    position: "absolute",
    left: "92.21%",
    top: "0%",
    right: "0%",
    bottom: "7.55%",
    width: "7.79%",
    height: "92.45%",
  },
});

export default UserTab;
