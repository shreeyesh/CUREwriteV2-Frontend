import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import NameBox from "../components/NameBox";
import NumberBox from "../components/NumberBox";
import PasswordBox from "../components/PasswordBox";
import BackButton from "../components/BackButton";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const FORGOTPASSWORD = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.forgotPassword}>
      <View style={styles.forgotPasswordChild} />
      <Text style={[styles.forgotPassword1, styles.doneTypo]}>
        Forgot Password
      </Text>
      <Text style={[styles.username, styles.emailTypo, styles.emailTypo1]}>
        Username
      </Text>
      <Text style={[styles.phoneNumber, styles.emailTypo, styles.emailTypo1]}>
        Phone Number
      </Text>
      <Text style={[styles.email, styles.emailTypo, styles.emailTypo1]}>
        Email
      </Text>
      <Text
        style={[
          styles.lastRememberedPassword,
          styles.emailTypo,
          styles.emailTypo1,
        ]}
      >
        Last Remembered password
      </Text>
      <Pressable style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.done, styles.doneTypo]}>Done</Text>
      </Pressable>
      <NameBox />
      <NumberBox />
      <NameBox
        rectangle13Top={329}
        rectangle13BorderStyle="unset"
        rectangle13BorderColor="unset"
      />
      <PasswordBox
        rectangle13Top={503}
        rectangle13BorderStyle="unset"
        rectangle13BorderColor="unset"
      />
      <Text style={[styles.letsHelpRecover, styles.emailTypo]}>
        Let’s help recover your account
      </Text>
      <BackButton
        onIconlyLightOutlineArrowLPress={() => navigation.goBack()}
        icon={require("../assets/iconlylightoutlinearrowleft2.png")}
      />
      <Text style={styles.doNotHaveContainer}>
        <Text style={styles.doNotHave}>{`Do not have an Account? `}</Text>
        <Text style={styles.signUp}>Sign up</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  doneTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    position: "absolute",
  },
  emailTypo: {
    opacity: 0.7,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.lightThemeDark1,
    left: 27,
    position: "absolute",
  },
  emailTypo1: {
    fontSize: FontSize.size_4xl,
    opacity: 0.7,
  },
  groupChildLayout: {
    height: 49,
    width: 321,
    position: "absolute",
  },
  forgotPasswordChild: {
    top: 801,
    left: 105,
    backgroundColor: Color.lightThemeDark1,
    width: 165,
    height: 4,
    borderRadius: Border.br_lg,
    position: "absolute",
  },
  forgotPassword1: {
    top: 136,
    fontSize: FontSize.size_10xl,
    width: 215,
    color: Color.lightThemeDark1,
    left: 27,
  },
  username: {
    top: 216,
    width: 75,
  },
  phoneNumber: {
    top: 390,
    width: 109,
  },
  email: {
    top: 303,
    width: 47,
  },
  lastRememberedPassword: {
    top: 477,
    width: 206,
  },
  groupChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.midnightblue,
    borderRadius: Border.br_lg,
  },
  done: {
    top: 11,
    left: 137,
    fontSize: FontSize.size_8xl,
    color: Color.lightThemeWhite1,
  },
  rectangleParent: {
    top: 642,
    left: 27,
  },
  letsHelpRecover: {
    top: 171,
    fontSize: FontSize.paragraphSemiBold_size,
    width: 255,
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
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_4xl,
    textAlign: "left",
    position: "absolute",
  },
  forgotPassword: {
    backgroundColor: Color.lightThemeWhite1,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default FORGOTPASSWORD;
