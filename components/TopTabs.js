import * as React from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PostTab from "../components/PostTab";
import QuestionTab from "../components/QuestionTab";
import ResearchTab from "../components/ResearchTab";
import LearnTab from "../components/LearnTab";
import { Border, Color, Padding } from "../GlobalStyles";

const TopTabs = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.segmentedpicker}>
      <PostTab label="Post" />
      <QuestionTab onOptionPress={() => navigation.navigate("ADDQUESTION")} />
      <ResearchTab onOptionPress={() => navigation.navigate("ADDRESEARCH")} />
      <LearnTab onOptionPress={() => navigation.navigate("ADDLEARN")} />
    </View>
  );
};

const styles = StyleSheet.create({
  segmentedpicker: {
    position: "absolute",
    top: 105,
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

export default TopTabs;
