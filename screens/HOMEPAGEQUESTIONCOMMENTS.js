import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AnswerContainer from "../components/AnswerContainer";
import Header from "../components/Header";
import BottomTabs from "../components/BottomTabs";
import BackButton from "../components/BackButton";
import QnACard from "../components/QnACard";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const HOMEPAGEQUESTIONCOMMENTS = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homepageQuestionComments}>
      <AnswerContainer
        answerInput="Type your answer!"
        group870Top={682}
        group870Left={27}
        frameWidth={151}
        frameHeight={22}
      />
      <View style={[styles.ellipseParent, styles.groupInnerPosition]}>
        <Image
          style={styles.groupChild}
          resizeMode="cover"
          source={require("../assets/ellipse-2.png")}
        />
        <Image
          style={styles.groupItem}
          resizeMode="cover"
          source={require("../assets/group-149.png")}
        />
        <View style={[styles.groupInner, styles.groupInnerPosition]} />
        <Header
          onFramePress={() => {}}
          onIconlyBrokenChatPress={() => {}}
          icon={require("../assets/frame.png")}
        />
        <View style={[styles.rectangleParent, styles.rectangleLayout]}>
          <View style={[styles.rectangleView, styles.rectangleLayout]} />
          <BottomTabs
            icon={{ uri: "iconlybrokenprofile@3x.png" }}
            onVectorPress={() => {}}
            onIconlyBrokenPlusPress={() => navigation.navigate("ADDPOST")}
            onIconlyLightOutlineGraphPress={() =>
              navigation.navigate("LEADERBOARDNATIONAL")
            }
            onGroupPressablePress={() => navigation.navigate("NOTIFICATION")}
            icon1={{ uri: "group-830@3x.png" }}
          />
        </View>
      </View>
      <BackButton
        onIconlyLightOutlineArrowLPress={() => navigation.goBack()}
        iconlyLightOutlineArrowLeTop="12.44%"
        iconlyLightOutlineArrowLeBottom="85.32%"
        icon={require("../assets/iconlylightoutlinearrowleft2.png")}
      />
      <Text style={styles.answers}>Answers</Text>
      <QnACard commneterI4="Green Hospitals" />
    </View>
  );
};

const styles = StyleSheet.create({
  groupInnerPosition: {
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  rectangleLayout: {
    height: 70,
    width: 375,
    left: 0,
    position: "absolute",
  },
  groupChild: {
    top: 48,
    left: 20,
    width: 37,
    height: 37,
    position: "absolute",
  },
  groupItem: {
    height: "2.08%",
    width: "4.64%",
    top: "7.07%",
    right: "25.74%",
    bottom: "90.84%",
    left: "69.62%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupInner: {
    height: 96,
    opacity: 0.99,
    backgroundColor: Color.lightThemeWhite1,
  },
  rectangleView: {
    backgroundColor: Color.white_100,
    opacity: 0.9,
    top: 0,
    height: 70,
  },
  rectangleParent: {
    top: 742,
  },
  ellipseParent: {
    height: 812,
  },
  answers: {
    top: 97,
    left: 141,
    fontSize: FontSize.size_8xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemibold,
    color: Color.lightThemeDark1,
    textAlign: "center",
    width: 94,
    position: "absolute",
  },
  homepageQuestionComments: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 812,
    backgroundColor: Color.lightThemeWhite1,
  },
});

export default HOMEPAGEQUESTIONCOMMENTS;
