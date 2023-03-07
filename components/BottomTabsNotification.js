import * as React from "react";
import {
  Pressable,
  Image,
  StyleSheet,
  TouchableHighlight,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import UserTab from "../components/UserTab";
import HomeTab from "../components/HomeTab";
import LeaderboardTab from "../components/LeaderboardTab";
import icon from "../assets/vector.png"
import NotificationTab from "../components/NotificationTab";

const BottomTabsNotification = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bottomTabsNotification}>
      <View style={styles.vectorIconPosition}>
        <UserTab
          onVectorPress={() => navigation.navigate("PROFILELIFESTYLE")}
          icon={icon}
        />
        <HomeTab
          onIconlyLightOutlineHomePress={() =>
            navigation.navigate("HOMEPAGEQUESTION")
          }
        />
        <TouchableHighlight
          style={styles.vectorWrapper}
          underlayColor="#fff"
          activeOpacity={0.2}
          onPress={() => navigation.navigate("ADDPOST")}
        >
          <Image
            style={[styles.vectorIcon, styles.vectorIconPosition]}
            resizeMode="cover"
            source={require("../assets/iconlybrokenplus.png")}
          />
        </TouchableHighlight>
        <LeaderboardTab
          onGroupTouchableHighlightPress={() =>
            navigation.navigate("LEADERBOARDNATIONAL")
          }
        />
        <NotificationTab
          onNotificationPress={() => navigation.navigate("NOTIFICATION")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIconPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    height: "100%",
    top: "0%",
    position: "absolute",
  },
  vectorIcon: {
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorWrapper: {
    height: "92.45%",
    width: "8.12%",
    right: "45.78%",
    bottom: "7.55%",
    left: "46.1%",
    top: "0%",
    position: "absolute",
  },
  bottomTabsNotification: {
    height: "38.84%",
    width: "82.13%",
    top: "31.6%",
    right: "9.07%",
    bottom: "29.57%",
    left: "8.8%",
    position: "absolute",
  },
});

export default BottomTabsNotification;
