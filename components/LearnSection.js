import * as React from "react";
import {
  Pressable,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Image,
  ImageBackground,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, Padding } from "../GlobalStyles";

const LearnSection = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.segmentedpickerParent}>
      <View style={styles.segmentedpicker}>
        <TouchableHighlight
          style={styles.optionFlexBox}
          underlayColor="#fff"
          activeOpacity={0.2}
          onPress={() => navigation.navigate("HOMEPAGEPOST")}
        >
          <>
            <View />
            <Text>Post</Text>
          </>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.optionFlexBox}
          underlayColor="#fff"
          activeOpacity={0.2}
          onPress={() => navigation.navigate("HOMEPAGEQUESTION")}
        >
          <>
            <Image
              resizeMode="cover"
              source={require("../assets/separator1.png")}
            />
            <Text adjustsFontSizeToFit>Question</Text>
          </>
        </TouchableHighlight>
        <TouchableHighlight
          style={[
            styles.option2,
            styles.optionFlexBox,
            styles.option2ShadowBox,
          ]}
          underlayColor="#fff"
          activeOpacity={0.2}
          onPress={() => {}}
        >
          <>
            <Image
              resizeMode="cover"
              source={require("../assets/separator.png")}
            />
            <Text>Research</Text>
          </>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.optionFlexBox}
          underlayColor="#fff"
          activeOpacity={0.2}
          onPress={() => {}}
        >
          <>
            <View />
            <Text>Learn</Text>
          </>
        </TouchableHighlight>
      </View>
      <View style={[styles.header, styles.headerPosition]}>
        <ImageBackground
          style={[styles.verticalLogo1Icon, styles.headerPosition]}
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
          onPress={() => {}}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/frame.png")}
          />
        </TouchableHighlight>
        <View style={styles.headerInner}>
          <View style={styles.wrapperPosition}>
            <View style={styles.wrapperPosition}>
              <View style={styles.wrapperPosition}>
                <View
                  style={[
                    styles.iconlybrokenchatWrapper,
                    styles.wrapperPosition,
                    styles.option2ShadowBox,
                  ]}
                >
                  <TouchableHighlight
                    style={styles.wrapperPosition}
                    underlayColor="#fff"
                    activeOpacity={0.2}
                    onPress={() => {}}
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
    </View>
  );
};

const styles = StyleSheet.create({
  optionFlexBox: {
    flex: 1,
    alignSelf: "stretch",
  },
  option2ShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  headerPosition: {
    height: 46,
    left: 0,
    top: 0,
    position: "absolute",
  },
  chatIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
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
  option2: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.midnightblue,
    shadowColor: "rgba(0, 0, 0, 0.12)",
    shadowRadius: 8,
    elevation: 8,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.04)",
    borderWidth: 0.5,
  },
  segmentedpicker: {
    top: 64,
    borderRadius: Border.br_md,
    backgroundColor: Color.gray_1300,
    shadowRadius: 10,
    elevation: 10,
    width: 335,
    height: 32,
    flexDirection: "row",
    padding: Padding.p_3xs,
    overflow: "hidden",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    left: 10,
    position: "absolute",
  },
  verticalLogo1Icon: {
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
    shadowRadius: 40,
    elevation: 40,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    bottom: "0%",
    top: "0%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
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
    width: 352,
  },
  segmentedpickerParent: {
    height: 96,
    width: 352,
    left: 10,
    top: 0,
    position: "absolute",
  },
});

export default LearnSection;
