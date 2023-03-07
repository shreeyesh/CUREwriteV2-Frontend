import * as React from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PostTab from "../components/PostTab";
import QuestionTab from "../components/QuestionTab";
import ResearchTabExt from "../components/ResearchTabExt";
import LearnTab from "../components/LearnTab";
import { Border, Color, Padding } from "../GlobalStyles";

const TopTabsQuestion = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.segmentedpicker}>
      <PostTab 
        onOptionPress={() => navigation.navigate("HOMEPAGERESEARCH")}
        />
      <QuestionTab
        onOptionPress={() => {}}
        optionBorderRadius={7}
        optionBackgroundColor="#02256d"
        optionElevation={8}
        optionBorderStyle="solid"
        optionBorderColor="rgba(0, 0, 0, 0.04)"
        optionBorderWidth={0.5}
        separatorHeight="55.17%"
        separatorTop="20.69%"
        separatorRight="2.33%"
        separatorBottom="24.14%"
        separatorLeft="97.1%"
        labelMarginTop={-8.5}
        labelWidth="calc(100% - 16.75px)"
        labelColor="#fff"
        labelFontWeight="700"
      />
      <ResearchTabExt
        onOptionPress={() => navigation.navigate("HOMEPAGERESEARCH")}
      />
      <LearnTab onOptionPress={() => navigation.navigate("HOMEPAGELEARN")} />
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

export default TopTabsQuestion;
