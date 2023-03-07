import * as React from "react";
import { useMemo } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageSourcePropType,
} from "react-native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const PointsContainer = ({
  pointsEarned,
  playerName,
  playerImageUrl,
  playerRankImageUrl,
  playerScore,
  star6MarginTop,
  propLeft,
  propLeft1,
}) => {
  const row2Style = useMemo(() => {
    return {
      ...getStyleValue("marginTop", star6MarginTop),
    };
  }, [star6MarginTop]);

  const text5Style = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
    };
  }, [propLeft]);

  const text6Style = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft1),
    };
  }, [propLeft1]);

  return (
    <View style={[styles.row, row2Style]}>
      <View style={[styles.rowChild, styles.childPosition]} />
      <Text style={[styles.text, styles.textTypo, text5Style]}>
        {pointsEarned}
      </Text>
      <Text style={[styles.sarahG, styles.text1Clr]}>{playerName}</Text>
      <Image
        style={[styles.rowItem, styles.rowItemLayout]}
        resizeMode="cover"
        source={playerImageUrl}
      />
      <View style={styles.star}>
        <Image
          style={[styles.starChild, styles.rowItemLayout, styles.childPosition]}
          resizeMode="cover"
          source={playerRankImageUrl}
        />
        <Text
          style={[styles.text1, styles.text1Clr, styles.textTypo, text6Style]}
        >
          {playerScore}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  childPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
  },
  textTypo: {
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
  },
  text1Clr: {
    color: Color.lightThemeDark1,
    position: "absolute",
  },
  rowItemLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  rowChild: {
    backgroundColor: Color.lightThemeWhite1,
    shadowColor: "#e8e8e8",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    position: "absolute",
  },
  text: {
    top: "28.57%",
    left: "77.93%",
    lineHeight: 21,
    color: Color.midnightblue,
    textAlign: "right",
    fontSize: FontSize.subtitleButtonBold1_size,
    position: "absolute",
  },
  sarahG: {
    top: "35.71%",
    left: "32.23%",
    lineHeight: 13,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    fontSize: FontSize.subtitleButtonBold1_size,
  },
  rowItem: {
    height: "75%",
    width: "13.61%",
    top: "10.71%",
    right: "71.27%",
    bottom: "14.29%",
    left: "15.13%",
    borderRadius: Border.br_xl,
  },
  starChild: {
    borderRadius: Border.br_6xs,
    display: "none",
  },
  text1: {
    top: "31.25%",
    left: "36.75%",
    fontSize: FontSize.size_base,
    lineHeight: 12,
    textAlign: "center",
  },
  star: {
    height: "57.14%",
    width: "10.37%",
    top: "19.64%",
    right: "88.05%",
    bottom: "23.21%",
    left: "1.59%",
    position: "absolute",
  },
  row: {
    width: 335,
    height: 54,
  },
});

export default PointsContainer;
