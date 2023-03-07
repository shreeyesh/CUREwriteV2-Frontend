import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  TouchableHighlight,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import NameBox from "../components/NameBox";
import PasswordBox from "../components/PasswordBox";
import BackButton from "../components/BackButton";
import GoogleAccess from "../components/GoogleAccess";
import LinkedinAccess from "../components/LinkedinAccess";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const SIGNIN = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signIn}>
      <Text style={styles.doNotHaveContainer}>
        <Text style={styles.doNotHave}>{`Do not have an Account? `}</Text>
        <Text style={styles.signUp}>Sign up</Text>
      </Text>
      <View style={styles.signInChild} />
      <Text style={[styles.signIn1, styles.signIn1Position]}>Sign In</Text>
      <Text
        style={[
          styles.username,
          styles.passwordTypo,
          styles.signIn1Position,
          styles.passwordTypo1,
        ]}
      >
        Username
      </Text>
      <Text
        style={[
          styles.password,
          styles.passwordTypo,
          styles.signIn1Position,
          styles.passwordTypo1,
        ]}
      >
        Password
      </Text>
      <TouchableHighlight
        style={[styles.wrapper, styles.signIn1Position]}
        underlayColor="#fff"
        activeOpacity={0.2}
        onPress={() => navigation.navigate("WELCOME")}
      >
        <>
          <View />
          <Text>Done</Text>
        </>
      </TouchableHighlight>
      <NameBox />
      <PasswordBox
        rectangle13Top={329}
        rectangle13BorderStyle="unset"
        rectangle13BorderColor="unset"
      />
      <Text
        style={[
          styles.enterYourCredentials,
          styles.passwordTypo,
          styles.signIn1Position,
        ]}
      >
        Enter your credentials
      </Text>
      <Pressable
        style={styles.forgotPassword}
        onPress={() => navigation.navigate("FORGOTPASSWORD")}
      >
        <Text
          style={[
            styles.forgotPassword1,
            styles.passwordTypo,
            styles.passwordTypo1,
          ]}
        >
          Forgot Password?
        </Text>
      </Pressable>
      <BackButton
        onIconlyLightOutlineArrowLPress={() => navigation.goBack()}
        icon={require("../assets/iconlylightoutlinearrowleft2.png")}
      />
      <View style={styles.groupParent}>
        <View style={styles.groupContainer}>
          <GoogleAccess />
          <LinkedinAccess
            onGroupTouchableHighlightPress={() => {}}
            image7={{ uri: "linkedinlogo@3x.png" }}
          />
        </View>
        <View style={[styles.vectorParent, styles.orSignUpPosition]}>
          <Image
            style={[styles.groupChild, styles.groupLayout]}
            resizeMode="cover"
            source={require("../assets/vector-2.png")}
          />
          <Image
            style={[styles.groupItem, styles.groupLayout]}
            resizeMode="cover"
            source={require("../assets/vector-2.png")}
          />
          <Text style={[styles.orSignUp, styles.orSignUpPosition]}>
            Or sign up with
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signIn1Position: {
    left: 27,
    position: "absolute",
  },
  passwordTypo: {
    opacity: 0.7,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  passwordTypo1: {
    fontSize: FontSize.size_4xl,
    opacity: 0.7,
  },
  orSignUpPosition: {
    top: 0,
    position: "absolute",
  },
  groupLayout: {
    height: 1,
    width: 105,
    top: 10,
    position: "absolute",
  },
  doNotHave: {
    color: Color.lightThemeDark1,
  },
  signUp: {
    color: Color.midnightblue,
  },
  doNotHaveContainer: {
    top: 728,
    left: 68,
    width: 239,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_4xl,
    position: "absolute",
  },
  signInChild: {
    top: 801,
    left: 105,
    borderRadius: Border.br_lg,
    backgroundColor: Color.lightThemeDark1,
    width: 165,
    height: 4,
    position: "absolute",
  },
  signIn1: {
    top: 136,
    fontSize: FontSize.size_10xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemibold,
    width: 215,
    color: Color.lightThemeDark1,
    textAlign: "left",
  },
  username: {
    top: 216,
    width: 75,
    color: Color.lightThemeDark1,
  },
  password: {
    top: 303,
    width: 102,
    color: Color.lightThemeDark1,
  },
  wrapper: {
    top: 642,
    width: 321,
    height: 49,
  },
  enterYourCredentials: {
    top: 171,
    fontSize: FontSize.paragraphSemiBold_size,
    width: 202,
    color: Color.lightThemeDark1,
  },
  forgotPassword1: {
    width: 125,
    color: Color.midnightblue,
  },
  forgotPassword: {
    left: 224,
    top: 390,
    position: "absolute",
  },
  groupContainer: {
    top: 28,
    left: 18,
    width: 261,
    height: 23,
    position: "absolute",
  },
  groupChild: {
    left: 0,
  },
  groupItem: {
    left: 193,
  },
  orSignUp: {
    left: 108,
    fontSize: FontSize.size_2xl,
    fontFamily: FontFamily.outfitRegular,
    color: Color.dimgray_100,
    textAlign: "left",
  },
  vectorParent: {
    height: 15,
    left: 0,
    width: 298,
  },
  groupParent: {
    top: 564,
    left: 38,
    height: 51,
    width: 298,
    position: "absolute",
  },
  signIn: {
    backgroundColor: Color.lightThemeWhite1,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default SIGNIN;
