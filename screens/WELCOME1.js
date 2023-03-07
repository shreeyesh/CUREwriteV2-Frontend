import * as React from "react";
import { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Pressable,
  TouchableHighlight,
} from "react-native";
import { CheckBox as RNKCheckBox } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const WELCOME1 = () => {
  const [thumbchecked, setThumbchecked] = useState(true);
  const navigation = useNavigation();

  return (
    <View style={styles.welcome}>
      <View style={styles.welcomeChild} />
      <Image
        style={styles.welcomeItem}
        resizeMode="cover"
        source={require("../assets/ellipse-14.png")}
      />
      <Text style={styles.welcome1}>Welcome</Text>
      <TouchableHighlight
        style={styles.wrapper}
        underlayColor="#fff"
        activeOpacity={0.2}
        onPress={() => navigation.navigate("SIGNIN")}
      >
        <>
          <View />
          <Text>Continue</Text>
        </>
      </TouchableHighlight>
      <View style={styles.item0}>
        <View style={[styles.radioWrapper, styles.thumbFlexBox]}>
          <View style={[styles.controller, styles.thumbFlexBox]}>
            <RNKCheckBox
              style={[styles.thumb, styles.thumbFlexBox]}
              status="basic"
              checked={thumbchecked}
              onChange={() => setThumbchecked(!thumbchecked)}
            />
          </View>
          <Text style={[styles.label, styles.ml8]}>
            I have read and agree to the terms of service listed below.
          </Text>
        </View>
      </View>
      <Image
        style={styles.horizontalLogo1Icon}
        resizeMode="cover"
        source={require("../assets/horizontallogo-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ml8: {
    marginLeft: 8,
  },
  thumbFlexBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeChild: {
    top: 801,
    left: 105,
    borderRadius: Border.br_lg,
    backgroundColor: Color.lightThemeDark1,
    width: 165,
    height: 4,
    position: "absolute",
  },
  welcomeItem: {
    top: 114,
    left: 96,
    width: 183,
    height: 183,
    position: "absolute",
  },
  welcome1: {
    top: 376,
    left: 139,
    fontSize: FontSize.size_10xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemibold,
    color: Color.lightThemeDark1,
    textAlign: "left",
    position: "absolute",
  },
  wrapper: {
    top: 514,
    left: 27,
    width: 321,
    height: 49,
    position: "absolute",
  },
  thumb: {
    borderRadius: Border.br_2xs,
    borderStyle: "solid",
    borderColor: "#616161",
    borderWidth: 1,
  },
  controller: {
    width: 24,
    height: 24,
  },
  label: {
    fontSize: FontSize.size_base,
    lineHeight: 15,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.gray700,
    textAlign: "left",
  },
  radioWrapper: {
    alignSelf: "stretch",
    borderRadius: Border.br_sm,
    padding: 8,
    overflow: "hidden",
  },
  item0: {
    top: 440,
    left: 20,
    width: 335,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
  },
  horizontalLogo1Icon: {
    top: 166,
    left: 119,
    width: 148,
    height: 83,
    position: "absolute",
  },
  welcome: {
    backgroundColor: Color.lightThemeWhite1,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default WELCOME1;
