import * as React from "react";
import { StyleSheet, View } from "react-native";
import LinkedPaperChip from "../components/LinkedPaperChip";
import CUREwriteChip from "../components/CUREwriteChip";
import { Border, Color, Padding } from "../GlobalStyles";

const PublicationChips = () => {
  return (
    <View style={styles.segmentedpicker}>
      <LinkedPaperChip />
      <CUREwriteChip />
    </View>
  );
};

const styles = StyleSheet.create({
  segmentedpicker: {
    position: "absolute",
    top: 142,
    left: 20,
    borderRadius: Border.br_md,
    backgroundColor: Color.gray_1300,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    width: 335,
    height: 32,
    overflow: "hidden",
    flexDirection: "row",
    padding: Padding.p_3xs,
  },
});

export default PublicationChips;
