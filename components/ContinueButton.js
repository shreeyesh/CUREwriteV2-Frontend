import * as React from "react";
import { useMemo } from "react";
import {
  Pressable,
  StyleSheet,
  TouchableHighlight,
  View,
  Text,
} from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const ContinueButton = ({
  onContinueButtonPress,
  onRectangleTouchableHighligPress,
  continueButtonTop,
}) => {
  const continueButtonStyle = useMemo(() => {
    return {
      ...getStyleValue("top", continueButtonTop),
    };
  }, [continueButtonTop]);

  return (
    <Pressable
      style={[styles.continuebutton, styles.wrapperLayout, continueButtonStyle]}
      onPress={onContinueButtonPress}
    >
      <TouchableHighlight
        style={[styles.wrapper, styles.wrapperLayout]}
        underlayColor="#fff"
        activeOpacity={0.2}
        onPress={onRectangleTouchableHighligPress}
      >
        <View />
      </TouchableHighlight>
      <Text style={styles.continue}>Continue</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapperLayout: {
    height: 49,
    width: 321,
    position: "absolute",
  },
  wrapper: {
    top: 0,
    left: 0,
    borderRadius: Border.br_lg,
    backgroundColor: Color.midnightblue,
  },
  continue: {
    top: 11,
    left: 127,
    fontSize: FontSize.size_8xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemibold,
    color: Color.lightThemeWhite1,
    textAlign: "left",
    position: "absolute",
  },
  continuebutton: {
    top: 459,
    left: 27,
  },
});

export default ContinueButton;
