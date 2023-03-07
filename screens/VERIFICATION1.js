import * as React from "react";
import { useCallback } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TextInput,
  TouchableHighlight,
  Image,
  Alert,
} from "react-native";
import OTPbox from "../components/OTPbox";
import OTPboxi2 from "../components/OTPboxi2";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const VERIFICATION1 = () => {
  const navigation = useNavigation();

  const onDidntReceiveAnyClick = useCallback(() => {
    Alert.alert("OTP Resent", "");
  }, []);

  return (
    <View style={[styles.verification, styles.iconLayout]}>
      <View style={[styles.verificationChild, styles.verificationLayout]} />
      <Text style={styles.otpSent}>OTP sent</Text>
      <Text style={[styles.enterTheOtp, styles.textTypo]}>
        Enter the OTP sent to you
      </Text>
      <Pressable
        style={styles.didntReceiveAnyContainer}
        onPress={onDidntReceiveAnyClick}
      >
        <Text style={[styles.text, styles.textTypo]}>
          <Text
            style={styles.didntReceiveAny}
          >{`Didn’t receive any code? `}</Text>
          <Text style={styles.resendIn0100}>Resend in 01:00</Text>
        </Text>
      </Pressable>
      <View style={[styles.verificationItem, styles.verificationLayout]} />
      <OTPbox
        rectangle14KeyboardType="number-pad"
        rectangle14TextAlign="right"
      />
      <TextInput
        style={[styles.textinput, styles.textinputPosition]}
        placeholder="0"
        keyboardType="number-pad"
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
        keyboardType="number-pad"
        placeholderTextColor="#fff"
        maxLength={1}
        clearTextOnFocus
      />
      <TextInput
        style={[styles.textinput2, styles.textinputPosition]}
        placeholder="9"
        keyboardType="number-pad"
        placeholderTextColor="#fff"
        maxLength={1}
        clearTextOnFocus
      />
      <TextInput
        style={[styles.textinput3, styles.textinputPosition]}
        placeholder="1"
        keyboardType="number-pad"
        placeholderTextColor="#fff"
        maxLength={1}
        clearTextOnFocus
      />
      <View
        style={[styles.alreadyHaveAnAccountSignParent, styles.wrapperLayout]}
      >
        <Pressable
          style={styles.alreadyHaveAnContainer}
          onPress={() => navigation.navigate("SIGNIN")}
        >
          <Text style={styles.text1}>
            <Text
              style={[styles.alreadyHaveAn, styles.textTypo]}
            >{`Already have an account? `}</Text>
            <Text style={styles.signIn}>Sign In</Text>
          </Text>
        </Pressable>
        <TouchableHighlight
          style={[styles.wrapper, styles.wrapperLayout]}
          underlayColor="#fff"
          activeOpacity={0.2}
          onPress={() => navigation.navigate("PERSONALINFORMATION1")}
        >
          <>
            <View />
            <Text>Next</Text>
          </>
        </TouchableHighlight>
      </View>
      <Pressable
        style={styles.iconlylightOutlinearrowL}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/iconlylightoutlinearrowleft2.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  verificationLayout: {
    borderRadius: Border.br_lg,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  textinputPosition: {
    top: 232,
    position: "absolute",
  },
  wrapperLayout: {
    width: 321,
    position: "absolute",
  },
  verificationChild: {
    top: 801,
    left: 105,
    backgroundColor: Color.lightThemeDark1,
    width: 165,
    height: 4,
  },
  otpSent: {
    top: 136,
    fontSize: FontSize.size_10xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemibold,
    width: 93,
    textAlign: "left",
    color: Color.lightThemeDark1,
    left: 27,
    position: "absolute",
  },
  enterTheOtp: {
    top: 171,
    fontSize: FontSize.paragraphSemiBold_size,
    width: 202,
    opacity: 0.7,
    textAlign: "left",
    color: Color.lightThemeDark1,
    left: 27,
    position: "absolute",
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
    left: 27,
    position: "absolute",
  },
  verificationItem: {
    top: 214,
    backgroundColor: Color.silver_200,
    width: 70,
    height: 60,
    left: 27,
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
    color: "",
  },
  alreadyHaveAn: {
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
  alreadyHaveAnContainer: {
    left: 42,
    top: 86,
    position: "absolute",
  },
  wrapper: {
    top: 0,
    left: 0,
    height: 49,
  },
  alreadyHaveAnAccountSignParent: {
    top: 642,
    height: 107,
    left: 27,
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  iconlylightOutlinearrowL: {
    left: "7.2%",
    top: "8.99%",
    right: "90.13%",
    bottom: "88.76%",
    width: "2.67%",
    height: "2.25%",
    position: "absolute",
  },
  verification: {
    backgroundColor: Color.lightThemeWhite1,
    flex: 1,
    height: 812,
  },
});

export default VERIFICATION1;
