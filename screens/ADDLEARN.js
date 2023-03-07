import * as React from "react";
import { useCallback } from "react";
import {
  Image,
  StyleSheet,
  View,
  Pressable,
  Text,
  TouchableHighlight,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import BottomTabsADD from "../components/BottomTabsADD";
import QuestionTab from "../components/QuestionTab";
import ResearchTab from "../components/ResearchTab";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const ADDLEARN = () => {
  const navigation = useNavigation();

  const onIconlyLightOutlineImage2Click = useCallback(() => {
    Alert.alert("Choose image", "");
  }, []);

  return (
    <View style={styles.addLearn}>
      <View style={styles.groupInnerPosition}>
        <Image
          style={[styles.groupChild, styles.groupChildPosition]}
          resizeMode="cover"
          source={require("../assets/ellipse-2.png")}
        />
        <Image
          style={[styles.groupItem, styles.groupItemLayout]}
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
          bottomTabsADDRight="8.8%"
          bottomTabsADDLeft="9.07%"
        />
        <Image
          style={styles.ellipseIcon}
          resizeMode="cover"
          source={require("../assets/alert.png")}
        />
      </View>
      <View
        style={[
          styles.segmentedpicker,
          styles.option1ShadowBox,
          styles.groupChildPosition,
        ]}
      >
        <TouchableHighlight
          style={styles.optionFlexBox}
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
        <View
          style={[
            styles.option1,
            styles.optionFlexBox,
            styles.option1ShadowBox,
          ]}
        >
          <View style={styles.separator} />
          <Text style={styles.label}>Learn</Text>
        </View>
      </View>
      <View style={[styles.iconlylightOutlinecamera, styles.iconlylightLayout]}>
        <View style={styles.cameraPosition}>
          <TouchableHighlight
            style={styles.cameraPosition}
            underlayColor="#fff"
            activeOpacity={0.2}
            onPress={() => {}}
          >
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require("../assets/combinedshape6.png")}
            />
          </TouchableHighlight>
        </View>
      </View>
      <TouchableHighlight
        style={[styles.iconlylightOutlineimage2, styles.iconlylightLayout]}
        underlayColor="#fff"
        activeOpacity={0.2}
        onPress={onIconlyLightOutlineImage2Click}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/iconlylightoutlineimage2.png")}
        />
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.wrapper}
        underlayColor="#fff"
        activeOpacity={0.2}
        onPress={() => navigation.navigate("REELADDED")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-56.png")}
        />
      </TouchableHighlight>
      <Image
        style={[styles.iconlylightOutlinearrowU, styles.groupItemLayout]}
        resizeMode="cover"
        source={require("../assets/iconlylightoutlinearrowup2.png")}
      />
      <Text style={styles.holdForVideo}>Hold for video, tap for photo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    left: 20,
    position: "absolute",
  },
  groupItemLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
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
  option1ShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  optionFlexBox: {
    alignSelf: "stretch",
    flex: 1,
  },
  iconlylightLayout: {
    width: "6.67%",
    height: "3.08%",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
  groupChild: {
    top: 48,
    width: 37,
    height: 37,
  },
  groupItem: {
    height: "17.61%",
    width: "4.64%",
    top: "59.79%",
    right: "25.74%",
    bottom: "22.6%",
    left: "69.62%",
  },
  groupInner: {
    opacity: 0.99,
    backgroundColor: Color.lightThemeWhite1,
    width: 375,
    left: 0,
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
  separator: {
    height: "55.17%",
    width: "0.57%",
    top: "20.69%",
    right: "2.33%",
    bottom: "24.14%",
    left: "97.1%",
    borderRadius: Border.br_7xs,
    backgroundColor: Color.separatorColorLightWithTransparency1,
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
    width: 67,
    height: 16,
    position: "absolute",
  },
  option1: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.midnightblue,
    shadowColor: "rgba(0, 0, 0, 0.12)",
    shadowRadius: 8,
    elevation: 8,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.04)",
    borderWidth: 0.5,
  },
  segmentedpicker: {
    top: 105,
    borderRadius: Border.br_md,
    backgroundColor: Color.gray_1300,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowRadius: 10,
    elevation: 10,
    width: 335,
    height: 32,
    flexDirection: "row",
    padding: Padding.p_3xs,
    overflow: "hidden",
  },
  cameraPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  iconlylightOutlinecamera: {
    top: "80.05%",
    right: "10.13%",
    bottom: "16.87%",
    left: "83.2%",
    opacity: 0.5,
  },
  icon1: {
    opacity: 0.5,
  },
  iconlylightOutlineimage2: {
    left: "10.4%",
    top: "80.17%",
    right: "82.93%",
    bottom: "16.75%",
  },
  wrapper: {
    left: "42.13%",
    top: "77.96%",
    right: "41.87%",
    bottom: "14.66%",
    width: "16%",
    height: "7.39%",
    position: "absolute",
  },
  iconlylightOutlinearrowU: {
    height: "1.55%",
    width: "9.87%",
    top: "74.88%",
    right: "45.07%",
    bottom: "23.57%",
    left: "45.07%",
    opacity: 0.5,
  },
  holdForVideo: {
    top: "88.18%",
    left: "27.73%",
    fontSize: FontSize.size_2xl,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.lightThemeDark1,
    textAlign: "left",
    position: "absolute",
  },
  addLearn: {
    height: 812,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.lightThemeWhite1,
  },
});

export default ADDLEARN;
