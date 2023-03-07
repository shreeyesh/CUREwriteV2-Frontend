import * as React from "react";
import { useMemo } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const AnswerContainer = ({
  answerInput,
  group870Top,
  group870Left,
  frameWidth,
  frameHeight,
}) => {
  const groupView1Style = useMemo(() => {
    return {
      ...getStyleValue("top", group870Top),
      ...getStyleValue("left", group870Left),
    };
  }, [group870Top, group870Left]);

  const typeYourAnswerStyle = useMemo(() => {
    return {
      ...getStyleValue("width", frameWidth),
      ...getStyleValue("height", frameHeight),
    };
  }, [frameWidth, frameHeight]);

  return (
    <View style={[styles.groupParent, groupView1Style]}>
      <View style={[styles.rectangleParent, styles.groupChildPosition]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Text style={[styles.typeYourAnswer, typeYourAnswerStyle]}>
          {answerInput}
        </Text>
      </View>
      <Image
        style={styles.frameIcon}
        resizeMode="cover"
        source={require("../assets/frame11.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    left: 0,
    top: 0,
    height: 50,
    width: 321,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_lg,
    backgroundColor: Color.lightThemeWhite1,
  },
  typeYourAnswer: {
    top: 14,
    left: 18,
    fontSize: FontSize.size_4xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemibold,
    color: Color.lightThemeDark1,
    textAlign: "left",
    width: 151,
    height: 22,
    opacity: 0.5,
    position: "absolute",
  },
  rectangleParent: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  frameIcon: {
    top: 12,
    left: 282,
    width: 24,
    height: 24,
    overflow: "hidden",
    position: "absolute",
  },
  groupParent: {
    top: 682,
    left: 27,
    height: 50,
    width: 321,
    position: "absolute",
  },
});

export default AnswerContainer;
