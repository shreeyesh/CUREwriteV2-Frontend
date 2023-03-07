import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ContinueButton from "../components/ContinueButton";
import BrandingContainer from "../components/BrandingContainer";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const PAPERSUBMITTED = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.paperSubmitted}>
      <View style={[styles.paperSubmittedChild, styles.paperPosition]} />
      <Text
        style={[styles.paperSubmitted1, styles.paperPosition]}
      >{`Paper Submitted `}</Text>
      <ContinueButton
        onContinueButtonPress={() => navigation.navigate("POSTSUCCESS")}
        onRectangleTouchableHighligPress={() =>
          navigation.navigate("LEADERBOARDNATIONAL")
        }
        continueButtonTop={696}
      />
      <Image
        style={styles.paperSubmittedItem}
        resizeMode="cover"
        source={require("../assets/ellipse-14.png")}
      />
      <Image
        style={styles.horizontalLogo1Icon}
        resizeMode="cover"
        source={require("../assets/horizontallogo-1.png")}
      />
      <BrandingContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  paperPosition: {
    left: 105,
    position: "absolute",
  },
  paperSubmittedChild: {
    top: 801,
    borderRadius: Border.br_lg,
    backgroundColor: Color.lightThemeDark1,
    width: 165,
    height: 4,
  },
  paperSubmitted1: {
    top: 303,
    fontSize: FontSize.size_10xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemibold,
    color: Color.lightThemeDark1,
    textAlign: "left",
  },
  paperSubmittedItem: {
    top: 77,
    left: 97,
    width: 183,
    height: 183,
    position: "absolute",
  },
  horizontalLogo1Icon: {
    top: 123,
    left: 115,
    width: 148,
    height: 83,
    position: "absolute",
  },
  paperSubmitted: {
    backgroundColor: Color.lightThemeWhite1,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default PAPERSUBMITTED;
