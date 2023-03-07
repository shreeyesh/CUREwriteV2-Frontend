import * as React from "react";
import { useCallback } from "react";
import {
  Pressable,
  Image,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  ImageBackground,
  TextInput,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import FocusSection from "../components/FocusSection";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const HOMEPAGEQUESTION = () => {
  const navigation = useNavigation();

  const onAkarIconsshareBoxClick = useCallback(() => {
    Alert.alert("Files Downloading", "");
  }, []);

  return (
    <View style={styles.homepageQuestion}>
      <View style={styles.homepageQuestionInner}>
        <View style={styles.groupParent}>
          <View
            style={[
              styles.groupContainer,
              styles.groupLayout,
              styles.groupContainerLayout,
            ]}
          >
            <View
              style={[
                styles.archiveAddParent,
                styles.archiveLayout,
                styles.archivePosition1,
              ]}
            >
              <TouchableHighlight
                style={[styles.arrowIconLayout, styles.archivePosition]}
                underlayColor="#fff"
                activeOpacity={0.2}
                onPress={() => {}}
              >
                <Image
                  style={styles.iconLayout2}
                  resizeMode="cover"
                  source={require("../assets/archiveadd5.png")}
                />
              </TouchableHighlight>
              <TouchableHighlight
                style={[styles.arrowUp, styles.arrowIconLayout]}
                underlayColor="#fff"
                activeOpacity={0.2}
                onPress={() => {}}
              >
                <Image
                  style={styles.iconLayout2}
                  resizeMode="cover"
                  source={require("../assets/arrowup5.png")}
                />
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.arrowPosition}
                underlayColor="#fff"
                activeOpacity={0.2}
                onPress={() => {}}
              >
                <Image
                  style={styles.iconLayout2}
                  resizeMode="cover"
                  source={require("../assets/arrowdown5.png")}
                />
              </TouchableHighlight>
              <Text style={styles.k}>56.9k</Text>
              <TouchableHighlight
                style={styles.akarPosition}
                underlayColor="#fff"
                activeOpacity={0.2}
                onPress={onAkarIconsshareBoxClick}
              >
                <Image
                  style={[styles.icon3, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/akariconssharebox5.png")}
                />
              </TouchableHighlight>
            </View>
            <View
              style={[
                styles.classifyBurnsHowWillYouMParent,
                styles.groupContainerLayout,
              ]}
            >
              <Pressable
                style={[
                  styles.classifyBurnsHowContainer,
                  styles.containerPosition,
                ]}
                onPress={() => navigation.navigate("HOMEPAGEQUESTIONCOMMENTS")}
              >
                <Text style={styles.whatAreAboTypo}>
                  Classify Burns. How will you manage a case of 40% burn?
                </Text>
              </Pressable>
              <View style={[styles.mParent, styles.mParentPosition]}>
                <Text style={[styles.m, styles.mTypo]}>M</Text>
                <Text style={[styles.drMinAkhter, styles.drMinAkhterTypo]}>
                  Dr. Min Akhter
                </Text>
                <Text style={styles.hoursAgo}>15 hours ago</Text>
                <ImageBackground
                  style={[
                    styles.unsplashp5bobf0xjuaIcon,
                    styles.mParentPosition,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/unsplashp5bobf0xjua1.png")}
                />
              </View>
              <TouchableHighlight
                style={[styles.wrapper, styles.labelPosition]}
                underlayColor="#fff"
                activeOpacity={0.2}
                onPress={() => {}}
              >
                <Image
                  style={[styles.icon4, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/group-823.png")}
                />
              </TouchableHighlight>
            </View>
            <Pressable
              style={[styles.groupWrapper, styles.groupWrapperLayout]}
              onPress={() => navigation.navigate("HOMEPAGEQUESTIONCOMMENTS")}
            >
              <View
                style={[styles.drChrisUilParent, styles.groupWrapperLayout]}
              >
                <Text style={styles.drChrisUil}>Dr. Chris uil</Text>
                <Text style={[styles.drJoeMickey, styles.drJoeMickeyTypo]}>
                  Dr. Joe Mickey
                </Text>
                <Text style={[styles.generalFocus, styles.drJoeMickeyTypo]}>
                  General Focus
                </Text>
                <Text style={[styles.hrsAgo, styles.hrsTypo]}>2hrs Ago</Text>
                <Text style={[styles.hrsAgo1, styles.hrsTypo]}>2hrs Ago</Text>
                <Text style={[styles.hrsAgo2, styles.hrsTypo]}>2hrs Ago</Text>
                <Image
                  style={[
                    styles.heartIcon,
                    styles.iconLayout1,
                    styles.heartIconPosition,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/heart.png")}
                />
                <Image
                  style={[
                    styles.heartIcon1,
                    styles.iconLayout1,
                    styles.heartIconPosition,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/heart1.png")}
                />
                <Image
                  style={[
                    styles.heartIcon2,
                    styles.iconLayout1,
                    styles.heartIconPosition,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/heart.png")}
                />
                <Text style={[styles.text, styles.textTypo]}>25</Text>
                <Text style={[styles.text1, styles.textTypo]}>25</Text>
                <Text style={[styles.text2, styles.textTypo]}>25</Text>
                <Text style={[styles.loremIpsumDolor, styles.loremTypo]}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pharetra aliquam, congue habitasse tortor. Fringilla nunc
                  aliquam volutpat suscipit porttitor in quis sagittis hac.
                  Tellus sed ac libero
                </Text>
                <Text style={[styles.loremIpsumDolor1, styles.loremTypo]}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pharetra aliquam, congue habitasse tortor. Fringilla nunc
                  aliquam volutpat suscipit porttitor in quis sagittis hac.
                  Tellus sed ac libero
                </Text>
                <Text style={styles.loremIpsumDolor2}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pharetra aliquam, congue habitasse tortor. Fringilla nunc
                  aliquam volutpat suscipit porttitor in quis sagittis hac.
                  Tellus sed ac libero
                </Text>
                <ImageBackground
                  style={[styles.unsplash2egnqazbamkIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/unsplash2egnqazbamk2.png")}
                />
                <ImageBackground
                  style={[styles.unsplashridxdghg7pwIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/unsplashridxdghg7pw2.png")}
                />
                <ImageBackground
                  style={[styles.unsplash6rrIp06p4Icon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/unsplash6rrip06p4.png")}
                />
              </View>
            </Pressable>
          </View>
          <View style={styles.groupView}>
            <View
              style={[
                styles.whyDoesVitaminEHaveSparinParent,
                styles.containerPosition,
              ]}
            >
              <Text style={styles.whyDoesVitamin}>
                Why does Vitamin E have sparing action on Selenium?
              </Text>
              <View style={styles.groupParent1}>
                <Image
                  style={[
                    styles.unsplashp5bobf0xjuaIcon,
                    styles.mParentPosition,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/pfp1.png")}
                />
                <Text
                  style={[
                    styles.drMathewHayden,
                    styles.drMinAkhterTypo,
                    styles.drMathewHaydenPosition,
                  ]}
                >
                  Dr. Mathew Hayden
                </Text>
                <Text style={[styles.hoursAgo1, styles.hoursPosition]}>
                  21 hours ago
                </Text>
              </View>
              <Image
                style={[styles.buttonIcon, styles.surfacePosition]}
                resizeMode="cover"
                source={require("../assets/button1.png")}
              />
            </View>
            <View style={[styles.archiveAddGroup, styles.archiveLayout]}>
              <Image
                style={[styles.arrowIconLayout, styles.archivePosition]}
                resizeMode="cover"
                source={require("../assets/archiveadd6.png")}
              />
              <Image
                style={[styles.arrowUpIcon, styles.arrowIconLayout]}
                resizeMode="cover"
                source={require("../assets/archiveadd6.png")}
              />
              <Image
                style={styles.arrowPosition}
                resizeMode="cover"
                source={require("../assets/archiveadd6.png")}
              />
              <Text style={styles.k}>56.9k</Text>
              <Image
                style={[styles.akarIconsshareBox1, styles.akarPosition]}
                resizeMode="cover"
                source={require("../assets/archiveadd6.png")}
              />
              <View style={[styles.groupItem, styles.sPosition]} />
            </View>
            <FocusSection
              carImageUrl={require("../assets/heart.png")}
              vehicleImageUrl={require("../assets/unsplash2egnqazbamk2.png")}
              propTop={125}
              propLeft={0}
              propTop1="298.85%"
              propBottom="-202.68%"
              propTop2="333.33%"
              propBottom1="-237.16%"
              propWidth={296}
              propWidth1={298}
              propWidth2={296}
              propTop3={732}
              propTop4={822}
            />
          </View>
          <View style={[styles.groupParent2, styles.groupLayout]}>
            <View style={styles.whatAreAboAndRhBloodGrouParent}>
              <Text
                style={[
                  styles.whatAreAbo,
                  styles.whatAreAboTypo,
                  styles.containerPosition,
                ]}
              >
                What are ABO and Rh blood groups. What is Cross matching?
              </Text>
              <Image
                style={[styles.unsplashp5bobf0xjuaIcon, styles.mParentPosition]}
                resizeMode="cover"
                source={require("../assets/ellipse-1.png")}
              />
              <Text style={[styles.s, styles.sPosition, styles.mTypo]}>S</Text>
              <Text style={styles.hoursPosition}>21 hours ago</Text>
              <View style={[styles.surface, styles.surfacePosition]} />
              <Text
                style={[styles.drMinAkhterTypo, styles.drMathewHaydenPosition]}
              >
                Sunny Fernandes
              </Text>
              <Image
                style={styles.guideIcon}
                resizeMode="cover"
                source={require("../assets/guide.png")}
              />
            </View>
            <View
              style={[
                styles.containerPosition,
                styles.archiveLayout,
                styles.archivePosition1,
              ]}
            >
              <Image
                style={styles.archivePosition}
                resizeMode="cover"
                source={require("../assets/archiveadd6.png")}
              />
              <Image
                style={[styles.arrowUpIcon, styles.arrowIconLayout]}
                resizeMode="cover"
                source={require("../assets/archiveadd6.png")}
              />
              <Image
                style={styles.arrowPosition}
                resizeMode="cover"
                source={require("../assets/archiveadd6.png")}
              />
              <Text style={styles.k}>56.9k</Text>
              <Image
                style={[styles.akarIconsshareBox1, styles.akarPosition]}
                resizeMode="cover"
                source={require("../assets/archiveadd6.png")}
              />
              <View style={[styles.groupItem, styles.sPosition]} />
            </View>
            <FocusSection
              carImageUrl={require("../assets/heart4.png")}
              vehicleImageUrl={require("../assets/unsplashridxdghg7pw3.png")}
              propTop={124}
              propLeft={1}
              propTop1="52.87%"
              propBottom="43.3%"
              propTop2="87.36%"
              propBottom1="8.81%"
              propWidth={295}
              propWidth1={297}
              propWidth2={295}
              propTop3={90}
              propTop4={180}
            />
          </View>
        </View>
      </View>
      <View style={styles.ellipseParent}>
        <Image
          style={[styles.ellipseIcon, styles.ellipseIconPosition]}
          resizeMode="cover"
          source={require("../assets/ellipse-2.png")}
        />
        <Image
          style={[styles.groupIcon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/group-149.png")}
        />
        <View style={[styles.groupChild1, styles.groupChildLayout]} />
        <View style={[styles.groupChild2, styles.groupChildLayout]} />
        <View
          style={[
            styles.segmentedpicker,
            styles.option1ShadowBox,
            styles.segmentedpickerShadowBox,
            styles.ellipseIconPosition,
          ]}
        >
          <Pressable
            style={styles.optionFlexBox}
            onPress={() => navigation.navigate("HOMEPAGEPOST")}
          >
            <View style={styles.separator} />
            <Text style={[styles.label, styles.labelPosition]}>Post</Text>
          </Pressable>
          <TouchableHighlight
            style={[
              styles.option1,
              styles.optionFlexBox,
              styles.option1ShadowBox,
            ]}
            underlayColor="#fff"
            activeOpacity={0.2}
            onPress={() => {}}
          >
            <>
              <View />
              <Text>Question</Text>
            </>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.optionFlexBox}
            underlayColor="#fff"
            activeOpacity={0.2}
            onPress={() => navigation.navigate("HOMEPAGERESEARCH")}
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
            onPress={() => navigation.navigate("HOMEPAGELEARN")}
          >
            <>
              <View />
              <Text>Learn</Text>
            </>
          </TouchableHighlight>
        </View>
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
              style={[styles.icon3, styles.iconLayout2]}
              resizeMode="cover"
              source={require("../assets/frame.png")}
            />
          </TouchableHighlight>
          <View style={styles.headerInner}>
            <View
              style={[
                styles.groupFrame,
                styles.chatIconPosition,
                styles.chatIconPosition1,
              ]}
            >
              <View
                style={[
                  styles.groupFrame,
                  styles.chatIconPosition,
                  styles.chatIconPosition1,
                ]}
              >
                <View
                  style={[
                    styles.groupFrame,
                    styles.chatIconPosition,
                    styles.chatIconPosition1,
                  ]}
                >
                  <View
                    style={[
                      styles.iconlybrokenchatWrapper,
                      styles.chatIconPosition,
                      styles.chatIconPosition1,
                      styles.option1ShadowBox,
                      styles.segmentedpickerShadowBox,
                    ]}
                  >
                    <TouchableHighlight
                      style={[
                        styles.groupFrame,
                        styles.chatIconPosition,
                        styles.chatIconPosition1,
                      ]}
                      underlayColor="#fff"
                      activeOpacity={0.2}
                      onPress={() => {}}
                    >
                      <Image
                        style={[
                          styles.chatIcon,
                          styles.chatIconPosition,
                          styles.chatIconPosition1,
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
        <View style={[styles.rectangleParent, styles.groupChild3Layout]}>
          <View style={[styles.groupChild3, styles.groupChild3Layout]} />
          <View style={styles.bottomTabs}>
            <View
              style={[
                styles.groupFrame,
                styles.chatIconPosition,
                styles.chatIconPosition1,
              ]}
            >
              <View
                style={[
                  styles.groupFrame,
                  styles.chatIconPosition,
                  styles.chatIconPosition1,
                ]}
              >
                <TouchableHighlight
                  style={styles.iconlybrokenprofile}
                  underlayColor="#fff"
                  activeOpacity={0.2}
                  onPress={() => navigation.navigate("PROFILELIFESTYLE")}
                >
                  <Image
                    style={[styles.iconLayout1, styles.iconLayout2]}
                    resizeMode="cover"
                    source={require("../assets/vector.png")}
                  />
                </TouchableHighlight>
                <Pressable
                  style={[styles.vector, styles.vectorPosition]}
                  onPress={() => {}}
                >
                  <Image
                    style={styles.iconLayout2}
                    resizeMode="cover"
                    source={require("../assets/vector2.png")}
                  />
                </Pressable>
                <Pressable
                  style={[styles.iconlybrokenplus, styles.vectorPosition]}
                  onPress={() => navigation.navigate("ADDPOST")}
                >
                  <Image
                    style={styles.iconLayout2}
                    resizeMode="cover"
                    source={require("../assets/iconlybrokenplus.png")}
                  />
                </Pressable>
                <Pressable
                  style={[
                    styles.iconlylightOutlinegraph,
                    styles.vectorPosition,
                  ]}
                  onPress={() => navigation.navigate("LEADERBOARDNATIONAL")}
                >
                  <Image
                    style={styles.iconLayout2}
                    resizeMode="cover"
                    source={require("../assets/combinedshape.png")}
                  />
                </Pressable>
                <Pressable
                  style={[styles.container, styles.chatIconPosition]}
                  onPress={() => navigation.navigate("NOTIFICATION")}
                >
                  <Image
                    style={styles.iconLayout2}
                    resizeMode="cover"
                    source={require("../assets/combinedshape1.png")}
                  />
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    height: 415,
    position: "absolute",
  },
  groupContainerLayout: {
    width: 344,
    top: 0,
  },
  archiveLayout: {
    height: 25,
    width: 344,
  },
  archivePosition1: {
    top: 390,
    height: 25,
  },
  archivePosition: {
    left: 297,
    width: 21,
  },
  arrowIconLayout: {
    height: 24,
    width: 21,
    top: 1,
    position: "absolute",
  },
  iconLayout2: {
    height: "100%",
    width: "100%",
  },
  containerPosition: {
    left: 1,
    position: "absolute",
  },
  mParentPosition: {
    height: 36,
    top: 0,
    left: 0,
    position: "absolute",
  },
  mTypo: {
    color: Color.lightThemeWhite1,
    fontFamily: FontFamily.nunitoSansBold,
    fontWeight: "700",
    fontSize: FontSize.paragraphSemiBold_size,
    textAlign: "left",
  },
  drMinAkhterTypo: {
    color: Color.lightThemeDark1,
    fontSize: FontSize.size_5xl,
    left: 42,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBlack,
    fontWeight: "900",
    position: "absolute",
  },
  labelPosition: {
    height: 16,
    top: "50%",
    position: "absolute",
  },
  groupWrapperLayout: {
    height: 261,
    width: 344,
    left: 0,
    position: "absolute",
  },
  drJoeMickeyTypo: {
    width: 98,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    left: 46,
    fontSize: FontSize.subtitleButtonBold1_size,
    color: Color.lightThemeDark1,
    textAlign: "left",
    position: "absolute",
  },
  hrsTypo: {
    opacity: 0.8,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    left: 298,
    width: 46,
    color: Color.gray_300,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  heartIconPosition: {
    left: "2.09%",
    right: "94.93%",
    width: "2.99%",
    height: "3.83%",
    maxWidth: "100%",
    position: "absolute",
  },
  textTypo: {
    width: 14,
    fontSize: FontSize.size_lg,
    left: 21,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.lightThemeDark1,
    textAlign: "left",
    position: "absolute",
  },
  loremTypo: {
    width: 296,
    color: Color.dimgray_400,
    opacity: 0.8,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    left: 46,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    height: 40,
    width: 41,
    left: 0,
    position: "absolute",
  },
  drMathewHaydenPosition: {
    top: 1,
    color: Color.lightThemeDark1,
    fontSize: FontSize.size_5xl,
    left: 42,
  },
  hoursPosition: {
    top: 19,
    color: Color.gray_300,
    fontFamily: FontFamily.nunitoSansRegular,
    fontSize: FontSize.subtitleButtonBold1_size,
    left: 42,
    textAlign: "left",
    position: "absolute",
  },
  surfacePosition: {
    height: 20,
    width: 20,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  akarPosition: {
    left: 323,
    height: 24,
    width: 21,
    top: 0,
    position: "absolute",
  },
  sPosition: {
    top: 8,
    position: "absolute",
  },
  whatAreAboTypo: {
    width: 343,
    color: Color.neutral9001,
    lineHeight: 24,
    fontSize: FontSize.paragraphSemiBold_size,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBlack,
    fontWeight: "900",
  },
  ellipseIconPosition: {
    left: 20,
    position: "absolute",
  },
  groupChildLayout: {
    opacity: 0.99,
    width: 375,
    position: "absolute",
  },
  option1ShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  segmentedpickerShadowBox: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  optionFlexBox: {
    alignSelf: "stretch",
    flex: 1,
  },
  headerLayout: {
    height: 46,
    position: "absolute",
  },
  chatIconPosition: {
    bottom: "0%",
    position: "absolute",
  },
  chatIconPosition1: {
    top: "0%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    height: "100%",
    width: "100%",
  },
  groupChild3Layout: {
    height: 70,
    width: 375,
    left: 0,
    position: "absolute",
  },
  vectorPosition: {
    width: "8.12%",
    height: "92.45%",
    bottom: "7.55%",
    top: "0%",
    position: "absolute",
  },
  arrowUp: {
    left: 0,
  },
  arrowPosition: {
    left: 61,
    height: 24,
    width: 21,
    top: 0,
    position: "absolute",
  },
  k: {
    top: 4,
    left: 24,
    fontSize: FontSize.size_2xl,
    color: Color.gray_400,
    width: 37,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBlack,
    fontWeight: "900",
    position: "absolute",
  },
  icon3: {
    overflow: "hidden",
  },
  archiveAddParent: {
    left: 0,
    position: "absolute",
  },
  classifyBurnsHowContainer: {
    top: 54,
  },
  m: {
    top: 7,
    left: 11,
    position: "absolute",
  },
  drMinAkhter: {
    top: 0,
  },
  hoursAgo: {
    top: 18,
    color: Color.gray_300,
    fontFamily: FontFamily.nunitoSansRegular,
    fontSize: FontSize.subtitleButtonBold1_size,
    left: 42,
    textAlign: "left",
    position: "absolute",
  },
  unsplashp5bobf0xjuaIcon: {
    width: 36,
  },
  mParent: {
    width: 150,
  },
  icon4: {
    marginTop: -43.75,
    marginLeft: 156.25,
  },
  wrapper: {
    width: 16,
    left: "50%",
    height: 16,
  },
  classifyBurnsHowWillYouMParent: {
    height: 102,
    left: 0,
    position: "absolute",
  },
  drChrisUil: {
    width: 77,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    left: 46,
    fontSize: FontSize.subtitleButtonBold1_size,
    color: Color.lightThemeDark1,
    textAlign: "left",
    top: 1,
    position: "absolute",
  },
  drJoeMickey: {
    top: 91,
  },
  generalFocus: {
    top: 181,
  },
  hrsAgo: {
    top: 6,
  },
  hrsAgo1: {
    top: 96,
  },
  hrsAgo2: {
    top: 186,
  },
  heartIcon: {
    top: "18.39%",
    bottom: "77.78%",
  },
  heartIcon1: {
    top: "52.87%",
    bottom: "43.3%",
  },
  heartIcon2: {
    top: "87.36%",
    bottom: "8.81%",
  },
  text: {
    top: 45,
  },
  text1: {
    top: 135,
  },
  text2: {
    top: 225,
  },
  loremIpsumDolor: {
    top: 21,
  },
  loremIpsumDolor1: {
    top: 111,
  },
  loremIpsumDolor2: {
    top: 201,
    width: 298,
    color: Color.dimgray_400,
    opacity: 0.8,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    left: 46,
    textAlign: "left",
    position: "absolute",
  },
  unsplash2egnqazbamkIcon: {
    top: 0,
  },
  unsplashridxdghg7pwIcon: {
    top: 90,
  },
  unsplash6rrIp06p4Icon: {
    top: 180,
  },
  drChrisUilParent: {
    top: 0,
  },
  groupWrapper: {
    top: 124,
  },
  groupContainer: {
    left: 2,
  },
  whyDoesVitamin: {
    top: 55,
    width: 346,
    color: Color.neutral9001,
    lineHeight: 24,
    fontSize: FontSize.paragraphSemiBold_size,
    left: 1,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBlack,
    fontWeight: "900",
    position: "absolute",
  },
  drMathewHayden: {
    width: 145,
  },
  hoursAgo1: {
    width: 78,
  },
  groupParent1: {
    width: 188,
    height: 37,
    top: 0,
    left: 0,
    position: "absolute",
  },
  buttonIcon: {
    marginTop: -42.5,
    marginLeft: 153.37,
  },
  whyDoesVitaminEHaveSparinParent: {
    width: 347,
    height: 103,
    top: 0,
  },
  arrowUpIcon: {
    left: 0,
  },
  akarIconsshareBox1: {
    overflow: "hidden",
  },
  groupItem: {
    left: 304,
    backgroundColor: Color.steelblue_100,
    width: 7,
    height: 9,
  },
  archiveAddGroup: {
    top: 391,
    left: 0,
    position: "absolute",
  },
  groupView: {
    top: 458,
    height: 416,
    left: 0,
    width: 348,
    position: "absolute",
  },
  whatAreAbo: {
    top: 56,
  },
  s: {
    left: 12,
  },
  surface: {
    marginTop: -47,
    marginLeft: 154,
  },
  guideIcon: {
    marginTop: -44.81,
    marginLeft: 156.55,
    width: 15,
    height: 14,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  whatAreAboAndRhBloodGrouParent: {
    height: 104,
    top: 0,
    left: 0,
    width: 348,
    position: "absolute",
  },
  groupParent2: {
    top: 911,
    left: 0,
    width: 348,
  },
  groupParent: {
    top: 59,
    height: 1326,
    left: 0,
    width: 348,
    position: "absolute",
  },
  homepageQuestionInner: {
    top: 110,
    height: 719,
    width: 348,
    left: 12,
    position: "absolute",
  },
  ellipseIcon: {
    top: 48,
    height: 37,
    width: 37,
  },
  groupIcon: {
    height: "2.08%",
    width: "4.62%",
    top: "7.07%",
    right: "26.13%",
    bottom: "90.84%",
    left: "69.25%",
    position: "absolute",
  },
  groupChild1: {
    backgroundColor: Color.gray_1200,
    height: 59,
    top: 96,
    left: 2,
  },
  groupChild2: {
    height: 96,
    top: 0,
    left: 0,
    backgroundColor: Color.lightThemeWhite1,
    opacity: 0.99,
    width: 375,
  },
  separator: {
    height: "57.14%",
    width: "0.57%",
    top: "21.43%",
    right: "1.15%",
    bottom: "21.44%",
    left: "98.28%",
    borderRadius: Border.br_7xs,
    backgroundColor: Color.separatorColorLightWithTransparency1,
    display: "none",
    position: "absolute",
  },
  label: {
    marginTop: -8,
    left: 8,
    fontSize: FontSize.size_4xl,
    lineHeight: 16,
    fontFamily: FontFamily.readexProRegular,
    color: Color.slategray,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 67,
  },
  option1: {
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
    top: 105,
    borderRadius: Border.br_md,
    backgroundColor: Color.gray_1300,
    shadowRadius: 10,
    elevation: 10,
    width: 335,
    height: 32,
    flexDirection: "row",
    padding: Padding.p_3xs,
    overflow: "hidden",
  },
  verticalLogo1Icon: {
    width: 46,
    height: 46,
    top: 0,
    left: 0,
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
  frame: {
    left: 283,
    top: 13,
    width: 23,
    height: 23,
    position: "absolute",
  },
  chatIcon: {
    left: "0%",
  },
  groupFrame: {
    left: "0%",
  },
  iconlybrokenchatWrapper: {
    shadowRadius: 40,
    elevation: 40,
    left: "0%",
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
  groupChild3: {
    backgroundColor: Color.white_100,
    opacity: 0.9,
    top: 0,
  },
  iconlybrokenprofile: {
    left: "92.21%",
    width: "7.79%",
    height: "92.45%",
    bottom: "7.55%",
    top: "0%",
    right: "0%",
    position: "absolute",
  },
  vector: {
    right: "91.88%",
    left: "0%",
  },
  iconlybrokenplus: {
    left: "46.1%",
    right: "45.78%",
  },
  iconlylightOutlinegraph: {
    left: "23.05%",
    right: "68.83%",
  },
  container: {
    left: "70.13%",
    top: "3.7%",
    right: "22.4%",
    width: "7.47%",
    height: "96.3%",
  },
  bottomTabs: {
    height: "38.84%",
    width: "82.13%",
    top: "31.6%",
    right: "7.47%",
    bottom: "29.57%",
    left: "10.4%",
    position: "absolute",
  },
  rectangleParent: {
    top: 742,
  },
  ellipseParent: {
    width: 377,
    top: 0,
    left: 0,
    position: "absolute",
    height: 812,
  },
  homepageQuestion: {
    overflow: "hidden",
    height: 812,
    width: "100%",
    flex: 1,
    backgroundColor: Color.lightThemeWhite1,
  },
});

export default HOMEPAGEQUESTION;
