import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  TouchableHighlight,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import DoneBox from "../components/DoneBox";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import { color } from "react-native-reanimated";

const ONBOARDING = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.onboarding}>
      <Text style={[styles.alreadyHaveAnContainer, styles.curewriteIsATypo]}>
        <Text style={styles.alreadyHaveAn}>{`Already have an account? `}</Text>
        <Text style={styles.signIn}>Sign In</Text>
      </Text>
      <View style={styles.onboardingChild} />
      <Text style={[styles.joinThePeople, styles.wrapperPosition]}>
        Join the People of Curiosity
      </Text>
      <Text
        style={[
          styles.curewriteIsA,
          styles.wrapperPosition,
          styles.curewriteIsATypo,
        ]}
      >{`CUREwrite is a Medical Research Journal build on blockchain, accompanied by healthcare networking app which allows users across the globe to network & collaborate with people in Healthcare & Medical industry`}</Text>
      <TouchableHighlight
        style={[styles.wrapper, styles.wrapperPosition]}
        underlayColor="#fff"
        activeOpacity={0.2}
        onPress={() => navigation.navigate("SIGNUP")}
      >
        <>
          <DoneBox />
          <Text style={styles.continueText}>Continue</Text>
        </>
      </TouchableHighlight>
      <ImageBackground
        style={styles.pngtreehandDrawnCartoonMed}
        resizeMode="cover"
        source={require("../assets/cartoonresearch.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  curewriteIsATypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_4xl,
    textAlign: "left",
  },
  wrapperPosition: {
    left: 27,
    position: "absolute",
  },
  alreadyHaveAn: {
    color: Color.lightThemeDark1,
  },
  signIn: {
    color: Color.silver_200,
  },
  alreadyHaveAnContainer: {
    top: 728,
    left: 69,
    width: 239,
    textAlign: "left",
    position: "absolute",
  },
  onboardingChild: {
    top: 801,
    left: 105,
    borderRadius: Border.br_lg,
    backgroundColor: Color.lightThemeDark1,
    width: 165,
    height: 4,
    position: "absolute",
  },
  joinThePeople: {
    top: 337,
    fontSize: 30,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemibold,
    width: 274,
    color: Color.lightThemeDark1,
    textAlign: "left",
  },
  curewriteIsA: {
    top: 455,
    width: 320,
    opacity: 0.7,
    color: Color.lightThemeDark1,
    textAlign: "left",
  },
  wrapper: {
    top: 614,
    width: 321,
    height: 49,
  },
  pngtreehandDrawnCartoonMed: {
    top: 51,
    left: 13,
    width: 281,
    height: 281,
    position: "absolute",
  },
  onboarding: {
    backgroundColor: Color.lightThemeWhite1,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
  continueText:{
    marginLeft: 130,
    marginTop:10,
    color: Color.lightThemeWhite1,
    fontSize:20,
  }
});

export default ONBOARDING;
