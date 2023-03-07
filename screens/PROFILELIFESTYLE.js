import * as React from "react";
import { useCallback } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableHighlight,
  ImageBackground,
  TextInput,
  Alert,
} from "react-native";
import ExperienceCard from "../components/ExperienceCard";
import SectionForm from "../components/SectionForm";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const PROFILELIFESTYLE = () => {
  const onFrameIcon1Click = useCallback(() => {
    Alert.alert("Added to Connections", "");
  }, []);

  return (
    <View style={styles.profileLifestyle}>
      <View style={[styles.profileLifestyleInner, styles.groupParentLayout]}>
        <View style={[styles.groupParent, styles.groupParentLayout]}>
          <View style={[styles.groupParent, styles.groupParentLayout]}>
            <Image
              style={styles.unsplashp5bobf0xjuaIcon}
              resizeMode="cover"
              source={require("../assets/unsplashp5bobf0xjua5.png")}
            />
            <Text style={[styles.drAbdulQudus, styles.drAbdulQudusTypo]}>
              Dr. Abdul Qudus
            </Text>
            <Text style={[styles.abeokutaOgun, styles.drAbdulQudusTypo]}>
              Abeokuta, Ogun
            </Text>
            <View style={[styles.groupWrapper, styles.groupLayout1]}>
              <View style={[styles.groupContainer, styles.groupLayout1]}>
                <View style={[styles.parent, styles.parentPosition]}>
                  <Text
                    style={[styles.text, styles.textTypo, styles.textTypo1]}
                  >
                    87
                  </Text>
                  <Text style={[styles.publication, styles.textTypo]}>
                    Publication
                  </Text>
                </View>
                <View style={[styles.group, styles.parentPosition]}>
                  <Text
                    style={[styles.text1, styles.textTypo, styles.textTypo1]}
                  >
                    870
                  </Text>
                  <Text style={[styles.publication, styles.textTypo]}>
                    Citations
                  </Text>
                </View>
                <View style={[styles.kParent, styles.parentPosition]}>
                  <Text
                    style={[
                      styles.k,
                      styles.kLayout,
                      styles.textTypo,
                      styles.textTypo1,
                    ]}
                  >
                    15k
                  </Text>
                  <Text style={[styles.publication, styles.textTypo]}>
                    Connections
                  </Text>
                </View>
                <View style={[styles.groupChild, styles.groupLayout]} />
                <View style={[styles.groupItem, styles.groupLayout]} />
              </View>
            </View>
            <View style={styles.aboutParent}>
              <Image
                style={styles.aboutIcon}
                resizeMode="cover"
                source={require("../assets/about.png")}
              />
              <Image
                style={[styles.mbbsPhdFellowIceColle, styles.mt12]}
                resizeMode="cover"
                source={require("../assets/mbbs-phd-fellow-ice-college-of-surgeons-ex-professor--head-of-department-department-of-neurosurgery-dhaka-medical-college--hospital.png")}
              />
            </View>
            <Image
              style={[styles.frameIcon, styles.kLayout]}
              resizeMode="cover"
              source={require("../assets/frame22.png")}
            />
            <TouchableHighlight
              style={styles.frame}
              underlayColor="#fff"
              activeOpacity={0.2}
              onPress={onFrameIcon1Click}
            >
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/frame23.png")}
              />
            </TouchableHighlight>
            <View style={styles.unsplashxejossdcnr8Parent}>
              <Image
                style={[
                  styles.unsplashxejossdcnr8Icon,
                  styles.iconLayout2,
                  styles.iconLayout3,
                ]}
                resizeMode="cover"
                source={require("../assets/unsplashxejossdcnr8.png")}
              />
              <Image
                style={[
                  styles.unsplashhaznhev2wxqIcon,
                  styles.iconLayout2,
                  styles.iconLayout3,
                ]}
                resizeMode="cover"
                source={require("../assets/unsplashhaznhev2wxq.png")}
              />
              <Image
                style={[
                  styles.unsplash8nwfh8I9ugIcon,
                  styles.iconLayout2,
                  styles.iconLayout3,
                ]}
                resizeMode="cover"
                source={require("../assets/unsplash8nwfh8-i9ug.png")}
              />
              <Image
                style={[styles.unsplashuc0hzduitwyIcon, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/unsplashuc0hzduitwy.png")}
              />
              <Image
                style={[styles.unsplashcssvezachvqIcon, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/unsplashcssvezachvq.png")}
              />
              <Image
                style={[styles.unsplash0boea7nbluuIcon, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/unsplashcssvezachvq.png")}
              />
              <Image
                style={[styles.unsplashtld6icolyb0Icon, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/unsplashtld6icolyb0.png")}
              />
              <Image
                style={[styles.unsplashkcaC3f3feIcon, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/unsplashkcac3f-3fe.png")}
              />
              <Image
                style={[styles.unsplashiicyiapyggiIcon, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/unsplashiicyiapyggi.png")}
              />
            </View>
          </View>
          <ExperienceCard
            profileImageUrl={require("../assets/rectangle-22.png")}
            qualificationText={`Head Doctor  - Dental & Oral Care`}
            locationText="AIMS, India"
            experienceText="Jun 2022 — Present"
            durationText="1 yrs 02 mos"
            propTop={307}
            onGroupTouchableHighlightPress={() => {}}
          />
          <ExperienceCard
            profileImageUrl={require("../assets/rectangle-221.png")}
            qualificationText="MBBS  - Harvard Medical School"
            locationText="New York, USA"
            experienceText="Jun 2017 — June 2022"
            durationText="5 yrs 02 mos"
            propTop={389}
            onGroupTouchableHighlightPress={() => {}}
          />
        </View>
      </View>
      <View style={styles.ellipseParentPosition}>
        <Image
          style={styles.groupInner}
          resizeMode="cover"
          source={require("../assets/ellipse-2.png")}
        />
        <Image
          style={[styles.groupIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/group-149.png")}
        />
        <View style={[styles.rectangleView, styles.ellipseParentPosition]} />
        <View style={[styles.header, styles.headerLayout]}>
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
          />
          <Image
            style={[styles.iconlybrokensearch, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/iconlybrokensearch.png")}
          />
          <TouchableHighlight
            style={styles.frame1}
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
            <View style={styles.chatIconPosition}>
              <View style={styles.chatIconPosition}>
                <View style={styles.chatIconPosition}>
                  <View
                    style={[
                      styles.iconlybrokenchatWrapper,
                      styles.chatIconPosition,
                    ]}
                  >
                    <TouchableHighlight
                      style={styles.chatIconPosition}
                      underlayColor="#fff"
                      activeOpacity={0.2}
                      onPress={() => {}}
                    >
                      <Image
                        style={[styles.chatIconPosition, styles.iconLayout]}
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
      <Image
        style={[styles.profileLifestyleChild, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/group-902.png")}
      />
      <SectionForm />
    </View>
  );
};

const styles = StyleSheet.create({
  mt12: {
    marginTop: 12,
  },
  groupParentLayout: {
    width: 324,
    position: "absolute",
  },
  drAbdulQudusTypo: {
    textAlign: "left",
    color: Color.lightThemeDark1,
    left: 86,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    position: "absolute",
  },
  groupLayout1: {
    height: 43,
    left: 0,
    width: 324,
    position: "absolute",
  },
  parentPosition: {
    height: 39,
    top: 1,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_4xl,
    textAlign: "left",
    color: Color.lightThemeDark1,
  },
  textTypo1: {
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_4xl,
    top: 0,
  },
  kLayout: {
    width: 24,
    position: "absolute",
  },
  groupLayout: {
    height: 44,
    width: 1,
    borderRightWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    top: 0,
    position: "absolute",
  },
  iconLayout2: {
    height: 99,
    width: 99,
    borderRadius: Border.br_lg,
    position: "absolute",
  },
  iconLayout3: {
    top: 218,
    width: 99,
    borderRadius: Border.br_lg,
  },
  iconLayout1: {
    top: 109,
    height: 99,
    width: 99,
    borderRadius: Border.br_lg,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  ellipseParentPosition: {
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
  chatIconPosition: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    right: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  unsplashp5bobf0xjuaIcon: {
    left: 4,
    width: 67,
    height: 67,
    top: 0,
    position: "absolute",
  },
  drAbdulQudus: {
    top: 11,
    fontSize: FontSize.size_8xl,
    width: 182,
  },
  abeokutaOgun: {
    top: 38,
    fontSize: FontSize.size_2xl,
  },
  text: {
    left: 30,
    width: 18,
    position: "absolute",
  },
  publication: {
    top: 18,
    fontFamily: FontFamily.poppinsRegular,
    left: 0,
    position: "absolute",
  },
  parent: {
    width: 78,
    left: 0,
  },
  text1: {
    left: 18,
    width: 27,
    position: "absolute",
  },
  group: {
    left: 125,
    width: 63,
  },
  k: {
    left: 32,
  },
  kParent: {
    left: 235,
    width: 89,
  },
  groupChild: {
    left: 92,
  },
  groupItem: {
    left: 210,
  },
  groupContainer: {
    top: 0,
  },
  groupWrapper: {
    top: 90,
  },
  aboutIcon: {
    width: 51,
    height: 13,
  },
  mbbsPhdFellowIceColle: {
    width: 306,
    height: 90,
  },
  aboutParent: {
    top: 158,
    left: 7,
    width: 311,
    position: "absolute",
  },
  frameIcon: {
    top: 14,
    left: 238,
    height: 24,
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  frame: {
    left: 295,
    top: 19,
    width: 29,
    height: 29,
    position: "absolute",
  },
  unsplashxejossdcnr8Icon: {
    left: 0,
  },
  unsplashhaznhev2wxqIcon: {
    left: 219,
  },
  unsplash8nwfh8I9ugIcon: {
    left: 109,
  },
  unsplashuc0hzduitwyIcon: {
    left: 0,
    top: 0,
  },
  unsplashcssvezachvqIcon: {
    left: 0,
  },
  unsplash0boea7nbluuIcon: {
    left: 219,
    top: 0,
  },
  unsplashtld6icolyb0Icon: {
    left: 219,
  },
  unsplashkcaC3f3feIcon: {
    left: 109,
    top: 0,
  },
  unsplashiicyiapyggiIcon: {
    left: 109,
  },
  unsplashxejossdcnr8Parent: {
    top: 491,
    left: 3,
    width: 318,
    height: 317,
    position: "absolute",
  },
  groupParent: {
    height: 808,
    left: 0,
    top: 0,
  },
  profileLifestyleInner: {
    top: 96,
    left: 25,
    height: 716,
  },
  groupInner: {
    top: 48,
    left: 20,
    width: 37,
    height: 37,
    position: "absolute",
  },
  groupIcon: {
    height: "17.61%",
    width: "4.64%",
    top: "59.79%",
    right: "25.74%",
    bottom: "22.6%",
    left: "69.62%",
    position: "absolute",
  },
  rectangleView: {
    opacity: 0.99,
    backgroundColor: Color.lightThemeWhite1,
    height: 96,
    width: 375,
  },
  verticalLogo1Icon: {
    width: 46,
    left: 0,
    top: 0,
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
  frame1: {
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
  profileLifestyleChild: {
    height: "3.33%",
    width: "82.4%",
    top: "94.21%",
    right: "8.8%",
    bottom: "2.46%",
    left: "8.8%",
    position: "absolute",
  },
  profileLifestyle: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.lightThemeWhite1,
  },
});

export default PROFILELIFESTYLE;
