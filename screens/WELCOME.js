import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import DoneBox from "../components/DoneBox";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const WELCOME = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.welcome}>
      <View style={[styles.welcomeChild, styles.welcomePosition]} />
      <Text style={[styles.welcomeBack, styles.continueTypo]}>
        Welcome Back
      </Text>
      <Pressable
        style={styles.rectangleParent}
        onPress={() => navigation.navigate("HOMEPAGELEARN")}
      >
        <DoneBox />
        <Text style={[styles.continue, styles.continueTypo]}>Continue</Text>
      </Pressable>
      <Image
        style={[styles.welcomeItem, styles.welcomePosition]}
        resizeMode="cover"
        source={require("../assets/ellipseLogo.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  welcomePosition: {
    left: 105,
    position: "absolute",
  },
  continueTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    position: "absolute",
  },
  welcomeChild: {
    top: 801,
    borderRadius: Border.br_lg,
    backgroundColor: Color.lightThemeDark1,
    width: 165,
    height: 4,
  },
  welcomeBack: {
    top: 376,
    left: 112,
    fontSize: FontSize.size_10xl,
    color: Color.lightThemeDark1,
  },
  continue: {
    top: 11,
    left: 118,
    fontSize: FontSize.size_8xl,
    color: Color.lightThemeWhite1,
  },
  rectangleParent: {
    top: 459,
    left: 27,
    width: 321,
    height: 49,
    position: "absolute",
  },
  welcomeItem: {
    top: 126,
    width: 183,
    height: 183,
  },
  welcome: {
    backgroundColor: Color.lightThemeWhite1,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default WELCOME;
