import * as React from "react";
import {
  StyleSheet,
  View,
  Pressable,
  Image,
  TouchableHighlight,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color } from "../GlobalStyles";

const SectionForm = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.groupParent}>
      <View style={styles.groupChildPosition}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <View style={styles.bottomTabsNotification}>
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
          <TouchableHighlight
            style={styles.iconlylightOutlinehome}
            underlayColor="#fff"
            activeOpacity={0.2}
            onPress={() => navigation.navigate("HOMEPAGEQUESTION")}
          >
            <View style={[styles.homePosition, styles.homePosition1]}>
              <Image
                style={[
                  styles.homePosition,
                  styles.homePosition1,
                  styles.iconLayout,
                ]}
                resizeMode="cover"
                source={require("../assets/fill1.png")}
              />
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.vectorWrapper}
            underlayColor="#fff"
            activeOpacity={0.2}
            onPress={() => navigation.navigate("ADDPOST")}
          >
            <Image
              style={[styles.homePosition1, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/iconlybrokenplus.png")}
            />
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.combinedShapeWrapper}
            underlayColor="#fff"
            activeOpacity={0.2}
            onPress={() => navigation.navigate("LEADERBOARDNATIONAL")}
          >
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require("../assets/combinedshape.png")}
            />
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.notification, styles.homePosition]}
            underlayColor="#fff"
            activeOpacity={0.2}
            onPress={() => navigation.navigate("NOTIFICATION")}
          >
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require("../assets/combinedshape1.png")}
            />
          </TouchableHighlight>
        </View>
      </View>
      <Image
        style={[styles.groupItem, styles.iconLayout]}
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
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  homePosition1: {
    width: "100%",
    height: "100%",
    bottom: "0%",
    left: "0%",
    right: "0%",
    top: "0%",
  },
  homePosition: {
    bottom: "0%",
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.white_100,
    opacity: 0.9,
  },
  vectorIcon: {
    width: "7.79%",
    left: "92.21%",
    bottom: "7.55%",
    right: "0%",
    top: "0%",
    height: "92.45%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  iconlylightOutlinehome: {
    right: "91.88%",
    left: "0%",
    bottom: "3.85%",
    top: "3.7%",
    width: "8.12%",
    height: "92.45%",
    position: "absolute",
  },
  vectorWrapper: {
    right: "45.78%",
    left: "46.1%",
    width: "8.12%",
    bottom: "7.55%",
    top: "0%",
    height: "92.45%",
    position: "absolute",
  },
  combinedShapeWrapper: {
    right: "68.83%",
    left: "23.05%",
    bottom: "3.85%",
    top: "3.7%",
    width: "8.12%",
    height: "92.45%",
    position: "absolute",
  },
  notification: {
    height: "96.3%",
    width: "7.47%",
    right: "22.4%",
    left: "70.13%",
    bottom: "0%",
    top: "3.7%",
  },
  bottomTabsNotification: {
    height: "38.84%",
    width: "82.13%",
    top: "30.16%",
    right: "9.07%",
    bottom: "31%",
    left: "8.8%",
    position: "absolute",
  },
  groupItem: {
    height: "37.4%",
    width: "6.13%",
    top: "33.03%",
    right: "27.47%",
    bottom: "29.57%",
    left: "66.4%",
    position: "absolute",
  },
  groupParent: {
    top: 743,
    height: 70,
    width: 375,
    left: 0,
    position: "absolute",
  },
});

export default SectionForm;
