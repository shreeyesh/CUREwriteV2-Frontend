import * as React from "react";
import { Pressable, Image, StyleSheet, TouchableHighlight } from "react-native";

const NotificationTab = ({ onNotificationPress }) => {
  return (
    <TouchableHighlight
      style={[styles.notification, styles.notificationPosition]}
      underlayColor="#fff"
      activeOpacity={0.2}
      onPress={onNotificationPress}
    >
      <Image
        style={[styles.combinedShapeIcon, styles.notificationPosition]}
        resizeMode="cover"
        source={require("../assets/combinedshape1.png")}
      />
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  notificationPosition: {
    bottom: "0%",
    position: "absolute",
  },
  combinedShapeIcon: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  notification: {
    height: "96.3%",
    width: "7.47%",
    top: "3.7%",
    right: "22.4%",
    left: "70.13%",
  },
});

export default NotificationTab;
