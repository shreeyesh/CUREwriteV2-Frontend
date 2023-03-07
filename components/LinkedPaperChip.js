import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const LinkedPaperChip = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.option}
      onPress={() => navigation.navigate("ADDPOST")}
    >
      <View style={styles.separator} />
      <Text style={styles.label}>Linked Papers</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  separator: {
    height: "57.14%",
    width: "0.57%",
    top: "21.43%",
    right: "1.15%",
    bottom: "21.44%",
    left: "98.28%",
    borderRadius: Border.br_7xs,
    backgroundColor: Color.separatorColorLightWithTransparency1,
    display: "none",
    position: "absolute",
  },
  label: {
    marginTop: -8,
    top: "50%",
    left: 8,
    fontSize: FontSize.size_4xl,
    lineHeight: 16,
    fontFamily: FontFamily.readexProRegular,
    color: Color.slategray,
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
  },
});

export default LinkedPaperChip;
