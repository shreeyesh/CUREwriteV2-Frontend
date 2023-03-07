import * as React from "react";
import { useMemo } from "react";
import { StyleSheet, View, ImageSourcePropType } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ProfileTab from "../components/ProfileTab";
import UserTab from "../components/UserTab";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const BottomTabsLeaderboards = ({
  bottomTabsLeaderboardsRight,
  bottomTabsLeaderboardsLeft,
  icon,
}) => {
  const bottomTabsLeaderboardsStyle = useMemo(() => {
    return {
      ...getStyleValue("right", bottomTabsLeaderboardsRight),
      ...getStyleValue("left", bottomTabsLeaderboardsLeft),
    };
  }, [bottomTabsLeaderboardsRight, bottomTabsLeaderboardsLeft]);

  const navigation = useNavigation();

  return (
    <View style={[styles.bottomTabsLeaderboards, bottomTabsLeaderboardsStyle]}>
      <ProfileTab />
      <UserTab
        onVectorPress={() => navigation.navigate("HOMEPAGEQUESTION")}
        vectorLeft="0%"
        vectorTop="3.7%"
        vectorRight="91.88%"
        vectorBottom="3.85%"
        vectorWidth="8.12%"
        icon={icon}
      />
      <UserTab
        onVectorPress={() => navigation.navigate("ADDPOST")}
        vectorLeft="46.1%"
        vectorRight="45.78%"
        vectorWidth="8.12%"
        icon={icon}
      />
      <UserTab
        onVectorPress={() => {}}
        vectorLeft="23.05%"
        vectorTop="3.7%"
        vectorRight="68.83%"
        vectorBottom="3.85%"
        vectorWidth="8.12%"
        icon={icon}
      />
      <UserTab
        onVectorPress={() => navigation.navigate("NOTIFICATION")}
        vectorLeft="70.13%"
        vectorTop="3.7%"
        vectorRight="22.4%"
        vectorBottom="0%"
        vectorWidth="7.47%"
        vectorHeight="96.3%"
        icon={icon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bottomTabsLeaderboards: {
    position: "absolute",
    height: "38.84%",
    width: "82.13%",
    top: "31.6%",
    right: "8.8%",
    bottom: "29.57%",
    left: "9.07%",
  },
});

export default BottomTabsLeaderboards;
