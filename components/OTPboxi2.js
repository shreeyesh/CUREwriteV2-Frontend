import * as React from "react";
import { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const OTPboxi2 = ({ rectangle15Left }) => {
  const rectangleViewStyle = useMemo(() => {
    return {
      ...getStyleValue("left", rectangle15Left),
    };
  }, [rectangle15Left]);

  return <View style={[styles.verificationChild, rectangleViewStyle]} />;
};

const styles = StyleSheet.create({
  verificationChild: {
    position: "absolute",
    top: 214,
    left: 110,
    borderRadius: Border.br_lg,
    backgroundColor: Color.midnightblue,
    width: 70,
    height: 60,
  },
});

export default OTPboxi2;
