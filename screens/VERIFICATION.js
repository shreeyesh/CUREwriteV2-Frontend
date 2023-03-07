import * as React from "react";
import { useCallback } from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  TextInput,
  TouchableHighlight,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import OTPbox from "../components/OTPbox";
import OTPboxi2 from "../components/OTPboxi2";
import NextButton from "../components/NextButton";
import BackButton from "../components/BackButton";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const VERIFICATION = () => {
  const navigation = useNavigation();

  const onDidntReceiveAnyClick = useCallback(() => {
    Alert.alert("OTP Resent", "");
  }, []);

  return (
    <View style={styles.verification}>
      <Text style={styles.alreadyHaveAnContainer}>
        <Text
          style={[styles.alreadyHaveAn, styles.textTypo]}
        >{`Already have an account? `}</Text>
        <Text style={styles.signUp}>Sign up</Text>
      </Text>
      <View style={styles.verificationChild} />
      <Text style={[styles.otpSent, styles.otpPosition]}>OTP sent</Text>
      <Text style={[styles.enterTheOtp, styles.otpPosition, styles.textTypo]}>
        Enter the OTP sent to you
      </Text>
      <Pressable
        style={[styles.didntReceiveAnyContainer, styles.otpPosition]}
        onPress={onDidntReceiveAnyClick}
      >
        <Text style={[styles.text, styles.textTypo]}>
          <Text
            style={styles.didntReceiveAny}
          >{`Didn’t receive any code? `}</Text>
          <Text style={styles.resendIn0100}>Resend in 01:00</Text>
        </Text>
      </Pressable>
      <View style={[styles.verificationItem, styles.otpPosition]} />
      <OTPbox
        rectangle14KeyboardType="number-pad"
        rectangle14TextAlign="right"
      />
      <TextInput
        style={[styles.textinput, styles.textinputPosition]}
        placeholder="0"
        keyboardType="default"
        placeholderTextColor="#fff"
        underlineColor="#FFFFFF"
        maxLength={1}
        clearTextOnFocus
      />
      <OTPboxi2 />
      <OTPboxi2 rectangle15Left={195} />
      <OTPboxi2 rectangle15Left={278} />
      <TextInput
        style={[styles.textinput1, styles.textinputPosition]}
        placeholder="0"
        keyboardType="default"
        placeholderTextColor="#fff"
        maxLength={1}
        clearTextOnFocus
      />
      <TextInput
        style={[styles.textinput2, styles.textinputPosition]}
        placeholder="9"
        keyboardType="default"
        placeholderTextColor="#fff"
        maxLength={1}
        clearTextOnFocus
      />
      <TextInput
        style={[styles.textinput3, styles.textinputPosition]}
        placeholder="1"
        keyboardType="default"
        placeholderTextColor="#fff"
        maxLength={1}
        clearTextOnFocus
      />
      <TouchableHighlight
        style={[styles.wrapper, styles.otpPosition]}
        underlayColor="#fff"
        activeOpacity={0.2}
        onPress={() => navigation.navigate("PERSONALINFORMATION1")}
      >
        <>
          <NextButton />
          <Text>Next</Text>
        </>
      </TouchableHighlight>
      <BackButton
        onIconlyLightOutlineArrowLPress={() => navigation.goBack()}
        icon={require("../assets/iconlylightoutlinearrowleft2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  otpPosition: {
    left: 27,
    position: "absolute",
  },
  textinputPosition: {
    top: 232,
    position: "absolute",
  },
  alreadyHaveAn: {
    color: Color.lightThemeDark1,
  },
  signUp: {
    fontFamily: FontFamily.poppinsRegular,
    color: Color.midnightblue,
  },
  alreadyHaveAnContainer: {
    top: 728,
    left: 69,
    fontSize: FontSize.size_4xl,
    width: 245,
    textAlign: "left",
    position: "absolute",
  },
  verificationChild: {
    top: 801,
    left: 105,
    backgroundColor: Color.lightThemeDark1,
    width: 165,
    height: 4,
    borderRadius: Border.br_lg,
    position: "absolute",
  },
  otpSent: {
    top: 136,
    fontSize: FontSize.size_10xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemibold,
    width: 93,
    color: Color.lightThemeDark1,
    textAlign: "left",
  },
  enterTheOtp: {
    top: 171,
    fontSize: FontSize.paragraphSemiBold_size,
    width: 202,
    opacity: 0.7,
    color: Color.lightThemeDark1,
    textAlign: "left",
  },
  didntReceiveAny: {
    color: Color.lightThemeDark1,
  },
  resendIn0100: {
    color: Color.red,
  },
  text: {
    fontSize: FontSize.size_2xl,
    width: 246,
    textAlign: "left",
  },
  didntReceiveAnyContainer: {
    top: 289,
  },
  verificationItem: {
    top: 214,
    backgroundColor: Color.silver_200,
    width: 70,
    height: 60,
    borderRadius: Border.br_lg,
  },
  textinput: {
    left: 56,
  },
  textinput1: {
    left: 140,
  },
  textinput2: {
    left: 225,
  },
  textinput3: {
    left: 308,
  },
  wrapper: {
    top: 642,
    width: 321,
    height: 49,
  },
  verification: {
    backgroundColor: Color.lightThemeWhite1,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default VERIFICATION;
