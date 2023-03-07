import * as React from "react";
import { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const PublicationTextSpace = ({ studyTitle, rectangle22472Top }) => {
  const groupView10Style = useMemo(() => {
    return {
      ...getStyleValue("top", rectangle22472Top),
    };
  }, [rectangle22472Top]);

  return (
    <View style={[styles.frameParent, groupView10Style]}>
      <View style={styles.groupChild} />
      <View style={[styles.rectangleParent, styles.groupItemPosition]}>
        <View style={[styles.groupItem, styles.groupItemPosition]} />
        <Text
          style={[styles.abstract, styles.abstractPosition, styles.abstractClr]}
        >
          Abstract
        </Text>
        <Text style={[styles.theAbstractFor, styles.abstractPosition]}>
          The abstract for your medical research is arguably the most important
          piece of your manuscript. Although brief, typically between 300-500
          words, the abstract is a summary of the key aspects of your research.
        </Text>
        <Text
          style={[
            styles.oralBacteriaStudy,
            styles.abstractPosition,
            styles.abstractClr,
          ]}
        >
          {studyTitle}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupItemPosition: {
    height: 212,
    width: 335,
    left: 0,
    top: 0,
    position: "absolute",
  },
  abstractPosition: {
    textAlign: "left",
    left: 16,
    position: "absolute",
  },
  abstractClr: {
    color: Color.black01,
    letterSpacing: 0.2,
    textAlign: "left",
  },
  groupChild: {
    left: 16,
    top: 66,
    position: "absolute",
  },
  groupItem: {
    borderRadius: Border.br_lg,
    backgroundColor: Color.gray_1100,
  },
  abstract: {
    fontSize: FontSize.size_7xl,
    lineHeight: 23,
    fontWeight: "700",
    fontFamily: FontFamily.nunitoSansBold,
    top: 66,
    color: Color.black01,
    letterSpacing: 0.2,
  },
  theAbstractFor: {
    top: 101,
    fontSize: FontSize.size_4xl,
    letterSpacing: 0.1,
    lineHeight: 19,
    fontFamily: FontFamily.nunitoSansRegular,
    color: Color.black02,
    width: 319,
    height: 101,
  },
  oralBacteriaStudy: {
    top: 9,
    fontSize: FontSize.size_11xl,
    lineHeight: 32,
    fontWeight: "800",
    fontFamily: FontFamily.nunitoSansExtrabold,
  },
  rectangleParent: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 15,
    elevation: 15,
    shadowOpacity: 1,
  },
  frameParent: {
    height: 227,
    width: 335,
    left: 0,
    top: 0,
    position: "absolute",
  },
});

export default PublicationTextSpace;
