import * as React from "react";
import { useMemo } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const PatientInfoContainer = ({
  doctorName,
  doctorRating,
  specialtyArea,
  propLeft,
  propWidth,
  propTextAlign,
  propTop,
  propWidth1,
}) => {
  const groupView8Style = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
    };
  }, [propLeft]);

  const groupView9Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  const text4Style = useMemo(() => {
    return {
      ...getStyleValue("textAlign", propTextAlign),
    };
  }, [propTextAlign]);

  const oncologyStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("width", propWidth1),
    };
  }, [propTop, propWidth1]);

  return (
    <View style={[styles.rectangleParent, groupView8Style]}>
      <LinearGradient
        style={[styles.groupChild, styles.groupLayout]}
        locations={[0, 0.77]}
        colors={["rgba(28, 28, 28, 0)", "#1c1c1c"]}
      />
      <View style={[styles.shawnDoeWrapper, groupView9Style]}>
        <Text style={styles.shawnDoe}>{doctorName}</Text>
      </View>
      <View style={styles.parent}>
        <Text style={[styles.text, styles.textClr, text4Style]}>
          {doctorRating}
        </Text>
        <Image
          style={[styles.groupItem, styles.groupLayout]}
          resizeMode="cover"
          source={require("../assets/star-1.png")}
        />
      </View>
      <Text style={[styles.oncology, styles.textClr, oncologyStyle]}>
        {specialtyArea}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    borderRadius: Border.br_lg,
    position: "absolute",
  },
  textClr: {
    color: Color.lightThemeWhite1,
    textAlign: "left",
    position: "absolute",
  },
  groupChild: {
    backgroundColor: "transparent",
    left: 0,
    top: 0,
    borderRadius: Border.br_lg,
    height: 57,
    width: 127,
  },
  shawnDoe: {
    letterSpacing: -0.2,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.silver_100,
    textAlign: "left",
    textTransform: "capitalize",
    fontSize: FontSize.size_xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  shawnDoeWrapper: {
    width: 44,
    height: 12,
    left: 8,
    top: 38,
    position: "absolute",
  },
  text: {
    letterSpacing: -0.4,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: FontFamily.robotoMonoBold,
    color: Color.lightThemeWhite1,
    fontSize: FontSize.size_xs,
    left: 0,
    top: 0,
  },
  groupItem: {
    top: 2,
    left: 16,
    width: 8,
    height: 8,
  },
  parent: {
    left: 96,
    width: 24,
    height: 11,
    top: 38,
    position: "absolute",
  },
  oncology: {
    top: 22,
    fontSize: FontSize.size_2xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemibold,
    textTransform: "capitalize",
    color: Color.lightThemeWhite1,
    left: 8,
  },
  rectangleParent: {
    top: 118,
    left: 264,
    height: 57,
    width: 127,
    position: "absolute",
  },
});

export default PatientInfoContainer;
