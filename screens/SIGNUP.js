import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableHighlight,
  Image,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const SIGNUP = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signUp}>
      <View style={styles.signUpChild} />
      <Text style={[styles.phone, styles.phoneFlexBox]}>Phone</Text>
      <Text
        style={[
          styles.enterYourPhone,
          styles.alreadyHaveAnTypo,
          styles.phoneFlexBox,
        ]}
      >
        Enter your phone number
      </Text>
      <View
        style={[styles.alreadyHaveAnAccountSignParent, styles.signPosition]}
      >
        <Pressable
          style={styles.alreadyHaveAnContainer}
          onPress={() => navigation.navigate("SIGNIN")}
        >
          <Text style={styles.text}>
            <Text
              style={styles.alreadyHaveAnTypo}
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
      <View style={[styles.rectangleParent, styles.wrapperLayout]}>
        <Image
          style={[styles.groupChild, styles.wrapperLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-4.png")}
        />
        <TextInput
          style={[styles.textinput, styles.textinputPosition]}
          placeholder="+91"
          keyboardType="default"
          placeholderTextColor="#000"
        />
        <TextInput
          style={[styles.textinput1, styles.textinputPosition]}
          keyboardType="number-pad"
          placeholderTextColor="#000"
        />
        <Image
          style={[styles.groupItem, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/flag.png")}
        />
      </View>
      <Image
        style={[styles.signUpItem, styles.signPosition]}
        resizeMode="cover"
        source={require("../assets/countries.png")}
      />
      <View style={[styles.groupParent, styles.parentLayout1]}>
        <View style={[styles.googleParent, styles.parentLayout]}>
          <Text style={[styles.google, styles.googleTypo]}>Google</Text>
          <Image
            style={[styles.googleLogoIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/google-logo.png")}
          />
          <View style={[styles.linkedinParent, styles.parentLayout]}>
            <Text style={[styles.linkedin, styles.googleTypo]}>LinkedIn</Text>
            <Image
              style={styles.iconPosition}
              resizeMode="cover"
              source={require("../assets/image-7.png")}
            />
          </View>
        </View>
        <View style={[styles.vectorParent, styles.parentLayout1]}>
          <Image
            style={[styles.groupInner, styles.groupInnerLayout]}
            resizeMode="cover"
            source={require("../assets/vector-2.png")}
          />
          <Image
            style={[styles.vectorIcon, styles.groupInnerLayout]}
            resizeMode="cover"
            source={require("../assets/vector-2.png")}
          />
          <Text style={[styles.orSignUp, styles.phoneFlexBox]}>
            Or sign up with
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  phoneFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  alreadyHaveAnTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.lightThemeDark1,
  },
  signPosition: {
    width: 321,
    left: 27,
    position: "absolute",
  },
  wrapperLayout: {
    height: 49,
    width: 321,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  textinputPosition: {
    opacity: 0.5,
    top: 13,
    position: "absolute",
  },
  parentLayout1: {
    width: 298,
    position: "absolute",
  },
  parentLayout: {
    height: 23,
    position: "absolute",
  },
  googleTypo: {
    top: 2,
    fontSize: FontSize.size_4xl,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.lightThemeDark1,
    position: "absolute",
  },
  iconPosition: {
    height: 22,
    width: 22,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupInnerLayout: {
    height: 1,
    width: 105,
    top: 10,
    position: "absolute",
  },
  signUpChild: {
    top: 801,
    left: 105,
    backgroundColor: Color.lightThemeDark1,
    width: 165,
    height: 4,
    borderRadius: Border.br_lg,
    position: "absolute",
  },
  phone: {
    top: 136,
    fontSize: FontSize.size_10xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemibold,
    width: 65,
    color: Color.lightThemeDark1,
    textAlign: "left",
    left: 27,
  },
  enterYourPhone: {
    top: 171,
    fontSize: FontSize.paragraphSemiBold_size,
    width: 209,
    opacity: 0.7,
    left: 27,
  },
  signIn: {
    fontFamily: FontFamily.poppinsRegular,
    color: Color.midnightblue,
  },
  text: {
    width: 239,
    fontSize: FontSize.size_4xl,
    textAlign: "left",
  },
  alreadyHaveAnContainer: {
    left: 42,
    top: 86,
    position: "absolute",
  },
  wrapper: {
    left: 0,
    top: 0,
  },
  alreadyHaveAnAccountSignParent: {
    top: 642,
    height: 107,
  },
  icon: {
    height: "100%",
    width: "100%",
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
  groupChild: {
    left: 0,
    top: 0,
    borderRadius: Border.br_lg,
  },
  textinput: {
    left: 51,
  },
  textinput1: {
    left: 86,
  },
  groupItem: {
    height: "37.88%",
    width: "8.41%",
    top: "29.78%",
    right: "87.85%",
    bottom: "32.33%",
    left: "3.74%",
    opacity: 0.9,
    position: "absolute",
  },
  rectangleParent: {
    top: 210,
    left: 27,
  },
  signUpItem: {
    top: 313,
    height: 184,
  },
  google: {
    left: 30,
  },
  googleLogoIcon: {
    overflow: "hidden",
  },
  linkedin: {
    left: 29,
  },
  linkedinParent: {
    left: 174,
    width: 87,
    top: 0,
  },
  googleParent: {
    top: 28,
    left: 18,
    width: 261,
  },
  groupInner: {
    left: 0,
  },
  vectorIcon: {
    left: 193,
  },
  orSignUp: {
    left: 108,
    fontSize: FontSize.size_2xl,
    fontFamily: FontFamily.outfitRegular,
    color: Color.dimgray_100,
    top: 0,
  },
  vectorParent: {
    height: 15,
    left: 0,
    top: 0,
  },
  groupParent: {
    top: 564,
    left: 38,
    height: 51,
  },
  signUp: {
    backgroundColor: Color.lightThemeWhite1,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default SIGNUP;
