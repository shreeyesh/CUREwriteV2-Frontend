import * as React from "react";
import { StyleSheet, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ContainerRow from "../components/ContainerRow";
import LeaderboardContainer from "../components/LeaderboardContainer";
import TopRankContainer from "../components/TopRankContainer";
import LeaderboardChips from "../components/LeaderboardChips";
import RankInfo from "../components/RankInfo";
import Header from "../components/Header";
import BottomTabsLeaderboards from "../components/BottomTabsLeaderboards";
import { Border, Color } from "../GlobalStyles";

const LEADERBOARDGLOBAL = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.leaderboardGlobal}>
      <View style={styles.leaderboardGlobalInner}>
        <View style={styles.rectangleParent}>
          <View style={styles.groupChild} />
          <ContainerRow
            pointsEarned="80000 pts "
            playerName="Dr. Emile John"
            playerImageUrl={require("../assets/rectangle-3.png")}
            opponentImageUrl={require("../assets/star-6.png")}
            playerScore="4"
            rectangle3Top={231}
            star6Left="76.74%"
            propLeft="36.75%"
          />
          <ContainerRow
            pointsEarned="60000 pts"
            playerName="Wates R"
            playerImageUrl={require("../assets/rectangle-31.png")}
            opponentImageUrl={require("../assets/star-61.png")}
            playerScore="5"
            rectangle3Top={290}
            star6Left="77.04%"
          />
          <ContainerRow
            pointsEarned="43000 pts"
            playerName="Dr. Milano Surp"
            playerImageUrl={require("../assets/rectangle-32.png")}
            opponentImageUrl={require("../assets/star-62.png")}
            playerScore="6"
            rectangle3Top={349}
            star6Left="77.04%"
          />
          <ContainerRow
            pointsEarned="33000 pts"
            playerName="Helen Roger"
            playerImageUrl={require("../assets/rectangle-33.png")}
            opponentImageUrl={require("../assets/star-63.png")}
            playerScore="7"
            rectangle3Top={409}
            star6Left="77.34%"
          />
          <ContainerRow
            pointsEarned="26000 pts"
            playerName="Mucan S."
            playerImageUrl={require("../assets/rectangle-34.png")}
            opponentImageUrl={require("../assets/star-64.png")}
            playerScore="8"
            rectangle3Top={468}
            star6Left="77.04%"
          />
          <ContainerRow
            pointsEarned="16000 pts"
            playerName="Dr. Elica M"
            playerImageUrl={require("../assets/rectangle-35.png")}
            opponentImageUrl={require("../assets/star-65.png")}
            playerScore="9"
            rectangle3Top={528}
            star6Left="77.93%"
          />
          <LeaderboardContainer
            pointsEarned="500 pts"
            playerName="Elliot K."
            playerImageUrl={require("../assets/rectangle-36.png")}
            playerRankImageUrl={require("../assets/star-66.png")}
            playerScore="10"
            propTop={588}
            propLeft="81.82%"
            propLeft1="30.99%"
          />
          <TopRankContainer
            propLeft={11}
            ptsValue="20000 pts"
            userName="Dr. Jessica"
            userNameR2="Brad T."
            ptsValueR2="13000 pts"
            userNameR3="Andrew B."
            ptsValueR3="15000 pts"
          />
          <LeaderboardChips />
        </View>
      </View>
      <RankInfo onFramePress={() => navigation.navigate("HOWITWORK")} />
      <View style={styles.ellipseParentPosition}>
        <Image
          style={styles.groupItem}
          resizeMode="cover"
          source={require("../assets/ellipse-2.png")}
        />
        <Image
          style={styles.groupInner}
          resizeMode="cover"
          source={require("../assets/group-149.png")}
        />
        <View style={[styles.rectangleView, styles.ellipseParentPosition]} />
        <Header
          onFramePress={() => {}}
          onIconlyBrokenChatPress={() => {}}
          icon={require("../assets/frame.png")}
        />
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupChild1, styles.groupLayout]} />
        <BottomTabsLeaderboards
          icon={require("../assets/combinedshape1.png")}
        />
        <Image
          style={styles.ellipseIcon}
          resizeMode="cover"
          source={require("../assets/alert.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ellipseParentPosition: {
    height: 96,
    width: 375,
    top: 0,
    left: 0,
    position: "absolute",
  },
  groupLayout: {
    height: 70,
    width: 375,
    left: 0,
    position: "absolute",
  },
  groupChild: {
    top: 176,
    borderRadius: Border.br_2xl,
    height: 506,
    left: 0,
    width: 372,
    position: "absolute",
    backgroundColor: Color.lightThemeWhite1,
  },
  rectangleParent: {
    top: 37,
    left: -11,
    height: 682,
    width: 372,
    position: "absolute",
  },
  leaderboardGlobalInner: {
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
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleView: {
    opacity: 0.99,
    backgroundColor: Color.lightThemeWhite1,
  },
  groupChild1: {
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
  rectangleGroup: {
    top: 743,
  },
  leaderboardGlobal: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.lightThemeWhite1,
  },
});

export default LEADERBOARDGLOBAL;
