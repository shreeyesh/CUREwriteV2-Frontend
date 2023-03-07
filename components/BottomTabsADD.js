import * as React from "react";
import { useMemo } from "react";
import { StyleSheet, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ProfileTab from "../components/ProfileTab";
import HomeTab from "../components/HomeTab";
import CreateTab from "../components/CreateTab";
import LeaderboardTab from "../components/LeaderboardTab";
import NotificationTab from "../components/NotificationTab";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const BottomTabsADD = ({
  bottomTabsADDHeight,
  bottomTabsADDTop,
  bottomTabsADDBottom,
  bottomTabsADDRight,
  bottomTabsADDLeft,
}) => {
  const bottomTabsADDStyle = useMemo(() => {
    return {
      ...getStyleValue("height", bottomTabsADDHeight),
      ...getStyleValue("top", bottomTabsADDTop),
      ...getStyleValue("bottom", bottomTabsADDBottom),
      ...getStyleValue("right", bottomTabsADDRight),
      ...getStyleValue("left", bottomTabsADDLeft),
    };
  }, [
    bottomTabsADDHeight,
    bottomTabsADDTop,
    bottomTabsADDBottom,
    bottomTabsADDRight,
    bottomTabsADDLeft,
  ]);

  const navigation = useNavigation();

  return (
    <View style={[styles.bottomTabsAdd, bottomTabsADDStyle]}>
      <View style={styles.bottomTabsLeaderboards}>
        <ProfileTab />
        <HomeTab
          onIconlyLightOutlineHomePress={() =>
            navigation.navigate("HOMEPAGEQUESTION")
          }
        />
        <CreateTab onGroupTouchableHighlightPress={() => {}} />
        <LeaderboardTab
          onGroupTouchableHighlightPress={() =>
            navigation.navigate("LEADERBOARDNATIONAL")
          }
        />
        <NotificationTab
          onNotificationPress={() => navigation.navigate("NOTIFICATION")}
        />
      </View>
      <Image
        style={styles.bottomTabsAddChild}
        resizeMode="cover"
        source={require("../assets/alert.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bottomTabsLeaderboards: {
    height: "96.43%",
    width: "100%",
    top: "3.57%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
  },
  bottomTabsAddChild: {
    top: 0,
    left: 235,
    width: 7,
    height: 6,
    position: "absolute",
  },
  bottomTabsAdd: {
    height: "3.45%",
    width: "82.13%",
    top: "94.09%",
    right: "9.07%",
    bottom: "2.46%",
    left: "8.8%",
    position: "absolute",
  },
});

export default BottomTabsADD;
