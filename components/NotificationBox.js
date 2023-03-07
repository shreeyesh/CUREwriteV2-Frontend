import * as React from "react";
import {
  Pressable,
  Image,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const NotificationBox = ({ userName, recency }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.notificationbox}>
      <TouchableHighlight
        style={styles.unsplashp5bobf0xjua}
        underlayColor="#fff"
        activeOpacity={0.2}
        onPress={() => navigation.navigate("PROFILELIFESTYLE")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/unsplashp5bobf0xjua6.png")}
        />
      </TouchableHighlight>
      <Text style={[styles.drAbdulQudusContainer, styles.justNowFlexBox]}>
        <Text style={styles.drAbdulQudus}>{userName}</Text>
        <Text style={styles.justNowTypo}>Followed you</Text>
      </Text>
      <Text style={[styles.justNow, styles.justNowTypo, styles.justNowFlexBox]}>
        {recency}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  justNowFlexBox: {
    textAlign: "center",
    color: Color.lightThemeDark1,
    position: "absolute",
  },
  justNowTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  icon: {
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    height: "100%",
  },
  unsplashp5bobf0xjua: {
    left: "0%",
    top: "0%",
    right: "83.33%",
    bottom: "0%",
    width: "16.67%",
    height: "100%",
    position: "absolute",
  },
  drAbdulQudus: {
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemibold,
  },
  drAbdulQudusContainer: {
    top: "2.13%",
    left: "19.86%",
    fontSize: FontSize.size_5xl,
  },
  justNow: {
    top: "53.19%",
    left: "18.79%",
    fontSize: FontSize.size_2xl,
  },
  notificationbox: {
    top: 31,
    left: 0,
    width: 282,
    height: 47,
    position: "absolute",
  },
});

export default NotificationBox;
