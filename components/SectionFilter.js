import * as React from "react";
import { StyleSheet, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BottomTabsNotification from "../components/BottomTabsNotification";
import { Color } from "../GlobalStyles";

const SectionFilter = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.groupParent}>
      <View style={styles.groupChildPosition}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <BottomTabsNotification />
      </View>
      <Image
        style={styles.groupItem}
        resizeMode="cover"
        source={require("../assets/group-901.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    top: 0,
    height: 70,
    width: 375,
    left: 0,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.white_100,
    opacity: 0.9,
  },
  groupItem: {
    height: "37.4%",
    width: "6.13%",
    top: "33.03%",
    right: "27.47%",
    bottom: "29.57%",
    left: "66.4%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  groupParent: {
    top: 742,
    height: 70,
    width: 375,
    left: 0,
    position: "absolute",
  },
});

export default SectionFilter;
