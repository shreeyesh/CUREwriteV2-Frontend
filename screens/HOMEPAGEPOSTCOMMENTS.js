import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ImageBackground,
  TextInput,
  Pressable,
  TouchableHighlight,
} from "react-native";
import CommentContainer from "../components/CommentContainer";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const HOMEPAGEPOSTCOMMENTS = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homepagePostComments}>
      <View style={styles.rectangleParent}>
        <View
          style={[
            styles.groupChild,
            styles.groupChildLayout,
            styles.groupChildPosition,
          ]}
        />
        <Image
          style={[
            styles.arrowUpIcon,
            styles.arrowIconLayout,
            styles.arrowUpIconPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/arrowup.png")}
        />
        <Image
          style={[styles.arrowDownIcon, styles.arrowIconLayout]}
          resizeMode="cover"
          source={require("../assets/arrowdown.png")}
        />
        <Text style={[styles.k, styles.ciplaTypo]}>56.9k</Text>
        <Image
          style={[
            styles.akarIconsshareBox,
            styles.akarIconsshareBoxPosition,
            styles.arrowIconLayout,
            styles.arrowUpIconPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/akariconssharebox1.png")}
        />
        <Image
          style={styles.archiveAddIcon}
          resizeMode="cover"
          source={require("../assets/archiveadd.png")}
        />
        <Image
          style={styles.unsplashp5bobf0xjuaIcon}
          resizeMode="cover"
          source={require("../assets/unsplashp5bobf0xjua2.png")}
        />
        <Text
          style={[
            styles.ciplaIndustries,
            styles.hrAgoFlexBox,
            styles.commentClr,
            styles.ciplaTypo,
          ]}
        >
          Cipla Industries
        </Text>
        <Text style={[styles.hrAgo, styles.textTypo, styles.hrAgoFlexBox]}>
          1hr ago
        </Text>
        <Text style={[styles.ciplaBeginThe, styles.ciplaTypo]}>
          Cipla begin the trails for new vaccines for COVID-19
        </Text>
        <Image
          style={[styles.image5Icon, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/image-5.png")}
        />
        <Image
          style={[styles.iconlyboldheart, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/iconlyboldheart.png")}
        />
        <Text style={[styles.text, styles.textTypo]}>25</Text>
        <CommentContainer />
      </View>
      <View
        style={[
          styles.homepagePostCommentsChild,
          styles.akarIconsshareBoxPosition,
        ]}
      />
      <View style={[styles.ellipseParent, styles.ellipseParentPosition]}>
        <Image
          style={styles.groupItem}
          resizeMode="cover"
          source={require("../assets/ellipse-2.png")}
        />
        <Image
          style={[styles.groupInner, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/group-149.png")}
        />
        <View style={[styles.rectangleView, styles.ellipseParentPosition]} />
        <View style={[styles.header, styles.headerLayout]}>
          <ImageBackground
            style={[
              styles.verticalLogo1Icon,
              styles.headerLayout,
              styles.groupChildPosition,
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
            <View
              style={[
                styles.groupWrapper,
                styles.wrapperPosition,
                styles.wrapperPosition1,
              ]}
            >
              <View
                style={[
                  styles.groupWrapper,
                  styles.wrapperPosition,
                  styles.wrapperPosition1,
                ]}
              >
                <View
                  style={[
                    styles.groupWrapper,
                    styles.wrapperPosition,
                    styles.wrapperPosition1,
                  ]}
                >
                  <View
                    style={[
                      styles.iconlybrokenchatWrapper,
                      styles.wrapperPosition,
                      styles.wrapperPosition1,
                    ]}
                  >
                    <TouchableHighlight
                      style={[
                        styles.groupWrapper,
                        styles.wrapperPosition,
                        styles.wrapperPosition1,
                      ]}
                      underlayColor="#fff"
                      activeOpacity={0.2}
                      onPress={() => {}}
                    >
                      <Image
                        style={[
                          styles.chatIcon,
                          styles.wrapperPosition,
                          styles.wrapperPosition1,
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
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.groupChild1, styles.groupLayout]} />
          <View style={styles.bottomTabs}>
            <View
              style={[
                styles.groupWrapper,
                styles.wrapperPosition,
                styles.wrapperPosition1,
              ]}
            >
              <View
                style={[
                  styles.groupWrapper,
                  styles.wrapperPosition,
                  styles.wrapperPosition1,
                ]}
              >
                <TouchableHighlight
                  style={styles.iconlybrokenprofile}
                  underlayColor="#fff"
                  activeOpacity={0.2}
                  onPress={() => navigation.navigate("PROFILELIFESTYLE")}
                >
                  <Image
                    style={[styles.iconLayout, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/vector.png")}
                  />
                </TouchableHighlight>
                <Pressable
                  style={[styles.vector, styles.vectorPosition]}
                  onPress={() => {}}
                >
                  <Image
                    style={styles.iconLayout1}
                    resizeMode="cover"
                    source={require("../assets/vector2.png")}
                  />
                </Pressable>
                <Pressable
                  style={[styles.iconlybrokenplus, styles.vectorPosition]}
                  onPress={() => navigation.navigate("ADDPOST")}
                >
                  <Image
                    style={styles.iconLayout1}
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
                    style={styles.iconLayout1}
                    resizeMode="cover"
                    source={require("../assets/combinedshape.png")}
                  />
                </Pressable>
                <Pressable
                  style={[styles.wrapper, styles.wrapperPosition]}
                  onPress={() => navigation.navigate("NOTIFICATION")}
                >
                  <Image
                    style={styles.iconLayout1}
                    resizeMode="cover"
                    source={require("../assets/combinedshape1.png")}
                  />
                </Pressable>
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
          style={styles.iconLayout1}
          resizeMode="cover"
          source={require("../assets/iconlylightoutlinearrowleft2.png")}
        />
      </Pressable>
      <Text style={[styles.comment, styles.commentClr]}>Comment</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    borderRadius: Border.br_lg,
    position: "absolute",
  },
  groupChildPosition: {
    left: 0,
    top: 0,
  },
  arrowIconLayout: {
    width: 20,
    height: 24,
  },
  arrowUpIconPosition: {
    top: 290,
    width: 20,
  },
  ciplaTypo: {
    fontFamily: FontFamily.nunitoSansBlack,
    fontWeight: "900",
  },
  akarIconsshareBoxPosition: {
    left: 286,
    position: "absolute",
  },
  hrAgoFlexBox: {
    textAlign: "center",
    left: 72,
  },
  commentClr: {
    color: Color.lightThemeDark1,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.lightThemeDark1,
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  ellipseParentPosition: {
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
    bottom: "0%",
    position: "absolute",
  },
  wrapperPosition1: {
    top: "0%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    height: "100%",
    width: "100%",
  },
  groupLayout: {
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
  groupChild: {
    backgroundColor: Color.silver_200,
    height: 324,
    opacity: 0.2,
    width: 335,
  },
  arrowUpIcon: {
    left: 30,
    height: 24,
    position: "absolute",
  },
  arrowDownIcon: {
    top: 289,
    left: 88,
    height: 24,
    position: "absolute",
  },
  k: {
    top: 293,
    left: 53,
    color: Color.gray_400,
    width: 35,
    textAlign: "left",
    fontSize: FontSize.size_2xl,
    position: "absolute",
  },
  akarIconsshareBox: {
    height: 24,
    overflow: "hidden",
  },
  archiveAddIcon: {
    top: 291,
    left: 259,
    width: 21,
    height: 24,
    position: "absolute",
  },
  unsplashp5bobf0xjuaIcon: {
    left: 24,
    width: 39,
    height: 39,
    top: 12,
    position: "absolute",
  },
  ciplaIndustries: {
    fontSize: FontSize.size_5xl,
    top: 12,
  },
  hrAgo: {
    top: 35,
    fontSize: FontSize.size_2xl,
  },
  ciplaBeginThe: {
    top: 65,
    left: 19,
    fontSize: FontSize.size_base,
    lineHeight: 15,
    color: Color.neutral9001,
    width: 291,
    textAlign: "left",
    position: "absolute",
  },
  image5Icon: {
    top: 94,
    width: 299,
    height: 185,
    left: 20,
  },
  iconlyboldheart: {
    height: "1.7%",
    width: "2.99%",
    top: "96.26%",
    right: "94.93%",
    bottom: "2.04%",
    left: "2.09%",
    position: "absolute",
    overflow: "hidden",
  },
  text: {
    top: 564,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    left: 20,
  },
  rectangleParent: {
    top: 141,
    height: 589,
    width: 335,
    left: 20,
    position: "absolute",
  },
  homepagePostCommentsChild: {
    top: 436,
    backgroundColor: Color.steelblue_100,
    width: 7,
    height: 9,
  },
  groupItem: {
    top: 48,
    width: 37,
    height: 37,
    left: 20,
    position: "absolute",
  },
  groupInner: {
    height: "2.08%",
    width: "4.64%",
    top: "7.07%",
    right: "25.74%",
    bottom: "90.84%",
    left: "69.62%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleView: {
    height: 96,
    opacity: 0.99,
    backgroundColor: Color.lightThemeWhite1,
    width: 375,
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
    left: "0%",
    overflow: "hidden",
  },
  groupWrapper: {
    left: "0%",
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
  groupChild1: {
    backgroundColor: Color.white_100,
    opacity: 0.9,
    top: 0,
    height: 70,
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
  wrapper: {
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
  rectangleGroup: {
    top: 742,
  },
  ellipseParent: {
    height: 812,
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
  comment: {
    top: 97,
    left: 141,
    fontSize: FontSize.size_8xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemibold,
    width: 94,
    textAlign: "left",
  },
  homepagePostComments: {
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
    backgroundColor: Color.lightThemeWhite1,
  },
});

export default HOMEPAGEPOSTCOMMENTS;
