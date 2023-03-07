import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  TouchableHighlight,
} from "react-native";
import PointsContainer from "../components/PointsContainer";
import { useNavigation } from "@react-navigation/native";
import SearchSection from "../components/SearchSection";
import { Margin, Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const LEADERBOARDNATIONAL = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.leaderboardNational}>
      <View style={styles.leaderboardNationalInner}>
        <View style={styles.frameParent}>
          <View style={styles.rectangleWrapper}>
            <View style={styles.frameChild} />
          </View>
          <View style={styles.rowParent}>
            <PointsContainer
              pointsEarned="10000 pts "
              playerName="Sarah G."
              playerImageUrl={require("../assets/rectangle-320.png")}
              playerRankImageUrl={require("../assets/star-628.png")}
              playerScore="4"
              propLeft="77.93%"
              propLeft1="36.75%"
            />
            <PointsContainer
              pointsEarned="5000 pts"
              playerName="Jason R."
              playerImageUrl={require("../assets/rectangle-328.png")}
              playerRankImageUrl={require("../assets/star-629.png")}
              playerScore="5"
              star6MarginTop={5}
              propLeft="79.43%"
            />
            <PointsContainer
              pointsEarned="4000 pts"
              playerName="Dr. Oscar W."
              playerImageUrl={require("../assets/rectangle-329.png")}
              playerRankImageUrl={require("../assets/star-630.png")}
              playerScore="6"
              star6MarginTop={5}
              propLeft="79.43%"
            />
            <PointsContainer
              pointsEarned="3000 pts"
              playerName="Melinda H."
              playerImageUrl={require("../assets/rectangle-330.png")}
              playerRankImageUrl={require("../assets/star-631.png")}
              playerScore="7"
              star6MarginTop={5}
              propLeft="79.43%"
            />
            <PointsContainer
              pointsEarned="2000 pts"
              playerName="Lucas S."
              playerImageUrl={require("../assets/rectangle-331.png")}
              playerRankImageUrl={require("../assets/star-632.png")}
              playerScore="8"
              star6MarginTop={5}
              propLeft="79.73%"
            />
            <PointsContainer
              pointsEarned="1000 pts"
              playerName="Ramon M."
              playerImageUrl={require("../assets/rectangle-332.png")}
              playerRankImageUrl={require("../assets/star-633.png")}
              playerScore="9"
              star6MarginTop={5}
              propLeft="80.62%"
            />
            <PointsContainer
              pointsEarned="500 pts"
              playerName="Elliot K."
              playerImageUrl={require("../assets/rectangle-333.png")}
              playerRankImageUrl={require("../assets/star-634.png")}
              playerScore="10"
              star6MarginTop={5}
              propLeft="81.82%"
              propLeft1="30.99%"
            />
          </View>
          <View style={[styles.tab, styles.tabLayout]}>
            <View
              style={[styles.tabChild, styles.childPosition, styles.tabLayout]}
            />
            <View
              style={[
                styles.selected,
                styles.selectedLayout,
                styles.selectedLayout1,
              ]}
            >
              <View
                style={[
                  styles.selectedChild,
                  styles.selectedLayout,
                  styles.selectedLayout1,
                  styles.childPosition,
                ]}
              />
              <Text
                style={[
                  styles.national,
                  styles.tabItemLayout,
                  styles.globalTypo,
                ]}
              >
                National
              </Text>
              <View style={[styles.mdichessQueen, styles.mdichessLayout]}>
                <Image
                  style={[styles.vectorIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/vector25.png")}
                />
              </View>
            </View>
            <Pressable
              style={[styles.tabItem, styles.tabItemLayout]}
              onPress={() => navigation.navigate("LEADERBOARDGLOBAL")}
            >
              <Text
                style={[styles.global, styles.tabItemLayout, styles.globalTypo]}
              >
                Global
              </Text>
              <View style={[styles.mdichessQueen1, styles.mdichessLayout]}>
                <Image
                  style={[styles.vectorIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/vector26.png")}
                />
              </View>
            </Pressable>
            <Pressable
              style={[styles.tabItem1, styles.tabItemLayout]}
              onPress={() => navigation.navigate("LEADERBOARDFRIENDS")}
            >
              <Text
                style={[
                  styles.friends,
                  styles.tabItemLayout,
                  styles.globalTypo,
                ]}
              >
                Friends
              </Text>
              <View style={[styles.mdichessQueen2, styles.mdichessLayout]}>
                <Image
                  style={[styles.vectorIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/vector27.png")}
                />
              </View>
            </Pressable>
          </View>
        </View>
      </View>
      <Pressable style={[styles.frame, styles.selectedLayout]}>
        <TouchableHighlight
          style={styles.vector}
          underlayColor="#fff"
          activeOpacity={0.2}
          onPress={() => navigation.navigate("HOWITWORK")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/vector28.png")}
          />
        </TouchableHighlight>
      </Pressable>
      <SearchSection />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <View style={styles.bottomTabsLeaderboards}>
          <Image
            style={[styles.vectorIcon3, styles.vectorPosition]}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
          <TouchableHighlight
            style={[
              styles.iconlylightOutlinehome,
              styles.vectorLayout,
              styles.vector2Position,
            ]}
            underlayColor="#fff"
            activeOpacity={0.2}
            onPress={() => navigation.navigate("HOMEPAGEQUESTION")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/fill1.png")}
            />
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.vector1, styles.vectorLayout, styles.vectorPosition]}
            underlayColor="#fff"
            activeOpacity={0.2}
            onPress={() => navigation.navigate("ADDPOST")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/iconlybrokenplus.png")}
            />
          </TouchableHighlight>
          <TouchableHighlight
            style={[
              styles.vector2,
              styles.vectorLayout,
              styles.vector2Position,
            ]}
            underlayColor="#fff"
            activeOpacity={0.2}
            onPress={() => {}}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
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
              style={[styles.icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/combinedshape1.png")}
            />
          </TouchableHighlight>
        </View>
        <Image
          style={styles.groupItem}
          resizeMode="cover"
          source={require("../assets/alert.png")}
        />
      </View>
      <View style={[styles.rank2Wrapper, styles.rank2Layout]}>
        <Image
          style={[styles.rank2Icon, styles.rank2Layout]}
          resizeMode="cover"
          source={require("../assets/rank-2.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt5: {
    marginTop: Margin.m_md,
  },
  tabLayout: {
    height: 39,
    width: 335,
    position: "absolute",
  },
  childPosition: {
    borderRadius: Border.br_xl,
    top: 0,
    left: 0,
  },
  selectedLayout: {
    height: 33,
    position: "absolute",
  },
  selectedLayout1: {
    width: 117,
    height: 33,
  },
  tabItemLayout: {
    height: 20,
    position: "absolute",
  },
  globalTypo: {
    textAlign: "center",
    color: Color.lightThemeWhite1,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 21,
    fontSize: FontSize.size_2xl,
    height: 20,
  },
  mdichessLayout: {
    height: 14,
    width: 15,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupChildLayout: {
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
  vector2Position: {
    bottom: "3.85%",
    width: "8.12%",
    top: "3.7%",
  },
  rank2Layout: {
    height: 170,
    width: 345,
    position: "absolute",
  },
  frameChild: {
    borderRadius: Border.br_2xl,
    width: 372,
    height: 506,
    backgroundColor: Color.lightThemeWhite1,
  },
  rectangleWrapper: {
    top: 81,
    flexDirection: "row",
    padding: 10,
    left: 0,
    position: "absolute",
  },
  rowParent: {
    top: 146,
    left: 28,
    position: "absolute",
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
  vectorIcon: {
    height: "83.33%",
    width: "66.67%",
    top: "8.33%",
    right: "16.67%",
    bottom: "8.33%",
    left: "16.67%",
    position: "absolute",
  },
  mdichessQueen: {
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
  mdichessQueen1: {
    top: 4,
    left: 0,
  },
  tabItem: {
    top: 9,
    left: 31,
    width: 58,
  },
  friends: {
    left: 14,
    width: 47,
    top: 0,
  },
  mdichessQueen2: {
    top: 3,
    left: 0,
  },
  tabItem1: {
    left: 246,
    width: 61,
    top: 10,
  },
  tab: {
    top: 95,
    left: 28,
  },
  frameParent: {
    top: 122,
    left: -21,
    width: 392,
    height: 607,
    position: "absolute",
  },
  leaderboardNationalInner: {
    top: 106,
    left: 12,
    width: 350,
    height: 706,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "4.17%",
    top: "16.67%",
    right: "4.17%",
    bottom: "16.67%",
    width: "91.67%",
    height: "66.67%",
    position: "absolute",
  },
  frame: {
    top: 96,
    left: 332,
    width: 33,
    overflow: "hidden",
  },
  groupChild: {
    backgroundColor: Color.white_100,
    opacity: 0.9,
    top: 0,
  },
  vectorIcon3: {
    width: "7.79%",
    right: "0%",
    left: "92.21%",
    height: "92.45%",
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconlylightOutlinehome: {
    left: "0%",
    right: "91.88%",
  },
  vector1: {
    left: "46.1%",
    right: "45.78%",
  },
  vector2: {
    left: "23.05%",
    right: "68.83%",
  },
  notification: {
    left: "70.13%",
    right: "22.4%",
    bottom: "0%",
    width: "7.47%",
    height: "96.3%",
    top: "3.7%",
    position: "absolute",
  },
  bottomTabsLeaderboards: {
    height: "38.84%",
    width: "82.13%",
    top: "31.6%",
    right: "9.07%",
    bottom: "29.57%",
    left: "8.8%",
    position: "absolute",
  },
  groupItem: {
    top: 21,
    left: 268,
    width: 7,
    height: 6,
    position: "absolute",
  },
  rectangleParent: {
    top: 743,
  },
  rank2Icon: {
    top: 0,
    left: 0,
  },
  rank2Wrapper: {
    top: 135,
    left: 4,
  },
  leaderboardNational: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.lightThemeWhite1,
  },
});

export default LEADERBOARDNATIONAL;
