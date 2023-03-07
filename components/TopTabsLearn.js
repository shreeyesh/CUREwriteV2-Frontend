import * as React from "react";
import {
  Pressable,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import QuestionTab from "../components/QuestionTab";
import ResearchTab from "../components/ResearchTab";
import PostTab from "../components/PostTab";
import { Border, Color, Padding } from "../GlobalStyles";

const TopTabsLearn = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.segmentedpicker}>
      <TouchableHighlight
        style={styles.option}
        underlayColor="#fff"
        activeOpacity={0.2}
        onPress={() => navigation.navigate("HOMEPAGEPOST")}
      >
        <>
          <View />
          <Text>Post</Text>
        </>
      </TouchableHighlight>
      <QuestionTab
        onOptionPress={() => navigation.navigate("HOMEPAGEQUESTION")}
      />
      <ResearchTab
        onOptionPress={() => navigation.navigate("HOMEPAGERESEARCH")}
      />
      <PostTab
        optionElevation={8}
        optionBorderStyle="solid"
        optionBorderColor="rgba(0, 0, 0, 0.04)"
        optionBorderWidth={0.5}
        separatorHeight="55.17%"
        separatorTop="20.69%"
        separatorRight="2.33%"
        separatorBottom="24.14%"
        separatorLeft="97.1%"
        label="Learn"
        labelMarginTop={-8.5}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  option: {
    alignSelf: "stretch",
    flex: 1,
  },
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

export default TopTabsLearn;
