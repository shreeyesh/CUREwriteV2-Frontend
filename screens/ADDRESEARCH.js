import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import BottomTabsADD from "../components/BottomTabsADD";
import TopTabsResearch from "../components/TopTabsResearch";
import PostCard from "../components/PostCard";
import { Color } from "../GlobalStyles";

const ADDRESEARCH = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.addResearch}>
      <View style={styles.groupInnerPosition}>
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
      </View>
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={[styles.rectangleView, styles.rectangleLayout]} />
        <BottomTabsADD
          bottomTabsADDHeight="40.27%"
          bottomTabsADDTop="31.6%"
          bottomTabsADDBottom="28.13%"
        />
        <Image
          style={styles.ellipseIcon}
          resizeMode="cover"
          source={require("../assets/alert.png")}
        />
      </View>
      <TopTabsResearch
        onOptionPress={() => navigation.navigate("HOMEPAGEPOST")}
        labelAdjustsFontSizeToFit
      />
      <PostCard
        abstractText="Type  abstract "
        titleText="Type title"
        researchTypeText="Research type"
        propWidth={198}
        propWidth1={150}
        onUploadButtonPress={() => navigation.navigate("POSTSUCCESS")}
        onRectangleTouchableHighligPress={() =>
          navigation.navigate("PAPERSUBMITTED")
        }
      />
      <Image
        style={styles.frameIcon}
        resizeMode="cover"
        source={require("../assets/frame8.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupInnerPosition: {
    height: 96,
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
    height: "17.61%",
    width: "4.64%",
    top: "59.79%",
    right: "25.74%",
    bottom: "22.6%",
    left: "69.62%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupInner: {
    opacity: 0.99,
    backgroundColor: Color.lightThemeWhite1,
  },
  rectangleView: {
    backgroundColor: Color.white_100,
    opacity: 0.9,
    top: 0,
    height: 70,
  },
  ellipseIcon: {
    top: 21,
    left: 268,
    width: 7,
    height: 6,
    position: "absolute",
  },
  rectangleParent: {
    top: 743,
  },
  frameIcon: {
    top: 299,
    left: 316,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  addResearch: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.lightThemeWhite1,
  },
});

export default ADDRESEARCH;
