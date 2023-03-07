import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const CUREwriteChip = () => {
  return (
    <View style={styles.option}>
      <View style={styles.separator} />
      <Text style={styles.label}>CUREwrite</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  separator: {
    height: "55.17%",
    width: "0.57%",
    top: "20.69%",
    right: "1.74%",
    bottom: "24.14%",
    left: "97.69%",
    borderRadius: Border.br_7xs,
    backgroundColor: Color.slategray,
    display: "none",
    position: "absolute",
  },
  label: {
    marginTop: -8.5,
    top: "50%",
    left: 8,
    fontSize: FontSize.size_4xl,
    lineHeight: 16,
    fontWeight: "700",
    fontFamily: FontFamily.readexProBold,
    color: Color.lightThemeWhite1,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 16,
    position: "absolute",
  },
  option: {
    alignSelf: "stretch",
    flex: 1,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.midnightblue,
    shadowColor: "rgba(0, 0, 0, 0.12)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.04)",
    borderWidth: 0.5,
  },
});

export default CUREwriteChip;
