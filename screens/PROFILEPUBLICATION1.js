import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PublicationTextSpace from "../components/PublicationTextSpace";
import Header from "../components/Header";
import BackButton from "../components/BackButton";
import PublicationChips from "../components/PublicationChips";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const PROFILEPUBLICATION1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profilePublication}>
      <View style={styles.profilePublicationInner}>
        <View style={styles.groupParent}>
          <PublicationTextSpace studyTitle="Dental Healthcare" />
          <PublicationTextSpace
            studyTitle="Oral Hygiene"
            rectangle22472Top={233}
          />
          <PublicationTextSpace
            studyTitle="Study on Oral Bleeding"
            rectangle22472Top={466}
          />
          <PublicationTextSpace
            studyTitle="Painless tooth removal"
            rectangle22472Top={699}
          />
          <PublicationTextSpace
            studyTitle="Dental Clinical Trial"
            rectangle22472Top={932}
          />
        </View>
      </View>
      <View style={styles.groupInnerPosition}>
        <Image
          style={styles.groupChild}
          resizeMode="cover"
          source={require("../assets/ellipse-2.png")}
        />
        <Image
          style={styles.groupItem}
          resizeMode="cover"
          source={require("../assets/group-149.png")}
        />
        <View style={[styles.groupInner, styles.groupInnerPosition]} />
        <Image
          style={styles.blackBase21}
          resizeMode="cover"
          source={require("../assets/black-base-2-1.png")}
        />
        <Header
          onFramePress={() => {}}
          onIconlyBrokenChatPress={() => {}}
          icon={require("../assets/frame.png")}
        />
      </View>
      <BackButton
        onIconlyLightOutlineArrowLPress={() => navigation.goBack()}
        iconlyLightOutlineArrowLeTop="12.44%"
        iconlyLightOutlineArrowLeBottom="85.32%"
        icon={require("../assets/iconlylightoutlinearrowleft2.png")}
      />
      <Text style={styles.publication}>Publication</Text>
      <PublicationChips />
    </View>
  );
};

const styles = StyleSheet.create({
  groupInnerPosition: {
    height: 96,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupParent: {
    height: 1159,
    left: 0,
    top: 0,
    width: 335,
    position: "absolute",
  },
  profilePublicationInner: {
    top: 196,
    height: 657,
    width: 335,
    left: 20,
    position: "absolute",
  },
  groupChild: {
    top: 48,
    width: 37,
    height: 37,
    left: 20,
    position: "absolute",
  },
  groupItem: {
    height: "17.61%",
    width: "4.64%",
    top: "59.79%",
    right: "25.74%",
    bottom: "22.6%",
    left: "69.62%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupInner: {
    opacity: 0.99,
    backgroundColor: Color.lightThemeWhite1,
  },
  blackBase21: {
    height: 41,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  publication: {
    top: 97,
    left: 127,
    fontSize: FontSize.size_8xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemibold,
    color: Color.lightThemeDark1,
    textAlign: "center",
    width: 120,
    position: "absolute",
  },
  profilePublication: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.lightThemeWhite1,
  },
});

export default PROFILEPUBLICATION1;
