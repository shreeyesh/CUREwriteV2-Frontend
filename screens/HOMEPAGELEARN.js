import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TopTabsLearn from "../components/TopTabsLearn";
import Header from "../components/Header";
import BottomTabs from "../components/BottomTabs";
import { FontFamily, FontSize, Color, Border, Margin } from "../GlobalStyles";

const HOMEPAGELEARN = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homepageLearn}>
      <View style={[styles.groupParent, styles.groupParentLayout]}>
        <View style={[styles.groupContainer, styles.ellipseParentPosition]}>
          <View style={[styles.groupView, styles.groupParentLayout]}>
            <View style={[styles.groupView, styles.groupParentLayout]}>
              <Image
                style={[styles.groupView, styles.groupParentLayout]}
                resizeMode="cover"
                source={require("../assets/unsplashmqt0asuoicu.png")}
              />
              <Image
                style={[
                  styles.unsplashhhcfgcgwqmyIcon,
                  styles.unsplashhhcfgcgwqmyIconLayout,
                ]}
                resizeMode="cover"
                source={require("../assets/unsplashhhcfgcgwqmy.png")}
              />
              <Text style={[styles.drOyinDolapo, styles.drOyinDolapoTypo]}>
                Dr. Oyin Dolapo
              </Text>
              <Text style={[styles.hrAgo, styles.hrAgoTypo]}>1hr ago</Text>
              <View style={[styles.rectangleParent, styles.groupLayout1]}>
                <View
                  style={[
                    styles.groupChild,
                    styles.groupLayout,
                    styles.groupLayout1,
                  ]}
                />
                <View style={[styles.rectangleGroup, styles.groupLayout1]}>
                  <View
                    style={[
                      styles.groupItem,
                      styles.groupPosition,
                      styles.groupLayout,
                    ]}
                  />
                  <View style={[styles.groupInner, styles.groupPosition]} />
                </View>
              </View>
              <Image
                style={[
                  styles.vectorIcon,
                  styles.iconLayout,
                  styles.vectorIconLayout,
                ]}
                resizeMode="cover"
                source={require("../assets/vector36.png")}
              />
              <View
                style={[styles.rectangleView, styles.rectangleViewPosition]}
              />
              <Text
                style={[
                  styles.typeAComment,
                  styles.drOyinDolapoTypo,
                  styles.typeACommentTypo,
                ]}
              >
                Type a comment
              </Text>
            </View>
            <View style={styles.iconlyboldheartParent}>
              <Image
                style={[styles.iconlyboldheart, styles.iconlyboldheartLayout]}
                resizeMode="cover"
                source={require("../assets/iconlyboldheart7.png")}
              />
              <Text style={[styles.k, styles.kTypo]}>12k</Text>
              <Text style={[styles.text, styles.kTypo]}>292</Text>
              <Image
                style={[
                  styles.iconlylightOutlinechat,
                  styles.iconlyboldheartLayout,
                ]}
                resizeMode="cover"
                source={require("../assets/iconlylightoutlinechat.png")}
              />
            </View>
            <Text style={[styles.michealBruno, styles.drJohnDoeTypo]}>
              Micheal Bruno
            </Text>
            <Text style={[styles.drJohnDoe, styles.drJohnDoeTypo]}>
              Dr. John Doe
            </Text>
            <Text style={[styles.chrisOkorie, styles.drJohnDoeTypo]}>
              Chris Okorie
            </Text>
            <Text
              style={[
                styles.greatInformationShared,
                styles.rectangleViewPosition,
                styles.hrAgoTypo,
                styles.drOyinDolapoTypo,
                styles.typeACommentTypo,
              ]}
            >
              Great information shared by you
            </Text>
            <Text
              style={[
                styles.reallyGoodStuffitsContainer,
                styles.wonderfullllllllllTypo,
              ]}
            >
              <Text
                style={styles.reallyGoodStuffits}
              >{`Really good stuff....Its amazing! love `}</Text>
              <Text style={styles.itSoMuch}>it so much</Text>
            </Text>
            <Text
              style={[styles.wonderfullllllllll, styles.wonderfullllllllllTypo]}
            >
              Wonderfullllllllll
            </Text>
          </View>
          <View style={[styles.groupParent1, styles.groupParentLayout]}>
            <View style={[styles.groupView, styles.groupParentLayout]}>
              <Image
                style={[styles.groupView, styles.groupParentLayout]}
                resizeMode="cover"
                source={require("../assets/unsplashmqt0asuoicu1.png")}
              />
              <Image
                style={[
                  styles.unsplashhhcfgcgwqmyIcon1,
                  styles.unsplashhhcfgcgwqmyIconLayout,
                ]}
                resizeMode="cover"
                source={require("../assets/unsplashhhcfgcgwqmy1.png")}
              />
              <Text style={[styles.drOyinDolapo, styles.drOyinDolapoTypo]}>
                Dr. Simon Jones
              </Text>
              <Text style={[styles.hrAgo, styles.hrAgoTypo]}>1hr ago</Text>
              <View style={[styles.rectangleParent, styles.groupLayout1]}>
                <View
                  style={[
                    styles.groupChild,
                    styles.groupLayout,
                    styles.groupLayout1,
                  ]}
                />
                <View style={[styles.rectangleGroup, styles.groupLayout1]}>
                  <View
                    style={[
                      styles.groupItem,
                      styles.groupPosition,
                      styles.groupLayout,
                    ]}
                  />
                  <View style={[styles.groupInner, styles.groupPosition]} />
                </View>
              </View>
              <Image
                style={[
                  styles.vectorIcon1,
                  styles.iconLayout,
                  styles.vectorIconLayout,
                ]}
                resizeMode="cover"
                source={require("../assets/vector37.png")}
              />
              <View
                style={[styles.rectangleView, styles.rectangleViewPosition]}
              />
              <Text
                style={[
                  styles.typeAComment,
                  styles.drOyinDolapoTypo,
                  styles.typeACommentTypo,
                ]}
              >
                Type a comment
              </Text>
            </View>
            <View style={styles.iconlyboldheartParent}>
              <Image
                style={[styles.iconlyboldheart, styles.iconlyboldheartLayout]}
                resizeMode="cover"
                source={require("../assets/iconlyboldheart8.png")}
              />
              <Text style={[styles.k, styles.kTypo]}>12k</Text>
              <Text style={[styles.text, styles.kTypo]}>292</Text>
              <Image
                style={[
                  styles.iconlylightOutlinechat,
                  styles.iconlyboldheartLayout,
                ]}
                resizeMode="cover"
                source={require("../assets/iconlyboldheart8.png")}
              />
            </View>
            <Text style={[styles.michealBruno, styles.drJohnDoeTypo]}>
              Micheal Bruno
            </Text>
            <Text style={[styles.drJohnDoe, styles.drJohnDoeTypo]}>
              Dr. John Doe
            </Text>
            <Text style={[styles.chrisOkorie, styles.drJohnDoeTypo]}>
              Chris Okorie
            </Text>
            <Text
              style={[
                styles.greatInformationShared,
                styles.rectangleViewPosition,
                styles.hrAgoTypo,
                styles.drOyinDolapoTypo,
                styles.typeACommentTypo,
              ]}
            >
              Great information shared by you
            </Text>
            <Text
              style={[
                styles.reallyGoodStuffitsContainer,
                styles.wonderfullllllllllTypo,
              ]}
            >
              <Text
                style={styles.reallyGoodStuffits}
              >{`Good Information....Its amazing! love `}</Text>
              <Text style={styles.itSoMuch}>it so much</Text>
            </Text>
            <Text
              style={[styles.wonderfullllllllll, styles.wonderfullllllllllTypo]}
            >
              Wonderfullllllllll
            </Text>
          </View>
        </View>
        <Image
          style={[styles.frameIcon, styles.frameIconLayout]}
          resizeMode="cover"
          source={require("../assets/frame26.png")}
        />
        <Image
          style={[styles.frameIcon1, styles.frameIconLayout]}
          resizeMode="cover"
          source={require("../assets/frame27.png")}
        />
      </View>
      <View style={[styles.ellipseParent, styles.ellipseParentPosition]}>
        <Image
          style={styles.ellipseIcon}
          resizeMode="cover"
          source={require("../assets/ellipse-2.png")}
        />
        <Image
          style={[styles.groupIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/group-149.png")}
        />
        <View style={[styles.groupChild5, styles.groupChildPosition]} />
        <View style={[styles.groupChild6, styles.groupChildPosition]} />
        <TopTabsLearn />
        <Header
          onFramePress={() => {}}
          onIconlyBrokenChatPress={() => {}}
          icon={require("../assets/frame1.png")}
        />
        <View style={[styles.rectangleParent2, styles.groupChild7Layout]}>
          <View style={[styles.groupChild7, styles.groupChild7Layout]} />
          <BottomTabs
            icon={{ uri: "iconlybrokenprofile@3x.png" }}
            onVectorPress={() => {}}
            onIconlyBrokenPlusPress={() => navigation.navigate("ADDPOST")}
            onIconlyLightOutlineGraphPress={() =>
              navigation.navigate("LEADERBOARDNATIONAL")
            }
            onGroupPressablePress={() => navigation.navigate("NOTIFICATION")}
            icon1={require("../assets/combinedshape1.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupParentLayout: {
    height: 716,
    width: 375,
    left: 0,
    position: "absolute",
  },
  ellipseParentPosition: {
    width: 375,
    top: 0,
    left: 0,
    position: "absolute",
  },
  unsplashhhcfgcgwqmyIconLayout: {
    height: 47,
    width: 46,
    left: 15,
    position: "absolute",
  },
  drOyinDolapoTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
  },
  hrAgoTypo: {
    fontSize: FontSize.size_2xl,
    color: Color.lightThemeWhite1,
  },
  groupLayout1: {
    height: 7,
    position: "absolute",
  },
  groupLayout: {
    borderRadius: Border.br_4xs,
    width: 169,
    backgroundColor: Color.lightThemeWhite1,
  },
  groupPosition: {
    transform: [
      {
        rotate: "-0.01deg",
      },
    ],
    height: 7,
    top: 0,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconLayout: {
    left: "89.33%",
    right: "6.67%",
    width: "4%",
    height: "2.14%",
    maxWidth: "100%",
  },
  rectangleViewPosition: {
    left: 27,
    position: "absolute",
  },
  typeACommentTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    opacity: 0.5,
  },
  iconlyboldheartLayout: {
    left: "0%",
    right: "0%",
    height: "28.04%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  kTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    left: 4,
    fontSize: FontSize.size_2xl,
    textAlign: "left",
    color: Color.lightThemeWhite1,
    position: "absolute",
  },
  drJohnDoeTypo: {
    fontSize: FontSize.subtitleButtonBold1_size,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    left: 27,
    textAlign: "left",
    color: Color.lightThemeWhite1,
    position: "absolute",
  },
  wonderfullllllllllTypo: {
    opacity: 0.7,
    left: 27,
    fontSize: FontSize.size_2xl,
    textAlign: "left",
    color: Color.lightThemeWhite1,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    position: "absolute",
  },
  frameIconLayout: {
    height: 90,
    width: 90,
    position: "absolute",
    overflow: "hidden",
  },
  groupChildPosition: {
    opacity: 0.99,
    width: 375,
    left: 0,
    position: "absolute",
  },
  groupChild7Layout: {
    height: 70,
    width: 375,
    left: 0,
    position: "absolute",
  },
  groupView: {
    top: 0,
  },
  unsplashhhcfgcgwqmyIcon: {
    top: 84,
    height: 47,
    width: 46,
    left: 15,
  },
  drOyinDolapo: {
    fontSize: FontSize.size_5xl,
    width: 186,
    height: 23,
    color: Color.lightThemeWhite1,
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    left: 67,
    top: 84,
    position: "absolute",
  },
  hrAgo: {
    top: 107,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    textAlign: "center",
    width: 44,
    height: 18,
    left: 67,
    fontSize: FontSize.size_2xl,
    position: "absolute",
  },
  groupChild: {
    width: 169,
    top: 0,
    left: 0,
    borderRadius: Border.br_4xs,
    height: 7,
  },
  groupItem: {
    width: 169,
  },
  groupInner: {
    borderTopLeftRadius: Border.br_4xs,
    borderBottomLeftRadius: Border.br_4xs,
    backgroundColor: Color.darkslategray_200,
    width: 98,
  },
  rectangleGroup: {
    left: 178,
    width: 169,
    top: 0,
  },
  rectangleParent: {
    top: 69,
    left: 14,
    width: 347,
  },
  vectorIcon: {
    top: "12.26%",
    bottom: "85.6%",
  },
  rectangleView: {
    top: 585,
    borderRadius: Border.br_lg,
    width: 321,
    height: 50,
    backgroundColor: Color.lightThemeWhite1,
  },
  typeAComment: {
    top: 600,
    left: 45,
    fontSize: FontSize.size_4xl,
    color: Color.lightThemeDark1,
    width: 121,
    height: 21,
    opacity: 0.5,
    position: "absolute",
  },
  iconlyboldheart: {
    top: "0%",
    bottom: "71.96%",
  },
  k: {
    top: 32,
  },
  text: {
    top: 89,
  },
  iconlylightOutlinechat: {
    top: "53.27%",
    bottom: "18.69%",
  },
  iconlyboldheartParent: {
    height: "14.94%",
    width: "8%",
    top: "63.27%",
    right: "8.53%",
    bottom: "21.79%",
    left: "83.47%",
    position: "absolute",
  },
  michealBruno: {
    top: 429,
    opacity: 0.5,
  },
  drJohnDoe: {
    top: 472,
  },
  chrisOkorie: {
    top: 530,
  },
  greatInformationShared: {
    top: 447,
    opacity: 0.5,
  },
  reallyGoodStuffits: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  itSoMuch: {
    margin: Margin.m_sm,
  },
  reallyGoodStuffitsContainer: {
    top: 490,
  },
  wonderfullllllllll: {
    top: 548,
  },
  unsplashhhcfgcgwqmyIcon1: {
    top: 800,
  },
  vectorIcon1: {
    top: "112.26%",
    bottom: "-14.4%",
  },
  groupParent1: {
    top: 716,
  },
  groupContainer: {
    height: 1432,
    top: 0,
  },
  frameIcon: {
    top: 268,
    left: 142,
  },
  frameIcon1: {
    top: 991,
    left: 141,
  },
  groupParent: {
    top: 96,
  },
  ellipseIcon: {
    top: 48,
    left: 20,
    width: 37,
    height: 37,
    position: "absolute",
  },
  groupIcon: {
    height: "2.08%",
    width: "4.64%",
    top: "7.07%",
    right: "25.74%",
    bottom: "90.84%",
    left: "69.62%",
  },
  groupChild5: {
    backgroundColor: Color.gray_1200,
    height: 59,
    top: 96,
  },
  groupChild6: {
    height: 96,
    top: 0,
    backgroundColor: Color.lightThemeWhite1,
  },
  groupChild7: {
    backgroundColor: Color.white_100,
    opacity: 0.9,
    top: 0,
  },
  rectangleParent2: {
    top: 742,
  },
  ellipseParent: {
    top: 0,
    height: 812,
    width: 375,
  },
  homepageLearn: {
    flex: 1,
    overflow: "hidden",
    width: "100%",
    height: 812,
    backgroundColor: Color.lightThemeWhite1,
  },
});

export default HOMEPAGELEARN;
