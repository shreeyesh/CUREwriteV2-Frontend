import * as React from "react";
import { useCallback } from "react";
import {
  Image,
  StyleSheet,
  View,
  Pressable,
  TouchableHighlight,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import BottomTabsADD from "../components/BottomTabsADD";
import TopTabs from "../components/TopTabs";
import PostCard from "../components/PostCard";
import { Color } from "../GlobalStyles";

const ADDPOST = () => {
  const navigation = useNavigation();

  const onFrameIcon1Click = useCallback(() => {
    Alert.alert("Choose Image", "");
  }, []);

  return (
    <View style={[styles.addPost, styles.iconLayout]}>
      <View style={styles.groupInnerPosition}>
        <Image
          style={styles.groupChild}
          resizeMode="cover"
          source={require("../assets/ellipse-2.png")}
        />
        <Image
          style={styles.groupItem}
          resizeMode="cover"
          source={require("../assets/group-149.png")}
        />
        <View style={[styles.groupInner, styles.groupInnerPosition]} />
        <Header
          onFramePress={() => {}}
          onIconlyBrokenChatPress={() => {}}
          icon={require("../assets/frame.png")}
        />
      </View>
      <BottomTabsADD />
      <TopTabs />
      <PostCard
        abstractText="Select Image(s)"
        titleText="Add caption"
        researchTypeText="Add hastags"
        propWidth={118}
        propWidth1={91}
        onUploadButtonPress={() => navigation.navigate("POSTSUCCESS")}
        onRectangleTouchableHighligPress={() =>
          navigation.navigate("POSTSUCCESS")
        }
      />
      <TouchableHighlight
        style={styles.frame}
        underlayColor="#fff"
        activeOpacity={0.2}
        onPress={onFrameIcon1Click}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/frame8.png")}
        />
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  groupInnerPosition: {
    height: 96,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    top: 48,
    left: 20,
    width: 37,
    height: 37,
    position: "absolute",
  },
  groupItem: {
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
  groupInner: {
    opacity: 0.99,
    backgroundColor: Color.lightThemeWhite1,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  frame: {
    left: 312,
    top: 301,
    width: 24,
    height: 24,
    position: "absolute",
  },
  addPost: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.lightThemeWhite1,
  },
});

export default ADDPOST;
