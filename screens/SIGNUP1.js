import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableHighlight,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import BackButton from "../components/BackButton";
import NumberBox from "../components/NumberBox";
import CountryList from "../components/CountryList";
import LinkedinAccess from "../components/LinkedinAccess";
import { Margin, FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const SIGNUP1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signUp}>
      <Image
        style={styles.blackBase21}
        resizeMode="cover"
        source={require("../assets/black-base-2-1.png")}
      />
      <BackButton
        onIconlyLightOutlineArrowLPress={() => navigation.goBack()}
        iconlyLightOutlineArrowLePosition="relative"
        iconlyLightOutlineArrowLeLeft="unset"
        iconlyLightOutlineArrowLeTop="unset"
        iconlyLightOutlineArrowLeRight="unset"
        iconlyLightOutlineArrowLeBottom="unset"
        iconlyLightOutlineArrowLeWidth={10}
        iconlyLightOutlineArrowLeHeight={18}
        iconlyLightOutlineArrowLeMarginTop={32}
        icon={{ uri: "iconlylightoutlinearrowleft25@3x.png" }}
        iconMaxWidth="unset"
        iconOverflow="unset"
        iconMaxHeight="unset"
      />
      <Text style={[styles.phone, styles.mt32]}>Phone</Text>
      <Text
        style={[
          styles.enterYourPhone,
          styles.mt32,
          styles.textTypo,
          styles.textTypo1,
        ]}
      >
        Enter your phone number
      </Text>
      <Image
        style={[styles.signUpChild, styles.mt32]}
        resizeMode="cover"
        source={require("../assets/countryIcon.png")}
      />
      <View style={[styles.groupChildLayout, styles.mt32]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.text, styles.textTypo, styles.textTypo1]}>
          +91
        </Text>
        <NumberBox
          number="7894578621"
          rectangle15Top={13}
          rectangle15Left={86}
          rectangle15BackgroundColor="unset"
          rectangle15Width="unset"
          rectangle15Height="unset"
          rectangle15Opacity={0.5}
        />
      </View>
      <CountryList />
      <View style={[styles.groupParent, styles.mt32]}>
        <View style={[styles.groupContainer, styles.wrapperLayout]}>
          <TouchableHighlight
            style={[styles.wrapper, styles.wrapperLayout]}
            underlayColor="#fff"
            activeOpacity={0.2}
            onPress={() => {}}
          >
            <>
              <Image
                resizeMode="cover"
                source={require("../assets/google-logo2.png")}
              />
              <Text>Google</Text>
            </>
          </TouchableHighlight>
          <LinkedinAccess
            onGroupTouchableHighlightPress={() => {}}
            image7={require("../assets/linkedinlogo1.png")}
          />
        </View>
        <View style={styles.vectorParent}>
          <Image
            style={[styles.groupItem, styles.groupLayout]}
            resizeMode="cover"
            source={require("../assets/vector-22.png")}
          />
          <Image
            style={[styles.groupInner, styles.groupLayout]}
            resizeMode="cover"
            source={require("../assets/vector-22.png")}
          />
          <Text style={styles.orSignUp}>Or sign up with</Text>
        </View>
      </View>
      <TouchableHighlight
        style={[styles.groupChildLayout, styles.mt32]}
        underlayColor="#fff"
        activeOpacity={0.2}
        onPress={() => navigation.navigate("VERIFICATION1")}
      >
        <>
          <Image
            resizeMode="cover"
            source={require("../assets/rectangle-11.png")}
          />
          <Text>Next</Text>
        </>
      </TouchableHighlight>
      <Pressable
        style={styles.mt32}
        onPress={() => navigation.navigate("SIGNIN")}
      >
        <Text style={styles.text1}>
          <Text style={styles.alreadyHaveAnAccount}>
            <Text style={styles.textTypo}>Already have an account?</Text>
            <Text>{` `}</Text>
          </Text>
          <Text style={styles.signIn}>Sign In</Text>
        </Text>
      </Pressable>
      <View style={[styles.signUpItem, styles.mt32]} />
    </View>
  );
};

const styles = StyleSheet.create({
  mt32: {
    marginTop: Margin.m_lg,
  },
  textTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  textTypo1: {
    fontSize: FontSize.paragraphSemiBold_size,
    fontWeight: "500",
    textAlign: "left",
    color: Color.lightThemeDark1,
  },
  groupChildLayout: {
    height: 49,
    width: 321,
  },
  wrapperLayout: {
    height: 23,
    position: "absolute",
  },
  groupLayout: {
    height: 1,
    width: 105,
    top: 10,
    position: "absolute",
  },
  blackBase21: {
    width: 375,
    height: 41,
  },
  phone: {
    fontSize: FontSize.size_10xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemibold,
    width: 65,
    textAlign: "left",
    color: Color.lightThemeDark1,
  },
  enterYourPhone: {
    width: 209,
    opacity: 0.7,
  },
  signUpChild: {
    width: 27,
    height: 19,
    opacity: 0.9,
  },
  groupChild: {
    borderStyle: "solid",
    borderColor: "#02256d",
    borderWidth: 1,
    borderRadius: Border.br_lg,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.lightThemeWhite1,
  },
  text: {
    top: 13,
    left: 51,
    opacity: 0.5,
    position: "absolute",
  },
  wrapper: {
    width: 81,
    left: 0,
    top: 0,
  },
  groupContainer: {
    top: 28,
    left: 18,
    width: 261,
  },
  groupItem: {
    left: 0,
  },
  groupInner: {
    left: 193,
  },
  orSignUp: {
    left: 108,
    fontSize: FontSize.size_2xl,
    fontFamily: FontFamily.outfitRegular,
    color: Color.dimgray_100,
    top: 0,
    position: "absolute",
    textAlign: "left",
  },
  vectorParent: {
    height: 15,
    width: 298,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupParent: {
    height: 51,
    width: 298,
  },
  alreadyHaveAnAccount: {
    color: Color.lightThemeDark1,
  },
  signIn: {
    fontFamily: FontFamily.poppinsRegular,
    color: Color.midnightblue,
  },
  text1: {
    fontSize: FontSize.size_4xl,
    width: 239,
    textAlign: "left",
  },
  signUpItem: {
    backgroundColor: Color.lightThemeDark1,
    width: 165,
    height: 4,
    borderRadius: Border.br_lg,
  },
  signUp: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    alignItems: "center",
    backgroundColor: Color.lightThemeWhite1,
  },
});

export default SIGNUP1;
