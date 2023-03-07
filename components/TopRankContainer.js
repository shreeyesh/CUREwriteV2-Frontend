import * as React from "react";
import { useMemo } from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const TopRankContainer = ({
  propLeft,
  ptsValue,
  userName,
  userNameR2,
  ptsValueR2,
  userNameR3,
  ptsValueR3,
}) => {
  const topRanksStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
    };
  }, [propLeft]);

  return (
    <View style={[styles.topranks, topRanksStyle]}>
      <Text style={[styles.pts, styles.ptsTypo]}>{ptsValue}</Text>
      <Text style={[styles.drJessica, styles.andrewBTypo]}>{userName}</Text>
      <Text style={styles.bradT}>{userNameR2}</Text>
      <Text style={[styles.pts1, styles.ptsTypo]}>{ptsValueR2}</Text>
      <Text style={[styles.andrewB, styles.andrewBTypo]}>{userNameR3}</Text>
      <Text style={[styles.pts2, styles.ptsTypo]}>{ptsValueR3}</Text>
      <Image
        style={[styles.topranksChild, styles.topranksLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-37.png")}
      />
      <Text style={[styles.text, styles.textTypo]}>1</Text>
      <Text style={[styles.text, styles.textTypo]}>1</Text>
      <Image
        style={[styles.topranksItem, styles.topranksLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-38.png")}
      />
      <View style={[styles.rank3, styles.rank3Position]}>
        <Text style={[styles.text2, styles.rank3Position]}>3</Text>
        <Text style={[styles.text2, styles.rank3Position]}>3</Text>
      </View>
      <Image
        style={[styles.topranksInner, styles.topranksLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-39.png")}
      />
      <Text style={[styles.text4, styles.textTypo]}>2</Text>
      <Text style={[styles.text4, styles.textTypo]}>2</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ptsTypo: {
    height: 20,
    textAlign: "center",
    color: Color.steelblue_100,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    lineHeight: 21,
    fontSize: FontSize.size_4xl,
    position: "absolute",
  },
  andrewBTypo: {
    color: Color.midnightblue,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    letterSpacing: 0.4,
    height: 20,
    textAlign: "center",
    lineHeight: 21,
    fontSize: FontSize.size_4xl,
    position: "absolute",
  },
  topranksLayout: {
    height: 93,
    width: 96,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  textTypo: {
    height: 30,
    lineHeight: 16,
    letterSpacing: 1.6,
    fontSize: FontSize.size_12xl,
    width: 55,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "center",
    position: "absolute",
  },
  rank3Position: {
    left: 0,
    height: 30,
    width: 55,
    position: "absolute",
  },
  pts: {
    top: 109,
    left: 147,
    width: 71,
  },
  drJessica: {
    top: 93,
    left: 138,
    width: 87,
  },
  bradT: {
    top: 119,
    left: 271,
    width: 55,
    color: Color.midnightblue,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    letterSpacing: 0.4,
    height: 20,
    textAlign: "center",
    lineHeight: 21,
    fontSize: FontSize.size_4xl,
    position: "absolute",
  },
  pts1: {
    top: 135,
    left: 261,
    width: 73,
  },
  andrewB: {
    top: 134,
    left: 25,
    width: 81,
  },
  pts2: {
    top: 150,
    left: 27,
    width: 74,
  },
  topranksChild: {
    left: 132,
    top: 0,
  },
  text: {
    top: 70,
    left: 116,
    color: Color.gold,
  },
  topranksItem: {
    top: 41,
    left: 15,
  },
  text2: {
    color: Color.peru,
    lineHeight: 16,
    letterSpacing: 1.6,
    fontSize: FontSize.size_12xl,
    left: 0,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "center",
    top: 0,
  },
  rank3: {
    top: 112,
  },
  topranksInner: {
    top: 27,
    left: 249,
  },
  text4: {
    top: 96,
    left: 236,
    color: Color.silver_300,
  },
  topranks: {
    left: 11,
    width: 345,
    height: 170,
    top: 0,
    position: "absolute",
  },
});

export default TopRankContainer;
