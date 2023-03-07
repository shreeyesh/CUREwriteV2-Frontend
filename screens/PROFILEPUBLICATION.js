import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TextInput,
  Pressable,
  TouchableHighlight,
  Text,
} from "react-native";
import PublicationTextSpace from "../components/PublicationTextSpace";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const PROFILEPUBLICATION = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profilePublication}>
      <View style={[styles.profilePublicationInner, styles.groupParentLayout]}>
        <View
          style={[
            styles.groupParent,
            styles.groupParentPosition,
            styles.groupParentLayout,
          ]}
        >
          <PublicationTextSpace
            studyTitle="Oral Bacteria Study"
            rectangle22472Top={0}
          />
          <PublicationTextSpace
            studyTitle="Oral Medical Trial"
            rectangle22472Top={233}
          />
          <PublicationTextSpace
            studyTitle="Oral Bleeding"
            rectangle22472Top={466}
          />
          <PublicationTextSpace
            studyTitle="Painless tooth removal"
            rectangle22472Top={699}
          />
          <PublicationTextSpace
            studyTitle="Dental Clinical Trial"
            rectangle22472Top={932}
          />
        </View>
      </View>
      <View style={styles.groupInnerPosition}>
        <Image
          style={styles.groupChild}
          resizeMode="cover"
          source={require("../assets/ellipse-2.png")}
        />
        <Image
          style={[styles.groupItem, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/group-149.png")}
        />
        <View style={[styles.groupInner, styles.groupInnerPosition]} />
        <Image
          style={styles.blackBase21}
          resizeMode="cover"
          source={require("../assets/black-base-2-1.png")}
        />
        <View style={[styles.header, styles.headerLayout]}>
          <ImageBackground
            style={[
              styles.verticalLogo1Icon,
              styles.headerLayout,
              styles.groupParentPosition,
            ]}
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
            style={[styles.iconlybrokensearch, styles.iconLayout1]}
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
              style={styles.iconLayout}
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
                    ]}
                  >
                    <TouchableHighlight
                      style={styles.wrapperPosition}
                      underlayColor="#fff"
                      activeOpacity={0.2}
                      onPress={() => {}}
                    >
                      <Image
                        style={[
                          styles.chatIcon,
                          styles.wrapperPosition,
                          styles.iconLayout1,
                        ]}
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
      <Pressable
        style={styles.iconlylightOutlinearrowL}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={[styles.iconLayout, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/iconlylightoutlinearrowleft2.png")}
        />
      </Pressable>
      <Text style={styles.citation}>Citation</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupParentLayout: {
    width: 335,
    position: "absolute",
  },
  groupParentPosition: {
    left: 0,
    top: 0,
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  groupInnerPosition: {
    height: 96,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  headerLayout: {
    height: 46,
    position: "absolute",
  },
  wrapperPosition: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    right: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  groupParent: {
    height: 1159,
  },
  profilePublicationInner: {
    top: 155,
    height: 657,
    left: 20,
  },
  groupChild: {
    top: 48,
    width: 37,
    height: 37,
    left: 20,
    position: "absolute",
  },
  groupItem: {
    height: "17.61%",
    width: "4.64%",
    top: "59.79%",
    right: "25.74%",
    bottom: "22.6%",
    left: "69.62%",
    position: "absolute",
    overflow: "hidden",
  },
  groupInner: {
    opacity: 0.99,
    backgroundColor: Color.lightThemeWhite1,
    height: 96,
  },
  blackBase21: {
    height: 41,
    width: 375,
    left: 0,
    top: 0,
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
    overflow: "hidden",
  },
  iconLayout: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  frame: {
    left: 283,
    top: 13,
    width: 23,
    height: 23,
    position: "absolute",
  },
  chatIcon: {
    overflow: "hidden",
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
  iconlylightOutlinearrowL: {
    left: "7.2%",
    top: "12.44%",
    right: "90.13%",
    bottom: "85.32%",
    width: "2.67%",
    height: "2.25%",
    position: "absolute",
  },
  citation: {
    top: 97,
    left: 127,
    fontSize: FontSize.size_8xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemibold,
    color: Color.lightThemeDark1,
    textAlign: "center",
    width: 120,
    position: "absolute",
  },
  profilePublication: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.lightThemeWhite1,
  },
});

export default PROFILEPUBLICATION;
