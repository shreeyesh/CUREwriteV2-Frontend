import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import FocusContainer from "../components/FocusContainer";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const QnACard = ({ commneterI4 }) => {
  return (
    <View style={styles.groupParent}>
      <View
        style={[
          styles.groupContainer,
          styles.groupPosition,
          styles.groupPosition1,
        ]}
      >
        <View
          style={[
            styles.groupContainer,
            styles.groupPosition,
            styles.groupPosition1,
          ]}
        >
          <Text style={[styles.greenHospitals, styles.kFlexBox]}>
            {commneterI4}
          </Text>
          <Text style={[styles.hrsAgo, styles.hrsAgoTypo]}>2hrs Ago</Text>
          <Text style={[styles.loremIpsumDolor, styles.hrsAgoTypo]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra
            aliquam, congue habitasse tortor. Fringilla nunc aliquam volutpat
            suscipit porttitor in quis sagittis hac. Tellus sed ac libero
          </Text>
          <Image
            style={[styles.unsplash6rrIp06p4Icon, styles.groupPosition]}
            resizeMode="cover"
            source={require("../assets/unsplash-6rr-ip06p4.png")}
          />
          <Image
            style={[styles.iconlyboldheart, styles.iconlyboldheartLayout]}
            resizeMode="cover"
            source={require("../assets/iconlyboldheart.png")}
          />
          <Text style={[styles.text, styles.textTypo]}>13</Text>
          <View
            style={[
              styles.rectangleParent,
              styles.groupPosition,
              styles.groupPosition1,
            ]}
          >
            <View
              style={[
                styles.groupChild,
                styles.groupPosition,
                styles.groupPosition1,
              ]}
            />
            <Image
              style={[
                styles.arrowUpIcon,
                styles.arrowIconLayout,
                styles.arrowIconLayout1,
                styles.arrowUpIconPosition,
              ]}
              resizeMode="cover"
              source={require("../assets/arrowup.png")}
            />
            <Image
              style={[
                styles.arrowDownIcon,
                styles.arrowIconLayout,
                styles.arrowIconLayout1,
              ]}
              resizeMode="cover"
              source={require("../assets/arrowdown.png")}
            />
            <Text style={[styles.k, styles.kTypo, styles.kFlexBox]}>56.9k</Text>
            <Image
              style={[
                styles.akarIconsshareBox,
                styles.arrowIconLayout,
                styles.arrowIconLayout1,
                styles.arrowUpIconPosition,
              ]}
              resizeMode="cover"
              source={require("../assets/akariconssharebox.png")}
            />
            <Image
              style={[styles.archiveAddIcon, styles.arrowIconLayout]}
              resizeMode="cover"
              source={require("../assets/archiveadd.png")}
            />
            <Image
              style={styles.unsplashp5bobf0xjuaIcon}
              resizeMode="cover"
              source={require("../assets/unsplashp5bobf0xjua.png")}
            />
            <Text
              style={[styles.drMinAkhter, styles.hrAgoPosition, styles.kTypo]}
            >
              Dr. Min Akhter
            </Text>
            <Text style={[styles.hrAgo, styles.hrAgoPosition]}>15hr ago</Text>
            <Text
              style={[styles.classifyBurnsHow, styles.kTypo, styles.kFlexBox]}
            >
              Classify Burns. How will you manage a case of 40% burn?
            </Text>
            <View style={[styles.frameView, styles.groupPosition]}>
              <FocusContainer propTop={0} propWidth={290} />
              <Image
                style={[styles.iconlyboldheart1, styles.iconlyboldheartLayout]}
                resizeMode="cover"
                source={require("../assets/iconlyboldheart.png")}
              />
              <Text style={[styles.text1, styles.textTypo]}>25</Text>
            </View>
          </View>
        </View>
        <View style={styles.groupItem} />
      </View>
      <Image
        style={styles.unsplashp5bobf0xjuaIcon1}
        resizeMode="cover"
        source={require("../assets/unsplashp5bobf0xjua1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition: {
    left: 0,
    position: "absolute",
  },
  groupPosition1: {
    top: 0,
    left: 0,
    width: 335,
  },
  kFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  hrsAgoTypo: {
    opacity: 0.8,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  iconlyboldheartLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "2.09%",
    right: "94.93%",
    width: "2.99%",
    overflow: "hidden",
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.lightThemeDark1,
    left: 20,
    position: "absolute",
  },
  arrowIconLayout: {
    height: 24,
    position: "absolute",
  },
  arrowIconLayout1: {
    width: 20,
    height: 24,
  },
  arrowUpIconPosition: {
    top: 139,
    width: 20,
  },
  kTypo: {
    fontFamily: FontFamily.nunitoSansBlack,
    fontWeight: "900",
  },
  hrAgoPosition: {
    textAlign: "center",
    left: 75,
    color: Color.lightThemeDark1,
    position: "absolute",
  },
  greenHospitals: {
    top: 458,
    fontSize: FontSize.subtitleButtonBold1_size,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemibold,
    color: Color.lightThemeDark1,
    textAlign: "left",
    left: 45,
  },
  hrsAgo: {
    top: 463,
    left: 290,
    color: Color.gray_300,
  },
  loremIpsumDolor: {
    top: 478,
    color: Color.dimgray_400,
    width: 289,
    left: 45,
    opacity: 0.8,
    fontSize: FontSize.size_base,
  },
  unsplash6rrIp06p4Icon: {
    top: 457,
    width: 40,
    height: 40,
  },
  iconlyboldheart: {
    height: "1.86%",
    top: "94.24%",
    bottom: "3.9%",
  },
  text: {
    top: 504,
  },
  groupChild: {
    borderRadius: Border.br_lg,
    backgroundColor: Color.silver_200,
    height: 178,
    opacity: 0.2,
  },
  arrowUpIcon: {
    left: 30,
  },
  arrowDownIcon: {
    top: 138,
    left: 88,
  },
  k: {
    top: 142,
    left: 53,
    color: Color.gray_400,
    width: 35,
    fontSize: FontSize.size_2xl,
  },
  akarIconsshareBox: {
    left: 286,
    overflow: "hidden",
    top: 139,
  },
  archiveAddIcon: {
    left: 259,
    width: 21,
    height: 24,
    top: 140,
  },
  unsplashp5bobf0xjuaIcon: {
    top: 152,
    left: 44,
    width: 39,
    height: 39,
    position: "absolute",
  },
  drMinAkhter: {
    top: 12,
    fontSize: FontSize.size_5xl,
  },
  hrAgo: {
    top: 33,
    fontSize: FontSize.size_2xl,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: 75,
  },
  classifyBurnsHow: {
    top: 72,
    left: 19,
    fontSize: FontSize.paragraphSemiBold_size,
    lineHeight: 24,
    color: Color.neutral9001,
    width: 291,
  },
  iconlyboldheart1: {
    height: "4.02%",
    top: "92.37%",
    bottom: "3.61%",
  },
  text1: {
    top: 227,
  },
  frameView: {
    top: 193,
    height: 249,
    width: 335,
  },
  rectangleParent: {
    height: 442,
  },
  groupContainer: {
    height: 538,
  },
  groupItem: {
    top: 147,
    left: 266,
    backgroundColor: Color.steelblue_100,
    width: 7,
    height: 9,
    position: "absolute",
  },
  unsplashp5bobf0xjuaIcon1: {
    top: 15,
    left: 27,
    width: 36,
    height: 36,
    position: "absolute",
  },
  groupParent: {
    height: 538,
    width: 335,
    left: 20,
    top: 140,
    position: "absolute",
  },
});

export default QnACard;
