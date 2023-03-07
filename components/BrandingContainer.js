import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const BrandingContainer = () => {
  return (
    <View style={[styles.rectangleParent, styles.groupChildLayout]}>
      <View
        style={[
          styles.groupChild,
          styles.groupPosition,
          styles.groupChildLayout,
        ]}
      />
      <Image
        style={styles.groupItem}
        resizeMode="cover"
        source={require("../assets/line-2.png")}
      />
      <View style={styles.selectParent}>
        <Image
          style={[styles.selectIcon, styles.selectIconLayout]}
          resizeMode="cover"
          source={require("../assets/select.png")}
        />
        <Image
          style={[styles.selectIcon1, styles.selectIconLayout]}
          resizeMode="cover"
          source={require("../assets/select1.png")}
        />
        <Image
          style={[styles.selectIcon2, styles.selectIconLayout]}
          resizeMode="cover"
          source={require("../assets/select1.png")}
        />
        <Image
          style={[styles.selectIcon3, styles.selectIconLayout]}
          resizeMode="cover"
          source={require("../assets/select1.png")}
        />
      </View>
      <View style={[styles.groupWrapper, styles.groupLayout]}>
        <View style={[styles.groupLayout, styles.groupPosition]}>
          <View style={styles.groupPosition}>
            <Text style={styles.submittedToCurewrite}>
              Submitted to CUREwrite
            </Text>
            <Text
              style={[styles.preScreeningRelevance, styles.editingReviewTypo]}
            >{`Pre-Screening (Relevance & Plagiarism check`}</Text>
            <Text
              style={[
                styles.editingReview,
                styles.editingReviewTypo,
                styles.editingReviewLayout,
              ]}
            >{`Editing & Review`}</Text>
            <Text
              style={[
                styles.brandingPublishing,
                styles.editingReviewTypo,
                styles.editingReviewLayout,
              ]}
            >{`Branding & Publishing`}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 287,
    width: 323,
    position: "absolute",
  },
  groupPosition: {
    left: 0,
    top: 0,
  },
  selectIconLayout: {
    height: 19,
    width: 19,
    left: 0,
    position: "absolute",
  },
  groupLayout: {
    height: 233,
    width: 232,
    position: "absolute",
  },
  editingReviewTypo: {
    color: Color.gray_200,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
    fontSize: FontSize.size_4xl,
    left: 0,
    position: "absolute",
  },
  editingReviewLayout: {
    height: 23,
    width: 232,
    color: Color.gray_200,
  },
  groupChild: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.whitesmoke_300,
  },
  groupItem: {
    left: 39,
    width: 3,
    height: 247,
    top: 0,
    position: "absolute",
  },
  selectIcon: {
    top: 0,
  },
  selectIcon1: {
    top: 71,
  },
  selectIcon2: {
    top: 142,
  },
  selectIcon3: {
    top: 213,
  },
  selectParent: {
    top: 24,
    left: 31,
    height: 232,
    width: 19,
    position: "absolute",
  },
  submittedToCurewrite: {
    color: Color.gray_600,
    width: 184,
    height: 23,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
    fontSize: FontSize.size_4xl,
    left: 0,
    top: 0,
    position: "absolute",
  },
  preScreeningRelevance: {
    top: 61,
    width: 220,
    height: 50,
  },
  editingReview: {
    top: 141,
    height: 23,
  },
  brandingPublishing: {
    top: 210,
    height: 23,
  },
  groupWrapper: {
    top: 27,
    left: 60,
  },
  rectangleParent: {
    top: 371,
    left: 26,
  },
});

export default BrandingContainer;
