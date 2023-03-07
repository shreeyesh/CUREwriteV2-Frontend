import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ImageBackground,
  TextInput,
  Pressable,
  TouchableHighlight,
} from "react-native";
import LeaderboardContainer from "../components/LeaderboardContainer";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const HOWITWORK = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.howItWork}>
      <View style={styles.leaderboardPosition}>
        <View style={[styles.leaderboardExt, styles.leaderboardPosition]}>
          <View style={styles.leaderboardExtInner}>
            <View style={[styles.rectangleParent, styles.groupChildLayout]}>
              <View style={[styles.groupChild, styles.groupChildLayout]} />
              <LeaderboardContainer
                pointsEarned="10000 pts "
                playerName="Sarah G."
                playerImageUrl={require("../assets/rectangle-320.png")}
                playerRankImageUrl={require("../assets/star-6.png")}
                playerScore="4"
                propTop={268}
                propLeft="77.93%"
                propLeft1="36.75%"
              />
              <LeaderboardContainer
                pointsEarned="5000 pts"
                playerName="Jason R."
                playerImageUrl={require("../assets/rectangle-321.png")}
                playerRankImageUrl={require("../assets/star-61.png")}
                playerScore="5"
                propTop={327}
                propLeft="79.43%"
                propLeft1="36.75%"
              />
              <LeaderboardContainer
                pointsEarned="4000 pts"
                playerName="Dr. Oscar W."
                playerImageUrl={require("../assets/rectangle-322.png")}
                playerRankImageUrl={require("../assets/star-62.png")}
                playerScore="6"
                propTop={386}
                propLeft="79.43%"
                propLeft1="36.75%"
              />
              <LeaderboardContainer
                pointsEarned="3000 pts"
                playerName="Melinda H."
                playerImageUrl={require("../assets/rectangle-33.png")}
                playerRankImageUrl={require("../assets/star-63.png")}
                playerScore="7"
                propTop={446}
                propLeft="79.43%"
                propLeft1="36.75%"
              />
              <LeaderboardContainer
                pointsEarned="2000 pts"
                playerName="Lucas S."
                playerImageUrl={require("../assets/rectangle-324.png")}
                playerRankImageUrl={require("../assets/star-64.png")}
                playerScore="8"
                propTop={505}
                propLeft="79.73%"
                propLeft1="36.75%"
              />
              <LeaderboardContainer
                pointsEarned="1000 pts"
                playerName="Ramon M."
                playerImageUrl={require("../assets/rectangle-325.png")}
                playerRankImageUrl={require("../assets/star-65.png")}
                playerScore="9"
                propTop={565}
                propLeft="80.62%"
                propLeft1="36.75%"
              />
              <LeaderboardContainer
                pointsEarned="500 pts"
                playerName="Elliot K."
                playerImageUrl={require("../assets/rectangle-326.png")}
                playerRankImageUrl={require("../assets/star-66.png")}
                playerScore="10"
                propTop={625}
              />
              <View style={styles.view}>
                <Image
                  style={[styles.child, styles.itemPosition]}
                  resizeMode="cover"
                  source={require("../assets/star-5.png")}
                />
                <Text style={[styles.text, styles.textLayout]}>20000</Text>
                <Text style={[styles.drJessica, styles.ptsUsTypo]}>
                  Dr. Jessica
                </Text>
                <View style={styles.star}>
                  <Image
                    style={[styles.starChild, styles.innerLayout]}
                    resizeMode="cover"
                    source={require("../assets/star-621.png")}
                  />
                  <Text style={styles.text1}>1</Text>
                </View>
              </View>
              <View style={[styles.view1, styles.viewLayout]}>
                <Image
                  style={[styles.item, styles.itemPosition]}
                  resizeMode="cover"
                  source={require("../assets/star-7.png")}
                />
                <Text style={[styles.bradT, styles.bradTTypo]}>Brad T.</Text>
                <Image
                  style={[styles.inner, styles.innerLayout]}
                  resizeMode="cover"
                  source={require("../assets/star-622.png")}
                />
                <Text style={[styles.text2, styles.textTypo2]}>3</Text>
                <Text style={[styles.text3, styles.textTypo1]}>13000</Text>
              </View>
              <View style={[styles.view2, styles.viewLayout]}>
                <Image
                  style={[styles.item, styles.itemPosition]}
                  resizeMode="cover"
                  source={require("../assets/star-8.png")}
                />
                <Image
                  style={[styles.inner, styles.innerLayout]}
                  resizeMode="cover"
                  source={require("../assets/star-623.png")}
                />
                <Text style={[styles.text4, styles.textTypo2]}>2</Text>
                <Text style={[styles.andrewB, styles.bradTTypo]}>
                  Andrew B.
                </Text>
                <Text style={[styles.text5, styles.textTypo1]}>15000</Text>
              </View>
              <View style={[styles.tab, styles.tabLayout]}>
                <View
                  style={[
                    styles.tabChild,
                    styles.childPosition,
                    styles.tabLayout,
                  ]}
                />
                <View style={[styles.selected, styles.selectedLayout]}>
                  <View
                    style={[
                      styles.selectedChild,
                      styles.selectedLayout,
                      styles.childPosition,
                    ]}
                  />
                  <Text style={[styles.national, styles.globalTypo]}>
                    National
                  </Text>
                  <Image
                    style={[
                      styles.mdichessQueenIcon,
                      styles.mdichessIconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/mdichessqueen.png")}
                  />
                </View>
                <View style={[styles.tabItem, styles.tabItemPosition]}>
                  <Text style={[styles.global, styles.globalTypo]}>Global</Text>
                  <Image
                    style={[
                      styles.mdichessQueenIcon1,
                      styles.mdichessIconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/mdichessqueen1.png")}
                  />
                </View>
                <View style={[styles.tabItem1, styles.textLayout]}>
                  <Text style={[styles.friends, styles.globalTypo]}>
                    Friends
                  </Text>
                  <Image
                    style={[
                      styles.mdichessQueenIcon2,
                      styles.mdichessIconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/mdichessqueen2.png")}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.ellipseParentPosition}>
            <Image
              style={styles.groupItem}
              resizeMode="cover"
              source={require("../assets/ellipse-2.png")}
            />
            <Image
              style={[styles.groupInner, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/group-149.png")}
            />
            <View
              style={[styles.rectangleView, styles.ellipseParentPosition]}
            />
            <View style={[styles.header, styles.headerLayout]}>
              <ImageBackground
                style={[styles.verticalLogo1Icon, styles.headerLayout]}
                resizeMode="cover"
                source={require("../assets/verticallogo1.png")}
              />
              <Image
                style={[styles.headerChild, styles.tabItemPosition]}
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
                style={[styles.iconlybrokensearch, styles.iconLayout1]}
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
                  style={styles.iconLayout}
                  resizeMode="cover"
                  source={require("../assets/frame.png")}
                />
              </TouchableHighlight>
              <View style={styles.headerInner}>
                <View style={[styles.groupWrapper, styles.wrapperPosition]}>
                  <View style={[styles.groupWrapper, styles.wrapperPosition]}>
                    <View style={[styles.groupWrapper, styles.wrapperPosition]}>
                      <View
                        style={[
                          styles.iconlybrokenchatWrapper,
                          styles.groupChild2ShadowBox,
                          styles.wrapperPosition,
                        ]}
                      >
                        <TouchableHighlight
                          style={[styles.groupWrapper, styles.wrapperPosition]}
                          underlayColor="#fff"
                          activeOpacity={0.2}
                          onPress={() => {}}
                        >
                          <Image
                            style={[
                              styles.chatIcon,
                              styles.wrapperPosition,
                              styles.iconLayout1,
                            ]}
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
          <View style={[styles.rectangleGroup, styles.groupLayout]}>
            <View style={[styles.groupChild1, styles.groupLayout]} />
            <View style={styles.bottomTabsLeaderboards}>
              <Image
                style={[styles.vectorIcon, styles.vectorPosition]}
                resizeMode="cover"
                source={require("../assets/vector.png")}
              />
              <TouchableHighlight
                style={[
                  styles.iconlylightOutlinehome,
                  styles.vectorLayout,
                  styles.vector1Position,
                ]}
                underlayColor="#fff"
                activeOpacity={0.2}
                onPress={() => navigation.navigate("HOMEPAGEQUESTION")}
              >
                <Image
                  style={[styles.iconLayout, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/fill1.png")}
                />
              </TouchableHighlight>
              <TouchableHighlight
                style={[
                  styles.vector,
                  styles.vectorLayout,
                  styles.vectorPosition,
                ]}
                underlayColor="#fff"
                activeOpacity={0.2}
                onPress={() => navigation.navigate("ADDPOST")}
              >
                <Image
                  style={styles.iconLayout1}
                  resizeMode="cover"
                  source={require("../assets/iconlybrokenplus.png")}
                />
              </TouchableHighlight>
              <TouchableHighlight
                style={[
                  styles.vector1,
                  styles.vectorLayout,
                  styles.vector1Position,
                ]}
                underlayColor="#fff"
                activeOpacity={0.2}
                onPress={() => {}}
              >
                <Image
                  style={styles.iconLayout1}
                  resizeMode="cover"
                  source={require("../assets/vector5.png")}
                />
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.notification}
                underlayColor="#fff"
                activeOpacity={0.2}
                onPress={() => navigation.navigate("NOTIFICATION")}
              >
                <Image
                  style={styles.iconLayout1}
                  resizeMode="cover"
                  source={require("../assets/combinedshape1.png")}
                />
              </TouchableHighlight>
            </View>
            <Image
              style={styles.ellipseIcon}
              resizeMode="cover"
              source={require("../assets/alert.png")}
            />
          </View>
        </View>
        <View style={[styles.rectangleContainer, styles.groupChild2Layout]}>
          <View
            style={[
              styles.groupChild2,
              styles.groupChild2Layout,
              styles.groupChild2ShadowBox,
            ]}
          />
          <Text
            style={[styles.ptsUs, styles.ptsUsTypo]}
          >{`1 pts = US$ 0. 1   `}</Text>
          <Text style={styles.howItWorks}>How it Works?</Text>
          <Pressable style={styles.frame1} onPress={() => navigation.goBack()}>
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require("../assets/frame6.png")}
            />
          </Pressable>
          <Image
            style={styles.image18Icon}
            resizeMode="cover"
            source={require("../assets/image-18.png")}
          />
          <View style={[styles.star1, styles.starPosition1]}>
            <Image
              style={[styles.starItem, styles.starLayout]}
              resizeMode="cover"
              source={require("../assets/star-624.png")}
            />
            <Text style={[styles.text6, styles.textTypo]}>1</Text>
          </View>
          <View style={[styles.star2, styles.starPosition1]}>
            <Image
              style={[styles.starInner, styles.starLayout]}
              resizeMode="cover"
              source={require("../assets/star-625.png")}
            />
            <Text style={[styles.text7, styles.textTypo]}>5</Text>
          </View>
          <View style={[styles.star3, styles.starPosition]}>
            <Image
              style={[styles.starChild1, styles.starLayout]}
              resizeMode="cover"
              source={require("../assets/star-626.png")}
            />
            <Text style={[styles.text8, styles.textTypo]}>500</Text>
          </View>
          <View style={[styles.star4, styles.starPosition]}>
            <Image
              style={[styles.starChild1, styles.starLayout]}
              resizeMode="cover"
              source={require("../assets/star-626.png")}
            />
            <Text style={[styles.text9, styles.textTypo]}>150</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  leaderboardPosition: {
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
    height: 812,
  },
  groupChildLayout: {
    width: 372,
    position: "absolute",
  },
  itemPosition: {
    borderRadius: Border.br_sm,
    left: -14,
    top: 17,
    position: "absolute",
  },
  textLayout: {
    height: 20,
    position: "absolute",
  },
  ptsUsTypo: {
    color: Color.midnightblue,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "center",
    position: "absolute",
  },
  innerLayout: {
    borderRadius: Border.br_5xs,
    top: 4,
    height: 54,
    width: 58,
    position: "absolute",
  },
  viewLayout: {
    height: 153,
    width: 101,
    top: 47,
    position: "absolute",
  },
  bradTTypo: {
    top: 117,
    color: Color.midnightblue,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    letterSpacing: 0.4,
    height: 20,
    textAlign: "center",
    lineHeight: 21,
    fontSize: FontSize.size_4xl,
    position: "absolute",
  },
  textTypo2: {
    width: 11,
    height: 16,
    color: Color.lightThemeDark1,
    lineHeight: 16,
    letterSpacing: 0.8,
    fontSize: FontSize.paragraphSemiBold_size,
    top: 18,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "center",
    position: "absolute",
  },
  textTypo1: {
    top: 132,
    height: 20,
    textAlign: "center",
    color: Color.steelblue_100,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    lineHeight: 21,
    fontSize: FontSize.size_4xl,
    position: "absolute",
  },
  tabLayout: {
    height: 39,
    width: 335,
    position: "absolute",
  },
  childPosition: {
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  selectedLayout: {
    height: 33,
    width: 117,
    position: "absolute",
  },
  globalTypo: {
    color: Color.lightThemeWhite1,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_2xl,
    height: 20,
    textAlign: "center",
    lineHeight: 21,
    position: "absolute",
  },
  mdichessIconLayout: {
    height: 14,
    width: 15,
    position: "absolute",
  },
  tabItemPosition: {
    top: 9,
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  ellipseParentPosition: {
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
    bottom: "0%",
    top: "0%",
    left: "0%",
    right: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  groupChild2ShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  groupLayout: {
    height: 70,
    width: 375,
    left: 0,
    position: "absolute",
  },
  vectorPosition: {
    bottom: "7.55%",
    top: "0%",
  },
  vectorLayout: {
    width: "8.12%",
    height: "92.45%",
    position: "absolute",
  },
  vector1Position: {
    bottom: "3.85%",
    width: "8.12%",
    top: "3.7%",
  },
  groupChild2Layout: {
    height: 596,
    position: "absolute",
  },
  starPosition1: {
    left: "10.74%",
    position: "absolute",
  },
  starLayout: {
    borderRadius: Border.br_6xs,
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
    width: "100%",
  },
  textTypo: {
    lineHeight: 12,
    fontSize: FontSize.size_base,
    top: "31.25%",
    color: Color.lightThemeDark1,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    position: "absolute",
  },
  starPosition: {
    left: "10.07%",
    right: "75.5%",
    width: "14.43%",
    height: "6.54%",
    position: "absolute",
  },
  groupChild: {
    top: 213,
    borderRadius: Border.br_2xl,
    height: 506,
    backgroundColor: Color.lightThemeWhite1,
    left: 0,
  },
  child: {
    width: 160,
    height: 148,
  },
  text: {
    top: 162,
    left: 43,
    width: 48,
    textAlign: "center",
    color: Color.steelblue_100,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    lineHeight: 21,
    fontSize: FontSize.size_4xl,
    height: 20,
  },
  drJessica: {
    top: 146,
    width: 87,
    letterSpacing: 0.4,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    left: 22,
    height: 20,
    lineHeight: 21,
    fontSize: FontSize.size_4xl,
  },
  starChild: {
    left: 7,
  },
  text1: {
    left: 26,
    height: 16,
    lineHeight: 16,
    letterSpacing: 0.8,
    fontSize: FontSize.paragraphSemiBold_size,
    top: 18,
    width: 7,
    color: Color.lightThemeDark1,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "center",
    position: "absolute",
  },
  star: {
    left: 37,
    height: 54,
    width: 58,
    top: 0,
    position: "absolute",
  },
  view: {
    left: 119,
    width: 133,
    height: 182,
    top: 0,
    position: "absolute",
  },
  item: {
    width: 130,
    height: 121,
  },
  bradT: {
    width: 55,
    left: 22,
    top: 117,
  },
  inner: {
    left: 28,
  },
  text2: {
    left: 46,
  },
  text3: {
    left: 21,
    width: 57,
  },
  view1: {
    left: 252,
  },
  text4: {
    left: 45,
  },
  andrewB: {
    width: 81,
    left: 10,
  },
  text5: {
    width: 45,
    left: 28,
  },
  view2: {
    left: 18,
  },
  tabChild: {
    backgroundColor: Color.midnightblue,
  },
  selectedChild: {
    backgroundColor: Color.steelblue_100,
  },
  national: {
    top: 7,
    left: 34,
    width: 65,
  },
  mdichessQueenIcon: {
    left: 25,
    top: 10,
  },
  selected: {
    left: 105,
    top: 3,
  },
  global: {
    left: 13,
    width: 45,
    top: 0,
  },
  mdichessQueenIcon1: {
    top: 4,
    height: 14,
    width: 15,
    left: 0,
  },
  tabItem: {
    left: 31,
    width: 58,
    top: 9,
    height: 20,
  },
  friends: {
    left: 14,
    width: 47,
    top: 0,
  },
  mdichessQueenIcon2: {
    top: 3,
    left: 0,
  },
  tabItem1: {
    left: 246,
    width: 61,
    top: 10,
  },
  tab: {
    top: 217,
    left: 18,
  },
  rectangleParent: {
    left: -11,
    height: 719,
    top: 0,
  },
  leaderboardExtInner: {
    top: 106,
    left: 12,
    width: 350,
    height: 706,
    position: "absolute",
  },
  groupItem: {
    top: 48,
    left: 20,
    width: 37,
    height: 37,
    position: "absolute",
  },
  groupInner: {
    height: "17.61%",
    width: "4.64%",
    top: "59.79%",
    right: "25.74%",
    bottom: "22.6%",
    left: "69.62%",
    overflow: "hidden",
    position: "absolute",
  },
  rectangleView: {
    opacity: 0.99,
    backgroundColor: Color.lightThemeWhite1,
  },
  verticalLogo1Icon: {
    width: 46,
    left: 0,
    top: 0,
  },
  headerChild: {
    borderRadius: Border.br_6xl,
    width: 269,
    height: 31,
    left: 45,
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
    overflow: "hidden",
    position: "absolute",
  },
  iconLayout: {
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
  chatIcon: {
    left: "0%",
    overflow: "hidden",
  },
  groupWrapper: {
    left: "0%",
  },
  iconlybrokenchatWrapper: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowRadius: 40,
    elevation: 40,
    left: "0%",
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
    width: 352,
    left: 10,
  },
  groupChild1: {
    backgroundColor: Color.white_100,
    opacity: 0.9,
    top: 0,
  },
  vectorIcon: {
    width: "7.79%",
    left: "92.21%",
    height: "92.45%",
    bottom: "7.55%",
    right: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  iconlylightOutlinehome: {
    right: "91.88%",
    left: "0%",
  },
  vector: {
    left: "46.1%",
    right: "45.78%",
  },
  vector1: {
    left: "23.05%",
    right: "68.83%",
  },
  notification: {
    left: "70.13%",
    right: "22.4%",
    width: "7.47%",
    height: "96.3%",
    top: "3.7%",
    bottom: "0%",
    position: "absolute",
  },
  bottomTabsLeaderboards: {
    height: "38.84%",
    width: "82.13%",
    top: "31.6%",
    right: "8.8%",
    bottom: "29.57%",
    left: "9.07%",
    position: "absolute",
  },
  ellipseIcon: {
    top: 21,
    left: 268,
    height: 6,
    width: 7,
    position: "absolute",
  },
  rectangleGroup: {
    top: 743,
  },
  leaderboardExt: {
    overflow: "hidden",
    backgroundColor: Color.lightThemeWhite1,
  },
  groupChild2: {
    left: 9,
    backgroundColor: "rgba(255, 255, 255, 0.99)",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    width: 320,
    top: 0,
  },
  ptsUs: {
    top: 542,
    fontSize: FontSize.size_11xl,
    width: 271,
    left: 28,
  },
  howItWorks: {
    top: 61,
    fontSize: FontSize.size_12xl,
    fontWeight: "300",
    fontFamily: FontFamily.poppinsLight,
    height: 47,
    width: 338,
    color: Color.lightThemeDark1,
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  frame1: {
    left: 277,
    top: 8,
    width: 43,
    height: 43,
    position: "absolute",
  },
  image18Icon: {
    top: 125,
    left: 23,
    width: 293,
    height: 386,
    position: "absolute",
  },
  starItem: {
    top: "5.21%",
    right: "-9.71%",
    bottom: "-5.21%",
    left: "9.71%",
  },
  text6: {
    left: "43.71%",
  },
  star1: {
    height: "5.7%",
    width: "12.75%",
    top: "27.68%",
    right: "76.51%",
    bottom: "66.61%",
  },
  starInner: {
    top: "5.08%",
    right: "-9.5%",
    bottom: "-5.08%",
    left: "9.5%",
  },
  text7: {
    left: "41.27%",
  },
  star2: {
    height: "5.87%",
    width: "13.09%",
    top: "49.5%",
    right: "76.17%",
    bottom: "44.63%",
  },
  starChild1: {
    top: "4.64%",
    right: "-8.76%",
    bottom: "-4.64%",
    left: "8.76%",
  },
  text8: {
    left: "26.5%",
  },
  star3: {
    top: "68.46%",
    bottom: "25%",
  },
  text9: {
    left: "30.6%",
  },
  star4: {
    top: "78.36%",
    bottom: "15.1%",
  },
  rectangleContainer: {
    top: 110,
    width: 338,
    left: 18,
  },
  howItWork: {
    flex: 1,
    height: 812,
    width: "100%",
  },
});

export default HOWITWORK;
