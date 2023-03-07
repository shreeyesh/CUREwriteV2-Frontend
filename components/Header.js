import * as React from "react";
import { useMemo } from "react";
import {
  ImageBackground,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  TouchableHighlight,
  View,
  ImageSourcePropType,
} from "react-native";
import { Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const Header = ({
  searchValue,
  onFramePress,
  onIconlyBrokenChatPress,
  icon,
  headerTop,
  headerLeft,
}) => {
  const headerStyle = useMemo(() => {
    return {
      ...getStyleValue("top", headerTop),
      ...getStyleValue("left", headerLeft),
    };
  }, [headerTop, headerLeft]);

  return (
    <View style={[styles.header, styles.headerLayout, headerStyle]}>
      <ImageBackground
        style={[styles.verticalLogo1Icon, styles.headerLayout]}
        resizeMode="cover"
        source={require("../assets/verticallogo1.png")}
      />
      <Image
        style={styles.headerChild}
        resizeMode="cover"
        source={require("../assets/rectangle-55.png")}
      />
      <TextInput
        style={styles.search}
        placeholder="Search"
        keyboardType="default"
        placeholderTextColor="rgba(105, 111, 140, 0.9)"
        value={searchValue}
      />
      <Image
        style={[styles.iconlybrokensearch, styles.chatIconLayout]}
        resizeMode="cover"
        source={require("../assets/iconlybrokensearch.png")}
      />
      <TouchableHighlight
        style={styles.frame}
        underlayColor="#fff"
        activeOpacity={0.2}
        onPress={onFramePress}
      >
        <Image style={styles.icon} resizeMode="cover" source={icon} />
      </TouchableHighlight>
      <View style={styles.headerInner}>
        <View style={styles.wrapperPosition}>
          <View style={styles.wrapperPosition}>
            <View style={styles.wrapperPosition}>
              <View
                style={[styles.iconlybrokenchatWrapper, styles.wrapperPosition]}
              >
                <TouchableHighlight
                  style={styles.wrapperPosition}
                  underlayColor="#fff"
                  activeOpacity={0.2}
                  onPress={onIconlyBrokenChatPress}
                >
                  <Image
                    style={[styles.wrapperPosition, styles.chatIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/chat-button.png")}
                  />
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerLayout: {
    height: 46,
    position: "absolute",
  },
  chatIconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  wrapperPosition: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    right: "0%",
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  verticalLogo1Icon: {
    top: 0,
    left: 0,
    width: 46,
  },
  headerChild: {
    top: 9,
    left: 45,
    borderRadius: Border.br_6xl,
    width: 269,
    height: 31,
    position: "absolute",
  },
  search: {
    top: 16,
    left: 70,
    position: "absolute",
  },
  iconlybrokensearch: {
    height: "21.74%",
    width: "2.84%",
    top: "43.48%",
    right: "81.53%",
    bottom: "34.78%",
    left: "15.63%",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
    overflow: "hidden",
  },
  frame: {
    left: 283,
    top: 13,
    width: 23,
    height: 23,
    position: "absolute",
  },
  iconlybrokenchatWrapper: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
  },
  headerInner: {
    height: "54.35%",
    width: "7.1%",
    top: "26.09%",
    bottom: "19.57%",
    left: "92.9%",
    right: "0%",
    position: "absolute",
  },
  header: {
    top: 41,
    left: 10,
    width: 352,
  },
});

export default Header;
