import * as React from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableHighlight,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import PostContainer from "../components/PostContainer";
import TopTabsResearch from "../components/TopTabsResearch";
import Header from "../components/Header";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const HOMEPAGEPOST = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homepagePost}>
      <View style={[styles.homepagePostInner, styles.groupParentLayout]}>
        <View style={styles.groupWrapper}>
          <View style={styles.groupParentLayout}>
            <PostContainer postTitle="Cipla begin the trails for new vaccines for COVID-19" />
            <View style={[styles.buttonParent, styles.iconPosition1]}>
              <Image
                style={[styles.buttonIcon, styles.iconPosition1]}
                resizeMode="cover"
                source={require("../assets/button.png")}
              />
              <Image
                style={[styles.image6Icon, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/image-6.png")}
              />
              <View style={[styles.rectangleParent, styles.groupChildLayout]}>
                <View style={[styles.groupChild, styles.groupChildLayout]} />
                <Text style={[styles.theWorldsBiggest, styles.theTypo]}>
                  The worlds biggest contributors to the medical science
                </Text>
                <Image
                  style={[
                    styles.archiveAddIcon,
                    styles.iconLayout,
                    styles.iconLayout1,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/archiveadd3.png")}
                />
                <Image
                  style={[
                    styles.arrowUpIcon,
                    styles.iconLayout,
                    styles.iconLayout1,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/archiveadd3.png")}
                />
                <Image
                  style={[styles.arrowDownIcon, styles.arrowDownIconPosition]}
                  resizeMode="cover"
                  source={require("../assets/archiveadd3.png")}
                />
                <Text style={[styles.k, styles.kTypo]}>26.9k</Text>
                <View style={[styles.messageParent, styles.iconLayout]}>
                  <Image
                    style={[styles.messageIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/message1.png")}
                  />
                  <Text style={styles.text}>500</Text>
                </View>
                <View style={[styles.legacyWrapper, styles.wrapperSpaceBlock]}>
                  <Text style={[styles.legacy, styles.sClr]}>#Legacy</Text>
                </View>
                <Image
                  style={[
                    styles.akarIconsshareBox,
                    styles.arrowDownIconPosition,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/archiveadd3.png")}
                />
                <View style={[styles.groupItem, styles.groupItemLayout]} />
              </View>
              <View style={styles.groupContainer}>
                <Image
                  style={[styles.groupInner, styles.groupInnerLayout]}
                  resizeMode="cover"
                  source={require("../assets/pfp.png")}
                />
                <Text
                  style={[
                    styles.haydenLary,
                    styles.smileAppTypo,
                    styles.hoursAgoPosition,
                  ]}
                >
                  {" "}
                  Hayden Lary
                </Text>
                <Text
                  style={[
                    styles.hoursAgo,
                    styles.hoursAgoTypo,
                    styles.hoursAgoPosition,
                  ]}
                >
                  21 hours ago
                </Text>
              </View>
              <TouchableHighlight
                style={styles.buttonPosition}
                underlayColor="#ffc400"
                onPress={Alert.alert("Downloading File", "")}
              >
                <Image
                  style={styles.icon}
                  resizeMode="cover"
                  source={require("../assets/button1.png")}
                />
              </TouchableHighlight>
            </View>
            <View
              style={[
                styles.nowGetTheHealthcareTreatmeParent,
                styles.rectangleIconLayout,
              ]}
            >
              <Text style={[styles.nowGetThe, styles.theTypo]}>
                Now get the healthcare treatment at your doorstep
              </Text>
              <Image
                style={[
                  styles.rectangleIcon,
                  styles.rectangleIconLayout,
                  styles.iconLayout2,
                ]}
                resizeMode="cover"
                source={require("../assets/rectangle-8.png")}
              />
              <Image
                style={[styles.archiveAddIcon1, styles.iconPosition]}
                resizeMode="cover"
                source={require("../assets/archiveadd4.png")}
              />
              <Image
                style={[styles.arrowUpIcon1, styles.iconPosition]}
                resizeMode="cover"
                source={require("../assets/archiveadd4.png")}
              />
              <Image
                style={[styles.arrowDownIcon1, styles.arrowDownIcon1Position]}
                resizeMode="cover"
                source={require("../assets/archiveadd4.png")}
              />
              <Text style={[styles.k1, styles.kTypo]}>15.3k</Text>
              <View style={[styles.messageGroup, styles.iconPosition]}>
                <Image
                  style={[styles.messageIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/message2.png")}
                />
                <Text style={styles.text}>1000</Text>
              </View>
              <View style={[styles.medicalWrapper, styles.wrapperSpaceBlock]}>
                <Text style={[styles.legacy, styles.sClr]}>#Medical</Text>
              </View>
              <Image
                style={[
                  styles.akarIconsshareBox1,
                  styles.arrowDownIcon1Position,
                ]}
                resizeMode="cover"
                source={require("../assets/archiveadd4.png")}
              />
              <View style={[styles.rectangleView, styles.groupItemLayout]} />
              <Image
                style={[styles.ellipseIcon, styles.groupInnerLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-1.png")}
              />
              <Text style={[styles.s, styles.sClr]}>S</Text>
              <Text style={[styles.smileAppPosition, styles.hoursAgoTypo]}>
                Sponsored
              </Text>
              <View style={[styles.surface, styles.buttonPosition]} />
              <Text style={[styles.smileAppPosition, styles.smileAppTypo]}>
                Smile App
              </Text>
              <Image
                style={[styles.guideIcon, styles.iconPosition1]}
                resizeMode="cover"
                source={require("../assets/guide.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.segmentedpickerParent}>
        <TopTabsResearch
          onOptionPress={() => {}}
          optionBorderRadius={7}
          optionElevation={8}
          optionBorderStyle="solid"
          optionBorderColor="rgba(0, 0, 0, 0.04)"
          optionBorderWidth={0.5}
          optionBackgroundColor="#02256d"
        />
        <Header
          onFramePress={() => {}}
          onIconlyBrokenChatPress={() => {}}
          icon={require("../assets/frame1.png")}
          headerTop={38}
          headerLeft={9}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupParentLayout: {
    height: 1503,
    width: 375,
  },
  iconPosition1: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  iconLayout2: {
    height: 303,
    left: 0,
  },
  groupChildLayout: {
    width: 360,
    position: "absolute",
  },
  theTypo: {
    textAlign: "left",
    color: Color.neutral9001,
    lineHeight: 27,
    fontSize: FontSize.size_8xl,
    left: 14,
    fontFamily: FontFamily.nunitoSansBlack,
    fontWeight: "900",
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    position: "absolute",
  },
  iconLayout1: {
    top: 959,
    height: 24,
    width: 20,
  },
  arrowDownIconPosition: {
    top: 958,
    height: 24,
    width: 20,
    position: "absolute",
  },
  kTypo: {
    width: 35,
    left: 41,
    color: Color.gray_400,
    fontSize: FontSize.size_2xl,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBlack,
    fontWeight: "900",
    position: "absolute",
  },
  wrapperSpaceBlock: {
    paddingVertical: Padding.p_2xs,
    paddingHorizontal: Padding.p_sm,
    backgroundColor: Color.midnightblue,
    borderRadius: Border.br_3xl,
    left: 13,
    flexDirection: "row",
    position: "absolute",
  },
  sClr: {
    color: Color.lightThemeWhite1,
    textAlign: "left",
  },
  groupItemLayout: {
    height: 9,
    width: 7,
    backgroundColor: Color.steelblue_100,
    position: "absolute",
  },
  groupInnerLayout: {
    height: 36,
    width: 36,
    top: 0,
    position: "absolute",
  },
  smileAppTypo: {
    color: Color.lightThemeDark1,
    fontSize: FontSize.size_5xl,
    top: 1,
    fontFamily: FontFamily.nunitoSansBlack,
    fontWeight: "900",
  },
  hoursAgoPosition: {
    left: 42,
    textAlign: "left",
    position: "absolute",
  },
  hoursAgoTypo: {
    color: Color.gray_300,
    fontFamily: FontFamily.nunitoSansRegular,
    fontSize: FontSize.subtitleButtonBold1_size,
    top: 19,
  },
  rectangleIconLayout: {
    width: 373,
    position: "absolute",
  },
  iconPosition: {
    top: 457,
    height: 24,
    position: "absolute",
  },
  arrowDownIcon1Position: {
    top: 456,
    height: 24,
    width: 20,
    position: "absolute",
  },
  buttonPosition: {
    height: 20,
    width: 20,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  buttonIcon: {
    marginTop: -202,
    width: 32,
    height: 32,
    marginLeft: 155.5,
  },
  image6Icon: {
    top: 146,
    width: 375,
    position: "absolute",
  },
  groupChild: {
    top: 442,
    backgroundColor: "#f2f4f5",
    height: 8,
    left: 0,
  },
  theWorldsBiggest: {
    width: 346,
    top: 0,
  },
  archiveAddIcon: {
    left: 304,
    width: 20,
  },
  arrowUpIcon: {
    left: 21,
    width: 20,
  },
  arrowDownIcon: {
    left: 80,
  },
  k: {
    top: 412,
  },
  messageIcon: {
    width: 20,
    top: 0,
    left: 0,
  },
  text: {
    top: 3,
    left: 26,
    width: 33,
    color: Color.gray_400,
    fontSize: FontSize.size_2xl,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBlack,
    fontWeight: "900",
    position: "absolute",
  },
  messageParent: {
    top: 409,
    left: 146,
    width: 59,
  },
  legacy: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.nunitoSansBlack,
    fontWeight: "900",
    color: Color.lightThemeWhite1,
  },
  legacyWrapper: {
    top: 64,
    width: 64,
  },
  akarIconsshareBox: {
    left: 330,
    overflow: "hidden",
  },
  groupItem: {
    top: 416,
    left: 309,
  },
  rectangleParent: {
    left: 3,
    height: 450,
    top: 48,
  },
  groupInner: {
    left: 0,
  },
  haydenLary: {
    width: 145,
  },
  hoursAgo: {
    width: 78,
  },
  groupContainer: {
    left: 16,
    width: 188,
    height: 37,
    top: 0,
    position: "absolute",
  },
  icon: {
    marginTop: -240,
    height: "100%",
    marginLeft: 155.5,
    width: "100%",
  },
  buttonParent: {
    marginTop: -249.5,
    marginLeft: -187.5,
    height: 498,
    width: 375,
  },
  nowGetThe: {
    width: 343,
    top: 48,
  },
  rectangleIcon: {
    top: 143,
  },
  archiveAddIcon1: {
    left: 299,
    width: 20,
  },
  arrowUpIcon1: {
    left: 18,
    width: 20,
  },
  arrowDownIcon1: {
    left: 76,
  },
  k1: {
    top: 460,
  },
  messageGroup: {
    left: 145,
    width: 58,
  },
  medicalWrapper: {
    top: 112,
    width: 63,
  },
  akarIconsshareBox1: {
    left: 324,
    overflow: "hidden",
  },
  rectangleView: {
    top: 464,
    left: 306,
  },
  ellipseIcon: {
    left: 13,
    height: 36,
    width: 36,
  },
  s: {
    top: 8,
    left: 25,
    fontSize: FontSize.paragraphSemiBold_size,
    fontWeight: "700",
    fontFamily: FontFamily.nunitoSansBold,
    position: "absolute",
  },
  smileAppPosition: {
    left: 55,
    textAlign: "left",
    position: "absolute",
  },
  surface: {
    marginTop: -235.5,
    marginLeft: 154.5,
  },
  guideIcon: {
    marginTop: -233.31,
    marginLeft: 157.05,
    width: 15,
    height: 14,
  },
  nowGetTheHealthcareTreatmeParent: {
    top: 1022,
    left: 1,
    height: 481,
  },
  groupWrapper: {
    flexDirection: "row",
    top: 0,
    height: 1503,
    left: 0,
    position: "absolute",
  },
  homepagePostInner: {
    top: 147,
    left: 0,
    position: "absolute",
  },
  segmentedpickerParent: {
    top: 38,
    height: 774,
    width: 375,
    left: 0,
    position: "absolute",
  },
  homepagePost: {
    backgroundColor: Color.lightThemeWhite1,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default HOMEPAGEPOST;
