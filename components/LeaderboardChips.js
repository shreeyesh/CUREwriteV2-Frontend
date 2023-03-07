import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const LeaderboardChips = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.tab, styles.tabLayout]}>
      <View style={[styles.tabChild, styles.childPosition, styles.tabLayout]} />
      <View style={[styles.selected, styles.selectedLayout]}>
        <View
          style={[
            styles.selectedChild,
            styles.selectedLayout,
            styles.childPosition,
          ]}
        />
        <Pressable
          style={styles.national}
          onPress={() => navigation.navigate("LEADERBOARDNATIONAL")}
        >
          <Text style={[styles.national1, styles.globalTypo]}>National</Text>
        </Pressable>
        <Image
          style={[styles.mdichessQueenIcon, styles.mdichessIconLayout]}
          resizeMode="cover"
          source={require("../assets/mdichessqueen.png")}
        />
      </View>
      <View style={styles.tabItem}>
        <Text style={[styles.global, styles.globalTypo, styles.globalTypo1]}>
          Global
        </Text>
        <Image
          style={[
            styles.mdichessQueenIcon1,
            styles.mdichessIconLayout,
            styles.mdichessIconLayout1,
          ]}
          resizeMode="cover"
          source={require("../assets/mdichessqueen1.png")}
        />
      </View>
      <Pressable
        style={styles.tabItem1}
        onPress={() => navigation.navigate("LEADERBOARDFRIENDS")}
      >
        <Text style={[styles.friends, styles.globalTypo, styles.globalTypo1]}>
          Friends
        </Text>
        <Image
          style={[
            styles.mdichessQueenIcon2,
            styles.mdichessIconLayout,
            styles.mdichessIconLayout1,
          ]}
          resizeMode="cover"
          source={require("../assets/mdichessqueen2.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
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
  mdichessIconLayout: {
    height: 14,
    width: 15,
    position: "absolute",
  },
  globalTypo1: {
    top: 0,
    color: Color.lightThemeWhite1,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 21,
    fontSize: FontSize.size_2xl,
    position: "absolute",
  },
  mdichessIconLayout1: {
    left: 0,
    height: 14,
    width: 15,
  },
  tabChild: {
    backgroundColor: Color.midnightblue,
  },
  selectedChild: {
    backgroundColor: Color.steelblue_100,
    width: 117,
  },
  national1: {
    width: 65,
    height: 20,
  },
  national: {
    left: 135,
    top: 7,
    position: "absolute",
  },
  mdichessQueenIcon: {
    left: 126,
    top: 10,
  },
  selected: {
    left: 3,
    width: 200,
    top: 3,
  },
  global: {
    left: 13,
    width: 45,
    height: 20,
  },
  mdichessQueenIcon1: {
    top: 4,
  },
  tabItem: {
    top: 9,
    left: 31,
    width: 58,
    height: 20,
    position: "absolute",
  },
  friends: {
    left: 14,
    width: 47,
    height: 20,
  },
  mdichessQueenIcon2: {
    top: 3,
  },
  tabItem1: {
    left: 246,
    width: 61,
    top: 10,
    height: 20,
    position: "absolute",
  },
  tab: {
    top: 180,
    left: 18,
  },
});

export default LeaderboardChips;
