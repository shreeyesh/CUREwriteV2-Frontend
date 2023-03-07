import * as React from "react";
import { useMemo } from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  ImageSourcePropType,
} from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const HealthTechContainer = ({
  authorImageUrl,
  titleText,
  authorName,
  propLeft,
  propDisplay,
}) => {
  const component5Style = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
    };
  }, [propLeft]);

  const imageIconStyle = useMemo(() => {
    return {
      ...getStyleValue("display", propDisplay),
    };
  }, [propDisplay]);

  return (
    <View style={[styles.component5, styles.imageIconLayout, component5Style]}>
      <View style={styles.frameParent}>
        <View style={styles.imageWrapper}>
          <Image
            style={[styles.imageIcon, styles.imageIconLayout, imageIconStyle]}
            resizeMode="cover"
            source={authorImageUrl}
          />
        </View>
        <Text style={styles.theTwoTowers}>{titleText}</Text>
        <Text style={[styles.jrrTolkien, styles.textClr]}>{authorName}</Text>
        <Text style={[styles.text, styles.textClr]}>0%</Text>
        <View style={[styles.frameChild, styles.frameLayout]} />
        <View style={[styles.frameItem, styles.frameLayout]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageIconLayout: {
    overflow: "hidden",
    borderRadius: Border.br_lg,
    position: "absolute",
  },
  textClr: {
    color: Color.style1,
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  frameLayout: {
    height: 3,
    width: 83,
    borderTopWidth: 3,
    borderColor: "#bdbdbd",
    borderStyle: "solid",
    top: 331,
    position: "absolute",
  },
  imageIcon: {
    marginLeft: -135,
    top: -20,
    left: "50%",
    width: 269,
    height: 280,
    display: "none",
    borderRadius: Border.br_lg,
    position: "absolute",
  },
  imageWrapper: {
    backgroundColor: Color.f8F5F1,
    height: 260,
    display: "none",
    left: 0,
    width: 202,
    overflow: "hidden",
    borderRadius: Border.br_lg,
    top: 0,
    position: "absolute",
  },
  theTwoTowers: {
    top: 271,
    fontSize: FontSize.paragraphSemiBold_size,
    color: Color.style,
    textAlign: "left",
    letterSpacing: 0,
    fontFamily: FontFamily.subtitleButtonBold1,
    fontWeight: "700",
    left: 0,
    position: "absolute",
  },
  jrrTolkien: {
    top: 294,
    fontSize: FontSize.subtitleButtonBold1_size,
    fontFamily: FontFamily.subtitleButtonBold1,
    fontWeight: "700",
    color: Color.style1,
    left: 0,
  },
  text: {
    top: 310,
    left: 174,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.nunitoRegular,
    display: "none",
  },
  frameChild: {
    left: 83,
  },
  frameItem: {
    left: 113,
  },
  frameParent: {
    top: 15,
    left: 12,
    height: 345,
    width: 202,
    borderRadius: Border.br_lg,
    position: "absolute",
  },
  component5: {
    left: 245,
    backgroundColor: Color.gray_100,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 15,
    elevation: 15,
    shadowOpacity: 1,
    width: 225,
    height: 360,
    top: 0,
    borderRadius: Border.br_lg,
    position: "absolute",
  },
});

export default HealthTechContainer;
