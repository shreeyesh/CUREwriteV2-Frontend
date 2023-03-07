import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ProductBuyCTA from "../components/ProductBuyCTA";
import Header from "../components/Header";
import BottomTabs from "../components/BottomTabs";
import BackButton from "../components/BackButton";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const HOMEPAGERESEARCHBUYNOW = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homepageResearchBuyNow}>
      <View style={[styles.groupParent, styles.parentLayout]}>
        <View style={[styles.groupContainer, styles.image10ParentLayout]}>
          <ProductBuyCTA
            productName="Study of Oral Health"
            productAuthor="Dr. J.R.R Tolkien | 1980"
            casestudyFocusable
            buybuttonFocusable
            title="Case Study"
            button="Buy $1000"
          />
          <View style={[styles.image10Parent, styles.image10ParentLayout]}>
            <Image
              style={styles.image10Icon}
              resizeMode="cover"
              source={require("../assets/image-10.png")}
            />
            <Text style={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </Text>
            <Text style={styles.description}>Description</Text>
          </View>
        </View>
        <View style={[styles.abstractParent, styles.parentLayout]}>
          <Text style={[styles.abstract, styles.abstractTypo]}>Abstract</Text>
          <Text style={[styles.theAbstractForContainer, styles.containerTypo]}>
            <Text style={styles.theAbstractFor}>
              The abstract for your medical research is arguably the most
              important piece of your manuscript. Although brief, typically
              between 300-500 words, the abstract is a summary of the key
              aspects of your research.
            </Text>
          </Text>
          <Text style={[styles.aboutAuthor, styles.abstractTypo]}>
            About Author
          </Text>
          <Text style={[styles.drJohnDoeContainer, styles.containerTypo]}>
            <Text style={styles.theAbstractFor}>Dr. John Doe</Text>
            <Text style={styles.theAbstractFor}> </Text>
            <Text style={styles.theAbstractFor}>
              MBBS, Ph.D., Fellow, College of Surgeons.
            </Text>
            <Text
              style={styles.theAbstractFor}
            >{`Ex- Professor & Head of Department
`}</Text>
            <Text style={styles.theAbstractFor}>
              Department of Neurosurgery
            </Text>
            <Text
              style={styles.theAbstractFor}
            >{`Dhaka Medical College & Hospital`}</Text>
          </Text>
          <Text
            style={[styles.publishedInCurewriteContainer, styles.containerTypo]}
          >
            <Text
              style={styles.theAbstractFor}
            >{`Published in Curewrite Journal `}</Text>
            <Text style={styles.theAbstractFor}>500+ purchases</Text>
            <Text style={styles.theAbstractFor}>1000+ citations</Text>
            <Text style={styles.theAbstractFor}>10000+ times download</Text>
          </Text>
          <Text style={[styles.recognization, styles.abstractTypo]}>
            Recognization
          </Text>
        </View>
      </View>
      <View
        style={[styles.homepageResearchBuyNowChild, styles.groupInnerLayout]}
      />
      <View style={styles.ellipseParent}>
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
        <View style={[styles.groupInner, styles.groupInnerLayout]} />
        <Header
          onFramePress={() => {}}
          onIconlyBrokenChatPress={() => {}}
          icon={{ uri: "frame14@3x.png" }}
        />
        <View style={[styles.rectangleParent, styles.rectangleLayout]}>
          <View style={[styles.rectangleView, styles.rectangleLayout]} />
          <BottomTabs
            icon={{ uri: "iconlybrokenprofile@3x.png" }}
            onVectorPress={() => {}}
            onIconlyBrokenPlusPress={() => navigation.navigate("ADDPOST")}
            onIconlyLightOutlineGraphPress={() =>
              navigation.navigate("LEADERBOARDNATIONAL")
            }
            onGroupPressablePress={() => navigation.navigate("NOTIFICATION")}
            icon1={{ uri: "group-830@3x.png" }}
          />
        </View>
      </View>
      <BackButton
        onIconlyLightOutlineArrowLPress={() => navigation.goBack()}
        iconlyLightOutlineArrowLeTop="12.44%"
        iconlyLightOutlineArrowLeBottom="85.32%"
        icon={require("../assets/iconlylightoutlinearrowleft2.png")}
      />
      <Text style={styles.buyNow}>Buy Now</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  parentLayout: {
    width: 319,
    position: "absolute",
  },
  image10ParentLayout: {
    height: 675,
    width: 315,
    top: 0,
    position: "absolute",
  },
  abstractTypo: {
    color: Color.black01,
    fontFamily: FontFamily.nunitoSansBold,
    lineHeight: 26,
    letterSpacing: 0.2,
    fontWeight: "700",
    fontSize: FontSize.header11_size,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  containerTypo: {
    height: 126,
    color: Color.black02,
    fontFamily: FontFamily.nunitoSansSemibold,
    lineHeight: 22,
    letterSpacing: 0.2,
    textAlign: "left",
    fontWeight: "600",
    fontSize: FontSize.paragraphSemiBold_size,
    left: 0,
    width: 319,
    position: "absolute",
  },
  groupInnerLayout: {
    opacity: 0.99,
    width: 375,
    position: "absolute",
  },
  rectangleLayout: {
    height: 70,
    width: 375,
    left: 0,
    position: "absolute",
  },
  image10Icon: {
    left: 80,
    borderRadius: Border.br_lg,
    width: 165,
    height: 195,
    top: 0,
    position: "absolute",
  },
  loremIpsumDolor: {
    top: 477,
    letterSpacing: 0,
    fontFamily: FontFamily.paragraphSemiBold,
    color: Color.style1,
    textAlign: "left",
    fontSize: FontSize.paragraphSemiBold_size,
    fontWeight: "600",
    left: 0,
    width: 315,
    position: "absolute",
  },
  description: {
    top: 444,
    fontFamily: FontFamily.subtitleButtonBold1,
    color: Color.style,
    fontWeight: "700",
    fontSize: FontSize.header11_size,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  image10Parent: {
    left: 0,
  },
  groupContainer: {
    marginLeft: -157.5,
    left: "50%",
  },
  abstract: {
    top: 0,
  },
  theAbstractFor: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  theAbstractForContainer: {
    top: 35,
  },
  aboutAuthor: {
    top: 203,
  },
  drJohnDoeContainer: {
    top: 238,
  },
  publishedInCurewriteContainer: {
    top: 448,
  },
  recognization: {
    top: 410,
  },
  abstractParent: {
    top: 708,
    height: 574,
    left: 0,
  },
  groupParent: {
    top: 155,
    left: 28,
    height: 657,
  },
  homepageResearchBuyNowChild: {
    top: 96,
    left: 1,
    backgroundColor: Color.gray_1200,
    height: 36,
  },
  groupChild: {
    top: 48,
    left: 20,
    width: 37,
    height: 37,
    position: "absolute",
  },
  groupItem: {
    height: "2.08%",
    width: "4.64%",
    top: "7.07%",
    right: "25.74%",
    bottom: "90.84%",
    left: "69.62%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupInner: {
    height: 96,
    left: 0,
    top: 0,
    backgroundColor: Color.lightThemeWhite1,
    opacity: 0.99,
  },
  rectangleView: {
    backgroundColor: Color.white_100,
    opacity: 0.9,
    top: 0,
  },
  rectangleParent: {
    top: 742,
  },
  ellipseParent: {
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
    height: 812,
  },
  buyNow: {
    top: 97,
    left: 141,
    fontSize: FontSize.size_8xl,
    fontFamily: FontFamily.poppinsSemibold,
    color: Color.lightThemeDark1,
    textAlign: "center",
    width: 94,
    fontWeight: "600",
    position: "absolute",
  },
  homepageResearchBuyNow: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 812,
    backgroundColor: Color.lightThemeWhite1,
  },
});

export default HOMEPAGERESEARCHBUYNOW;
