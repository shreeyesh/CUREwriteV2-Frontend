import * as React from "react";
import {
  Image,
  StyleSheet,
  View,
  ImageBackground,
  TextInput,
  Pressable,
  TouchableHighlight,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import BottomTabsADD from "../components/BottomTabsADD";
import TopTabsQuestion from "../components/TopTabsQuestion";
import PostCard from "../components/PostCard";
import { Color, Border } from "../GlobalStyles";

const ADDQUESTION = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.addQuestion}>
      <View style={styles.groupInnerPosition}>
        <Image
          style={styles.groupChild}
          resizeMode="cover"
          source={require("../assets/ellipse-2.png")}
        />
        <Image
          style={[styles.groupItem, styles.chatIconLayout]}
          resizeMode="cover"
          source={require("../assets/group-149.png")}
        />
        <View style={[styles.groupInner, styles.groupInnerPosition]} />
        <View style={[styles.header, styles.headerLayout]}>
          <ImageBackground
            style={[styles.verticalLogo1Icon, styles.headerLayout]}
            resizeMode="cover"
            source={require("../assets/verticallogo1.png")}
          />
          <Image
            style={styles.headerChild}
            resizeMode="cover"
            source={require("../assets/rectangle-55.png")}
          />
          <TextInput
            style={styles.search}
            placeholder="Search"
            keyboardType="default"
            placeholderTextColor="rgba(105, 111, 140, 0.9)"
          />
          <Image
            style={[styles.iconlybrokensearch, styles.chatIconLayout]}
            resizeMode="cover"
            source={require("../assets/iconlybrokensearch.png")}
          />
          <TouchableHighlight
            style={styles.frame}
            underlayColor="#fff"
            activeOpacity={0.2}
            onPress={() => {}}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/frame.png")}
            />
          </TouchableHighlight>
          <View style={styles.headerInner}>
            <View style={styles.wrapperPosition}>
              <View style={styles.wrapperPosition}>
                <View style={styles.wrapperPosition}>
                  <View
                    style={[
                      styles.iconlybrokenchatWrapper,
                      styles.wrapperPosition,
                    ]}
                  >
                    <TouchableHighlight
                      style={styles.wrapperPosition}
                      underlayColor="#fff"
                      activeOpacity={0.2}
                      onPress={() => {}}
                    >
                      <Image
                        style={[styles.wrapperPosition, styles.chatIconLayout]}
                        resizeMode="cover"
                        source={require("../assets/chat-button.png")}
                      />
                    </TouchableHighlight>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
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
      <TopTabsQuestion />
      <PostCard
        abstractText="Type your question!"
        titleText="Add link"
        researchTypeText="Add hastags"
        propWidth1={91}
        onUploadButtonPress={() => navigation.navigate("POSTSUCCESS")}
        onRectangleTouchableHighligPress={() =>
          navigation.navigate("QUESTIONSUBMITTED")
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  chatIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupInnerPosition: {
    height: 96,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  headerLayout: {
    height: 46,
    position: "absolute",
  },
  wrapperPosition: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    right: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
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
    position: "absolute",
  },
  groupInner: {
    opacity: 0.99,
    backgroundColor: Color.lightThemeWhite1,
    width: 375,
  },
  verticalLogo1Icon: {
    width: 46,
    left: 0,
    height: 46,
    top: 0,
  },
  headerChild: {
    top: 9,
    left: 46,
    borderRadius: Border.br_6xl,
    width: 269,
    height: 31,
    position: "absolute",
  },
  search: {
    top: 16,
    left: 70,
    position: "absolute",
  },
  iconlybrokensearch: {
    height: "21.74%",
    width: "2.84%",
    top: "43.48%",
    right: "81.53%",
    bottom: "34.78%",
    left: "15.63%",
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  frame: {
    left: 283,
    top: 13,
    width: 23,
    height: 23,
    position: "absolute",
  },
  iconlybrokenchatWrapper: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
  },
  headerInner: {
    height: "54.35%",
    width: "7.1%",
    top: "26.09%",
    bottom: "19.57%",
    left: "92.9%",
    right: "0%",
    position: "absolute",
  },
  header: {
    top: 41,
    left: 10,
    width: 352,
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
  addQuestion: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.lightThemeWhite1,
  },
});

export default ADDQUESTION;
