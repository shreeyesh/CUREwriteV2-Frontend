import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, Border, FontSize, Margin } from "../GlobalStyles";

const FebruarySaleContainer = () => {
  return (
    <View style={styles.horizontalCardsScrolls}>
      <LinearGradient
        style={[styles.cardHorizontal, styles.cardHorizontalLayout]}
        locations={[0, 1]}
        colors={["#fbda61", "#f76b1c"]}
      >
        <Image
          style={[
            styles.paymentMethodmastercard16Icon,
            styles.paymentIconPosition,
            styles.paymentIconLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/payment-methodmastercard16.png")}
        />
        <Image
          style={[styles.paymentMethodvisa16Icon, styles.paymentIconPosition]}
          resizeMode="cover"
          source={require("../assets/payment-methodvisa16.png")}
        />
        <Image
          style={[
            styles.paymentMethodpaypal16Icon,
            styles.paymentIconPosition,
            styles.paymentIconLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/payment-methodmastercard16.png")}
        />
        <View style={[styles.rectangleParent, styles.groupChildPosition]}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <Image
            style={[styles.groupItem, styles.groupLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-211.png")}
          />
        </View>
        <Text
          style={[
            styles.text,
            styles.textFlexBox,
            styles.textClr,
            styles.textTypo,
          ]}
        >
          -25%
        </Text>
        <Text
          style={[
            styles.februarySale,
            styles.februarySaleTypo,
            styles.textFlexBox,
            styles.textClr,
          ]}
        >
          February Sale
        </Text>
      </LinearGradient>
      <View style={[styles.cardHorizontal2, styles.cardHorizontal2Layout]}>
        <LinearGradient
          style={[styles.gradientsgothica, styles.cardHorizontalLayout]}
          locations={[0, 1]}
          colors={["#3452bd", "#082440"]}
        />
        <Text style={styles.containerPosition}>
          <Text style={styles.joinThePodcast}>
            <Text style={styles.joinThePodcast1}>Join the Podcast</Text>
          </Text>
          <Text style={styles.curewriteSpeaks}>
            <Text style={styles.februarySaleTypo}>CUREwrite Speaks!</Text>
          </Text>
        </Text>
        <Image
          style={[styles.maskGroupIcon, styles.groupLayout]}
          resizeMode="cover"
          source={require("../assets/mask-group.png")}
        />
        <Text
          style={[
            styles.drRashikaTripathi,
            styles.textFlexBox,
            styles.textTypo,
          ]}
        >
          Dr. Rashika Tripathi
        </Text>
      </View>
      <View
        style={[
          styles.gradientsstripeIsTooSeriouParent,
          styles.cardHorizontal2Layout,
        ]}
      >
        <LinearGradient
          style={[styles.gradientsgothica, styles.cardHorizontalLayout]}
          locations={[0, 1]}
          colors={["#b9d0e6", "#6d98c2"]}
        />
        <Text style={[styles.containerPosition, styles.februarySaleTypo]}>
          <Text style={styles.joinThePodcast}>Read by Healthcare</Text>
          <Text style={styles.curewriteSpeaks}>Category</Text>
        </Text>
        <Image
          style={styles.unsplashtkxjoaSn78Icon}
          resizeMode="cover"
          source={require("../assets/unsplashtkxjoa-sn78.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardHorizontalLayout: {
    backgroundColor: "transparent",
    width: 430,
    top: 0,
    height: 120,
    position: "absolute",
  },
  paymentIconPosition: {
    height: 28,
    top: 79,
    position: "absolute",
  },
  paymentIconLayout: {
    width: 40,
    height: 28,
    top: 79,
  },
  groupChildPosition: {
    top: 0,
    width: 64,
    position: "absolute",
  },
  groupLayout: {
    height: 50,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  textClr: {
    color: Color.f8F5F1,
    textAlign: "left",
    letterSpacing: 0,
  },
  textTypo: {
    fontFamily: FontFamily.subtitleButtonBold1,
    fontWeight: "700",
  },
  februarySaleTypo: {
    fontFamily: FontFamily.nunitoExtrabold,
    fontWeight: "800",
  },
  cardHorizontal2Layout: {
    overflow: "hidden",
    backgroundColor: Color.lightThemeWhite1,
    width: 430,
    borderRadius: Border.br_lg,
    top: 0,
    height: 120,
    position: "absolute",
  },
  paymentMethodmastercard16Icon: {
    left: 244,
  },
  paymentMethodvisa16Icon: {
    left: 191,
    width: 43,
    height: 28,
    top: 79,
  },
  paymentMethodpaypal16Icon: {
    left: 141,
  },
  groupChild: {
    backgroundColor: Color.lightseagreen,
    height: 54,
    left: 0,
    width: 64,
  },
  groupItem: {
    top: 29,
    left: 0,
    width: 64,
  },
  rectangleParent: {
    left: 56,
    height: 79,
    width: 64,
  },
  text: {
    top: 27,
    left: 67,
    fontSize: FontSize.paragraphSemiBold_size,
  },
  februarySale: {
    top: 7,
    fontSize: FontSize.size_13xl,
    left: 141,
  },
  cardHorizontal: {
    left: 444,
    borderRadius: Border.br_lg,
    backgroundColor: "transparent",
    width: 430,
  },
  gradientsgothica: {
    left: 0,
  },
  joinThePodcast1: {
    fontFamily: FontFamily.nunitoRegular,
  },
  joinThePodcast: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  curewriteSpeaks: {
    margin: Margin.m_sm,
  },
  containerPosition: {
    fontSize: FontSize.size_11xl,
    left: 50,
    top: 25,
    textAlign: "left",
    color: Color.f8F5F1,
    letterSpacing: 0,
    position: "absolute",
  },
  maskGroupIcon: {
    top: 32,
    left: 285,
    width: 50,
  },
  drRashikaTripathi: {
    top: 44,
    left: 347,
    fontSize: FontSize.size_base,
    color: Color.lightThemeWhite1,
    width: 75,
    height: 19,
    textAlign: "left",
    letterSpacing: 0,
    fontFamily: FontFamily.subtitleButtonBold1,
    fontWeight: "700",
  },
  cardHorizontal2: {
    left: 0,
  },
  unsplashtkxjoaSn78Icon: {
    top: 10,
    left: 307,
    borderRadius: Border.br_xs,
    width: 100,
    height: 100,
    position: "absolute",
  },
  gradientsstripeIsTooSeriouParent: {
    left: 884,
  },
  horizontalCardsScrolls: {
    top: 387,
    left: 8,
    width: 349,
    height: 120,
    position: "absolute",
  },
});

export default FebruarySaleContainer;
