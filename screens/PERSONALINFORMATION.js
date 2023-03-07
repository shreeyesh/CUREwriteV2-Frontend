import * as React from "react";
import {
  Text,
  StyleSheet,
  Pressable,
  View,
  TouchableHighlight,
  TextInput,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import DoneBox from "../components/DoneBox";
import NameBox from "../components/NameBox";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const PERSONALINFORMATION = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.personalInformation, styles.iconLayout]}>
      <Pressable
        style={styles.alreadyHaveAnContainer}
        onPress={() => navigation.navigate("SIGNIN")}
      >
        <Text style={styles.text}>
          <Text
            style={styles.alreadyHaveAn}
          >{`Already have an account? `}</Text>
          <Text style={styles.signIn}>Sign In</Text>
        </Text>
      </Pressable>
      <View style={styles.personalInformationChild} />
      <Text style={styles.selectAUsername}>Select a Username</Text>
      <Text
        style={[styles.username, styles.passwordTypo, styles.passwordTypo1]}
      >
        Username
      </Text>
      <Text
        style={[styles.password, styles.passwordTypo, styles.passwordTypo1]}
      >
        Password
      </Text>
      <Text
        style={[
          styles.confirmPassword,
          styles.passwordTypo,
          styles.passwordTypo1,
        ]}
      >
        Confirm Password
      </Text>
      <TouchableHighlight
        style={styles.wrapper}
        underlayColor="#fff"
        activeOpacity={0.2}
        onPress={() => navigation.navigate("WELCOME1")}
      >
        <>
          <DoneBox />
          <Text>Done</Text>
        </>
      </TouchableHighlight>
      <NameBox />
      <TextInput
        style={[styles.personalInformationItem, styles.personalLayout]}
        keyboardType="default"
        autoCapitalize="none"
        secureTextEntry
        textAlign="center"
      />
      <TextInput
        style={[styles.personalInformationInner, styles.personalLayout]}
        keyboardType="default"
        secureTextEntry
      />
      <Text style={[styles.helpSecureYour, styles.passwordTypo]}>
        Help secure your account
      </Text>
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
  passwordTypo: {
    opacity: 0.7,
    left: 27,
    color: Color.lightThemeDark1,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  passwordTypo1: {
    fontSize: FontSize.size_4xl,
    opacity: 0.7,
  },
  personalLayout: {
    backgroundColor: Color.whitesmoke_200,
    height: 49,
    width: 321,
    left: 27,
    borderRadius: Border.br_lg,
    position: "absolute",
  },
  alreadyHaveAn: {
    color: Color.lightThemeDark1,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  signIn: {
    fontFamily: FontFamily.poppinsRegular,
    color: Color.midnightblue,
  },
  text: {
    width: 239,
    textAlign: "left",
    fontSize: FontSize.size_4xl,
  },
  alreadyHaveAnContainer: {
    left: 69,
    top: 728,
    position: "absolute",
  },
  personalInformationChild: {
    top: 801,
    left: 105,
    backgroundColor: Color.lightThemeDark1,
    width: 165,
    height: 4,
    borderRadius: Border.br_lg,
    position: "absolute",
  },
  selectAUsername: {
    top: 136,
    fontSize: FontSize.size_10xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemibold,
    width: 215,
    left: 27,
    color: Color.lightThemeDark1,
    textAlign: "left",
    position: "absolute",
  },
  username: {
    top: 216,
    width: 75,
  },
  password: {
    top: 303,
    width: 102,
  },
  confirmPassword: {
    top: 390,
    width: 130,
  },
  wrapper: {
    top: 642,
    height: 49,
    width: 321,
    left: 27,
    position: "absolute",
  },
  personalInformationItem: {
    top: 329,
  },
  personalInformationInner: {
    top: 416,
  },
  helpSecureYour: {
    top: 171,
    fontSize: FontSize.paragraphSemiBold_size,
    width: 207,
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
  personalInformation: {
    backgroundColor: Color.lightThemeWhite1,
    flex: 1,
    height: 812,
  },
});

export default PERSONALINFORMATION;
