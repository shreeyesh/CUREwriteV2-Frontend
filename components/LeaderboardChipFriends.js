import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const LeaderboardChipFriends = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.tab}>
      <View style={[styles.tabChild, styles.childLayout]} />
      <View style={[styles.selected, styles.selectedLayout]}>
        <View
          style={[
            styles.selectedChild,
            styles.selectedLayout,
            styles.childLayout,
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
          source={require("../assets/mdichessqueen3.png")}
        />
      </View>
      <Pressable
        style={styles.tabItem}
        onPress={() => navigation.navigate("LEADERBOARDGLOBAL")}
      >
        <Text style={[styles.global, styles.globalTypo, styles.globalTypo1]}>
          Global
        </Text>
        <Image
          style={[styles.mdichessQueenIcon1, styles.mdichessIconLayout]}
          resizeMode="cover"
          source={require("../assets/mdichessqueen1.png")}
        />
      </Pressable>
      <View style={styles.tabItem1}>
        <Text style={[styles.friends, styles.globalTypo, styles.globalTypo1]}>
          Friends
        </Text>
        <Image
          style={[styles.mdichessQueenIcon2, styles.mdichessIconLayout]}
          resizeMode="cover"
          source={require("../assets/mdichessqueen2.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  childLayout: {
    borderRadius: Border.br_xl,
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
    left: 0,
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
  tabChild: {
    backgroundColor: Color.midnightblue,
    left: 0,
    borderRadius: Border.br_xl,
    height: 39,
    width: 335,
    position: "absolute",
  },
  selectedChild: {
    left: 83,
    backgroundColor: Color.steelblue_100,
    width: 117,
  },
  national1: {
    width: 65,
    height: 20,
  },
  national: {
    left: 9,
    top: 7,
    position: "absolute",
  },
  mdichessQueenIcon: {
    top: 10,
  },
  selected: {
    left: 131,
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
    top: 188,
    left: 18,
    height: 39,
    width: 335,
    position: "absolute",
  },
});

export default LeaderboardChipFriends;
