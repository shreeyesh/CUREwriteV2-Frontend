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

const LeaderboardContainer = ({
  pointsEarned,
  playerName,
  playerImageUrl,
  playerRankImageUrl,
  playerScore,
  propTop,
  propLeft,
  propLeft1,
}) => {
  const row1Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  const text2Style = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
    };
  }, [propLeft]);

  const text3Style = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft1),
    };
  }, [propLeft1]);

  return (
    <View style={[styles.row, row1Style]}>
      <View style={[styles.rowChild, styles.childLayout]} />
      <Text style={[styles.text, styles.textTypo, text2Style]}>
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
          style={[styles.starChild, styles.rowItemLayout, styles.childLayout]}
          resizeMode="cover"
          source={playerRankImageUrl}
        />
        <Text
          style={[styles.text1, styles.text1Clr, styles.textTypo, text3Style]}
        >
          {playerScore}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  childLayout: {
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
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
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
    left: "81.82%",
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
    top: "6.9%",
    right: "-10.08%",
    bottom: "-6.9%",
    left: "10.08%",
    borderRadius: Border.br_6xs,
  },
  text1: {
    top: "31.25%",
    left: "30.99%",
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
    top: 588,
    left: 18,
    width: 335,
    height: 54,
    position: "absolute",
  },
});

export default LeaderboardContainer;
