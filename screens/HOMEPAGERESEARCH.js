import * as React from "react";
import {
  ScrollView,
  View,
  Dimensions,
  StyleSheet,
  Pressable,
  Image,
  TouchableHighlight,
  Text,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import FebruarySaleContainer from "../components/FebruarySaleContainer";
import { useNavigation } from "@react-navigation/native";
import HealthTechContainer from "../components/HealthTechContainer";
import SectionCard from "../components/SectionCard";
import PreventiveWaysSection from "../components/PreventiveWaysSection";
import ConnectSection from "../components/ConnectSection";
import LearnSection from "../components/LearnSection";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const HOMEPAGERESEARCH = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homepageResearch}>
      <View style={styles.horizontalCardsScrollsParent}>
        <FebruarySaleContainer />
        <ScrollView
          style={styles.groupWrapper}
          indicatorStyle="black"
          horizontal
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.frameScrollViewContent}
        >
          <View style={styles.component4cardHoveringParent}>
            <Pressable
              style={styles.component4cardHovering}
              onPress={() => navigation.navigate("HOMEPAGERESEARCHBUYNOW")}
            >
              {/* <Carousel  /> */}
            </Pressable>
            <HealthTechContainer
              authorImageUrl={require("../assets/image.png")}
              titleText="The Health-Tech Strategy"
              authorName="Dr. Knut Hamsun"
              propLeft={245}
              propDisplay="none"
            />
            <Pressable
              style={styles.image10}
              onPress={() => navigation.navigate("HOMEPAGERESEARCHBUYNOW")}
            >
              <Image
                style={[styles.icon, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/image-101.png")}
              />
            </Pressable>
            <View style={styles.component6Parent}>
              <HealthTechContainer
                authorImageUrl={require("../assets/image1.png")}
                titleText="COVID Vaccination trials "
                authorName="J.R.R Tolkien"
                propLeft={232}
                propDisplay="unset"
              />
              <Image
                style={[styles.image8Icon, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/image-8.png")}
              />
              <Image
                style={[styles.image9Icon, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/image-9.png")}
              />
            </View>
          </View>
        </ScrollView>
        <TouchableHighlight
          style={styles.arrowsPosition}
          underlayColor="#fff"
          activeOpacity={0.2}
          onPress={() => {}}
        >
          <Image
            style={[styles.icon1, styles.iconLayout, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../assets/arrows.png")}
          />
        </TouchableHighlight>
        <Image
          style={[styles.arrowsIcon, styles.iconLayout, styles.arrowsPosition]}
          resizeMode="cover"
          source={require("../assets/arrows1.png")}
        />
        <View style={styles.dentalParent}>
          <Text style={[styles.dental, styles.dentalTypo, styles.dentalTypo1]}>
            Dental
          </Text>
          <Text style={[styles.oncology, styles.dentalTypo]}>Oncology</Text>
          <Text
            style={[styles.genomics, styles.dentalTypo, styles.dentalTypo1]}
          >
            Genomics
          </Text>
          <Text
            style={[styles.epidemiology, styles.dentalTypo, styles.dentalTypo1]}
          >
            Epidemiology
          </Text>
          <SectionCard
            doctorName="Dr. Naoki Urasawa"
            dentalProcedureName="Sparkling Teeth "
            dentistName="Kentaro Miura"
            genomicsName="Dental Implant V2 "
            mangaArtistName="Dr. Shane Warne"
            handbookName="Dental Handbook"
            dentistName1="Osamu Aslam"
            dentistName2="4.3"
            childDentalCareName="Child Dental Care"
            propTop={38}
            propWidth={71}
            propWidth1={55}
            propWidth2={65}
            propWidth3={56}
            propTop1={22}
          />
          <PreventiveWaysSection />
          <SectionCard
            doctorName="Dr. Brain St."
            dentalProcedureName="Reference Genome"
            dentistName="Brett Lee"
            genomicsName="Genomics"
            mangaArtistName="Hirohiko Araki"
            handbookName="Handbook"
            dentistName1="Dr. Kevin Lee"
            dentistName2="4.9"
            childDentalCareName="Individual Cells"
            propTop={528}
            propWidth={44}
            propWidth1={34}
            propWidth2={54}
            propWidth3={49}
            propBorderRadius={10}
            propTop1={20}
            propWidth4={112}
          />
          <SectionCard
            doctorName="Genzi Porse"
            dentalProcedureName="Master Study"
            dentistName="Dr. Vincent Loe"
            genomicsName="Genomics"
            mangaArtistName="Peter Pan"
            handbookName="Essential Health"
            dentistName1="Stuart Markin"
            dentistName2="4.7"
            childDentalCareName="Epidemiology "
            propTop={773}
            propWidth={45}
            propWidth1={57}
            propWidth2={37}
            propWidth3={52}
            propBorderRadius={10}
            propTop1={20}
            propWidth4={112}
          />
        </View>
        <ConnectSection />
      </View>
      <View style={[styles.groupParent, styles.groupPosition]}>
        <LearnSection />
        <View style={[styles.groupChild, styles.groupPosition]} />
        <View style={styles.bottomTabsWrapper}>
          <View style={[styles.bottomTabs, styles.wrapperPosition]}>
            <View style={[styles.bottomTabs, styles.wrapperPosition]}>
              <View style={[styles.bottomTabs, styles.wrapperPosition]}>
                <TouchableHighlight
                  style={styles.iconlybrokenprofile}
                  underlayColor="#fff"
                  activeOpacity={0.2}
                  onPress={() => navigation.navigate("PROFILELIFESTYLE")}
                >
                  <Image
                    style={[styles.icon2, styles.iconLayout2]}
                    resizeMode="cover"
                    source={require("../assets/vector.png")}
                  />
                </TouchableHighlight>
                <Pressable
                  style={[styles.vector, styles.vectorPosition]}
                  onPress={() => {}}
                >
                  <Image
                    style={[styles.icon2, styles.iconLayout2]}
                    resizeMode="cover"
                    source={require("../assets/vector2.png")}
                  />
                </Pressable>
                <Pressable
                  style={[styles.iconlybrokenplus, styles.vectorPosition]}
                  onPress={() => navigation.navigate("ADDPOST")}
                >
                  <Image
                    style={[styles.icon2, styles.iconLayout2]}
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
                    style={[styles.icon2, styles.iconLayout2]}
                    resizeMode="cover"
                    source={require("../assets/combinedshape.png")}
                  />
                </Pressable>
                <Pressable
                  style={[styles.wrapper, styles.wrapperPosition]}
                  onPress={() => navigation.navigate("NOTIFICATION")}
                >
                  <Image
                    style={[styles.icon2, styles.iconLayout2]}
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
  frameScrollViewContent: {
    flexDirection: "column",
  },
  iconLayout2: {
    height: "100%",
    width: "100%",
  },
  iconLayout1: {
    top: 12,
    height: 263,
    width: 200,
    borderRadius: Border.br_lg,
    position: "absolute",
  },
  iconLayout: {
    borderRadius: Border.br_xs,
    marginTop: -168.5,
    overflow: "hidden",
  },
  arrowsPosition: {
    height: 36,
    width: 36,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  dentalTypo: {
    width: 343,
    textAlign: "left",
    color: Color.neutral9001,
    fontFamily: FontFamily.nunitoSansBlack,
    fontWeight: "900",
    lineHeight: 30,
    fontSize: FontSize.size_10xl,
    position: "absolute",
  },
  dentalTypo1: {
    left: 5,
    width: 343,
    textAlign: "left",
    color: Color.neutral9001,
    fontFamily: FontFamily.nunitoSansBlack,
    fontWeight: "900",
    lineHeight: 30,
    fontSize: FontSize.size_10xl,
  },
  groupPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  wrapperPosition: {
    bottom: "0%",
    position: "absolute",
  },
  vectorPosition: {
    width: "8.12%",
    height: "92.45%",
    bottom: "7.55%",
    top: "0%",
    position: "absolute",
  },
  component4cardHovering: {
    backgroundColor: Color.gray_100,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 15,
    elevation: 15,
    shadowOpacity: 1,
    width: 225,
    borderRadius: Border.br_lg,
    left: 0,
    height: 360,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    borderRadius: Border.br_lg,
  },
  image10: {
    left: 12,
    top: 15,
    height: 263,
    width: 200,
    position: "absolute",
  },
  image8Icon: {
    left: 503,
  },
  image9Icon: {
    left: 0,
  },
  component6Parent: {
    left: 258,
    width: 457,
    height: 360,
    top: 0,
    position: "absolute",
  },
  component4cardHoveringParent: {
    width: 715,
    height: 360,
  },
  groupWrapper: {
    left: 38,
    top: 0,
    position: "absolute",
    width: "100%",
  },
  icon1: {
    marginLeft: -180.5,
  },
  arrowsIcon: {
    marginLeft: 134.5,
  },
  dental: {
    top: 0,
  },
  oncology: {
    top: 245,
    left: 6,
  },
  genomics: {
    top: 490,
  },
  epidemiology: {
    top: 735,
  },
  dentalParent: {
    top: 801,
    left: 8,
    width: 349,
    height: 948,
    position: "absolute",
  },
  horizontalCardsScrollsParent: {
    top: 155,
    left: 7,
    width: 361,
    height: 657,
    position: "absolute",
  },
  groupChild: {
    top: 701,
    backgroundColor: Color.white_100,
    height: 70,
    opacity: 0.9,
  },
  icon2: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  iconlybrokenprofile: {
    left: "92.21%",
    width: "7.79%",
    height: "92.45%",
    bottom: "7.55%",
    right: "0%",
    top: "0%",
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
    left: "0%",
    right: "0%",
    top: "0%",
    bottom: "0%",
    height: "100%",
    width: "100%",
  },
  bottomTabsWrapper: {
    height: "3.51%",
    width: "82.13%",
    top: "93.82%",
    right: "7.47%",
    bottom: "2.67%",
    left: "10.4%",
    position: "absolute",
  },
  groupParent: {
    top: 41,
    height: 771,
  },
  homepageResearch: {
    backgroundColor: Color.lightThemeWhite1,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default HOMEPAGERESEARCH;
