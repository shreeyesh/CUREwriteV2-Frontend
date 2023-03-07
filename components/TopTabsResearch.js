import * as React from "react";
import { useMemo } from "react";
import {
  Pressable,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import QuestionTabExt from "../components/QuestionTabExt";
import ResearchTabExt from "../components/ResearchTabExt";
import LearnTab from "../components/LearnTab";
import { Border, Color, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const TopTabsResearch = ({
  onOptionPress,
  optionBorderRadius,
  optionElevation,
  optionBorderStyle,
  optionBorderColor,
  optionBorderWidth,
  separatorHeight,
  separatorTop,
  separatorRight,
  separatorBottom,
  separatorLeft,
  labelMarginTop,
  labelWidth,
  labelColor,
  labelFontWeight,
  labelAdjustsFontSizeToFit,
  optionBackgroundColor,
}) => {
  const option1Style = useMemo(() => {
    return {
      ...getStyleValue("borderRadius", optionBorderRadius),
      ...getStyleValue("elevation", optionElevation),
      ...getStyleValue("borderStyle", optionBorderStyle),
      ...getStyleValue("borderColor", optionBorderColor),
      ...getStyleValue("borderWidth", optionBorderWidth),
      ...getStyleValue("backgroundColor", optionBackgroundColor),
    };
  }, [
    optionBorderRadius,
    optionElevation,
    optionBorderStyle,
    optionBorderColor,
    optionBorderWidth,
    optionBackgroundColor,
  ]);

  const separatorStyle = useMemo(() => {
    return {
      ...getStyleValue("height", separatorHeight),
      ...getStyleValue("top", separatorTop),
      ...getStyleValue("right", separatorRight),
      ...getStyleValue("bottom", separatorBottom),
      ...getStyleValue("left", separatorLeft),
    };
  }, [
    separatorHeight,
    separatorTop,
    separatorRight,
    separatorBottom,
    separatorLeft,
  ]);

  const label1Style = useMemo(() => {
    return {
      ...getStyleValue("marginTop", labelMarginTop),
      ...getStyleValue("width", labelWidth),
      ...getStyleValue("color", labelColor),
      ...getStyleValue("fontWeight", labelFontWeight),
    };
  }, [labelMarginTop, labelWidth, labelColor, labelFontWeight]);

  const navigation = useNavigation();

  return (
    <View style={styles.segmentedpicker}>
      <TouchableHighlight
        style={[styles.option, option1Style]}
        underlayColor="#fff"
        activeOpacity={0.2}
        onPress={onOptionPress}
      >
        <>
          <View />
          <Text>Post</Text>
        </>
      </TouchableHighlight>
      <QuestionTabExt
        onOptionPress={() => navigation.navigate("HOMEPAGEQUESTION")}
        labelAdjustsFontSizeToFit={labelAdjustsFontSizeToFit}
      />
      <ResearchTabExt
        onOptionPress={() => {}}
        optionBorderStyle="solid"
        optionBorderColor="rgba(0, 0, 0, 0.04)"
        optionBorderWidth={0.5}
        optionBorderRadius={7}
      />
      <LearnTab onOptionPress={() => {}} />
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

export default TopTabsResearch;
