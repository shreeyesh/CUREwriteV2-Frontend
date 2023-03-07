import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableHighlight,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import ConfirmButton from "../components/ConfirmButton";
import PasswordBox from "../components/PasswordBox";
import BackButton from "../components/BackButton";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const PASSWORDRESET = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.passwordReset}>
      <View style={styles.passwordResetChild} />
      <Text style={styles.pickANew}>Pick a new Password</Text>
      <Text style={[styles.newPassword, styles.newTypo, styles.newTypo1]}>
        New Password
      </Text>
      <Text
        style={[styles.confirmNewPassword, styles.newTypo, styles.newTypo1]}
      >
        Confirm new Password
      </Text>
      <TouchableHighlight
        style={styles.wrapper}
        underlayColor="#fff"
        activeOpacity={0.2}
        onPress={() => navigation.navigate("WELCOME")}
      >
        <>
          <ConfirmButton />
          <Text>Done</Text>
        </>
      </TouchableHighlight>
      <PasswordBox />
      <PasswordBox
        rectangle13Top={329}
        rectangle13BorderStyle="unset"
        rectangle13BorderColor="unset"
      />
      <Text style={[styles.helpSecureYour, styles.newTypo]}>
        Help secure your account
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
  newTypo: {
    opacity: 0.7,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.lightThemeDark1,
    left: 27,
    position: "absolute",
  },
  newTypo1: {
    fontSize: FontSize.size_4xl,
    opacity: 0.7,
  },
  passwordResetChild: {
    top: 801,
    left: 105,
    borderRadius: Border.br_lg,
    backgroundColor: Color.lightThemeDark1,
    width: 165,
    height: 4,
    position: "absolute",
  },
  pickANew: {
    top: 136,
    fontSize: FontSize.size_10xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemibold,
    width: 215,
    textAlign: "left",
    color: Color.lightThemeDark1,
    left: 27,
    position: "absolute",
  },
  newPassword: {
    top: 216,
    width: 108,
  },
  confirmNewPassword: {
    top: 303,
    width: 164,
  },
  wrapper: {
    top: 642,
    width: 321,
    height: 49,
    left: 27,
    position: "absolute",
  },
  helpSecureYour: {
    top: 171,
    fontSize: FontSize.paragraphSemiBold_size,
    width: 211,
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
  passwordReset: {
    backgroundColor: Color.lightThemeWhite1,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default PASSWORDRESET;
