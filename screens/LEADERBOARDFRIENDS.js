import * as React from "react";
import { StyleSheet, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ContainerRow from "../components/ContainerRow";
import TopRankContainer from "../components/TopRankContainer";
import LeaderboardChipFriends from "../components/LeaderboardChipFriends";
import RankInfo from "../components/RankInfo";
import Header from "../components/Header";
import BottomTabsLeaderboards from "../components/BottomTabsLeaderboards";
import { Border, Color } from "../GlobalStyles";

const LEADERBOARDFRIENDS = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.leaderboardFriends}>
      <View style={styles.leaderboardFriendsInner}>
        <View style={styles.rectangleParent}>
          <View style={styles.groupChild} />
          <ContainerRow
            pointsEarned="18000 pts "
            playerName="AK Ramesh"
            playerImageUrl={require("../assets/rectangle-310.png")}
            opponentImageUrl={require("../assets/star-6.png")}
            playerScore="4"
            rectangle3Top={239}
            star6Left="77.93%"
          />
          <ContainerRow
            pointsEarned="15000 pts"
            playerName="Lawson R"
            playerImageUrl={require("../assets/rectangle-311.png")}
            opponentImageUrl={require("../assets/star-61.png")}
            playerScore="5"
            rectangle3Top={298}
            star6Left="77.93%"
          />
          <ContainerRow
            pointsEarned="10000 pts"
            playerName="Dr. Willionson"
            playerImageUrl={require("../assets/rectangle-312.png")}
            opponentImageUrl={require("../assets/star-62.png")}
            playerScore="6"
            rectangle3Top={357}
            star6Left="77.93%"
          />
          <ContainerRow
            pointsEarned="9000 pts"
            playerName="Abhijeet Mishra"
            playerImageUrl={require("../assets/rectangle-313.png")}
            opponentImageUrl={require("../assets/star-63.png")}
            playerScore="7"
            rectangle3Top={417}
            star6Left="79.43%"
          />
          <ContainerRow
            pointsEarned="5000 pts"
            playerName="Dr. Deepak Singh"
            playerImageUrl={require("../assets/rectangle-314.png")}
            opponentImageUrl={require("../assets/star-64.png")}
            playerScore="8"
            rectangle3Top={476}
            star6Left="79.43%"
          />
          <ContainerRow
            pointsEarned="2000 pts"
            playerName="Dr. Raman Akhter"
            playerImageUrl={require("../assets/rectangle-315.png")}
            opponentImageUrl={require("../assets/star-65.png")}
            playerScore="9"
            rectangle3Top={536}
            star6Left="79.73%"
          />
          <ContainerRow
            pointsEarned="500 pts"
            playerName="Elliot K."
            playerImageUrl={require("../assets/rectangle-316.png")}
            opponentImageUrl={require("../assets/star-66.png")}
            playerScore="10"
            rectangle3Top={596}
            star6Left="81.82%"
            propLeft="30.99%"
          />
          <TopRankContainer
            propLeft={18}
            ptsValue="20000 pts"
            userName="Dr. Jessica"
            userNameR2="Brad T."
            ptsValueR2="13000 pts"
            userNameR3="Andrew B."
            ptsValueR3="15000 pts"
          />
          <LeaderboardChipFriends />
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
          bottomTabsLeaderboardsRight="9.07%"
          bottomTabsLeaderboardsLeft="8.8%"
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
    top: 184,
    borderRadius: Border.br_2xl,
    height: 506,
    left: 0,
    width: 372,
    position: "absolute",
    backgroundColor: Color.lightThemeWhite1,
  },
  rectangleParent: {
    top: 29,
    left: -11,
    height: 690,
    width: 372,
    position: "absolute",
  },
  leaderboardFriendsInner: {
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
  leaderboardFriends: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.lightThemeWhite1,
  },
});

export default LEADERBOARDFRIENDS;
