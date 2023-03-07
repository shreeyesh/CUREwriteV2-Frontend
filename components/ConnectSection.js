import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import ConnectContainer from "../components/ConnectContainer";
import { FontFamily, Border, Color, FontSize, Padding } from "../GlobalStyles";

const ConnectSection = () => {
  return (
    <View style={[styles.groupWrapper, styles.cardLayout]}>
      <View style={styles.cardParent}>
        <ConnectContainer
          doctorName="Dr. Mariana Jones..."
          doctorExperience="MBBS, 11+ Years of Experience in Dental"
          doctorImageUrl={require("../assets/ava.png")}
          doctorOrganizationImageUr={require("../assets/opentowork.png")}
          propLeft={0}
        />
        <ConnectContainer
          doctorName="Dr. Jackson Knox     "
          doctorExperience="Senior Member at World Health Organization"
          doctorImageUrl={require("../assets/ava1.png")}
          doctorOrganizationImageUr={require("../assets/ava1.png")}
          propLeft={576}
        />
        <ConnectContainer
          doctorName="Moxeley Mako..."
          doctorExperience="Senior Lead at Aklem Laboratories "
          doctorImageUrl={require("../assets/ava2.png")}
          doctorOrganizationImageUr={require("../assets/opentowork.png")}
          propLeft={192}
        />
        <View style={[styles.card, styles.cardLayout]}>
          <View style={[styles.cardChild, styles.btnBorder]} />
          <View style={[styles.btn, styles.btnBorder]}>
            <Text style={[styles.connect, styles.connectTypo]}>Connect</Text>
          </View>
          <Text
            style={[
              styles.drMarianaJones,
              styles.mbbs11YearsPosition,
              styles.connectTypo,
            ]}
          >
            Andrew Martin
          </Text>
          <Text style={[styles.mbbs11Years, styles.mbbs11YearsPosition]}>
            Talent Acquisition Specialist – Pharma
          </Text>
          <Image
            style={[styles.avaIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/ava1.png")}
          />
          <Image
            style={[styles.opentoworkIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/ava1.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardLayout: {
    height: 237,
    position: "absolute",
  },
  btnBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  connectTypo: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  mbbs11YearsPosition: {
    textAlign: "center",
    left: "10.99%",
    position: "absolute",
  },
  iconPosition: {
    height: 84,
    top: 20,
    position: "absolute",
  },
  cardChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_2xs,
    backgroundColor: Color.lightThemeWhite1,
    borderColor: "#e0dfdc",
  },
  connect: {
    fontSize: FontSize.size_5xl,
    color: Color.midnightblue,
    textAlign: "left",
  },
  btn: {
    height: "12.24%",
    width: "77.47%",
    top: "79.96%",
    right: "11.26%",
    bottom: "7.81%",
    left: "11.26%",
    borderRadius: Border.br_4xs,
    borderColor: "#02256d",
    flexDirection: "row",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_xs,
    alignItems: "center",
    justifyContent: "center",
  },
  drMarianaJones: {
    width: "70.88%",
    top: "52.32%",
    fontSize: FontSize.size_4xl,
    color: Color.lightThemeDark1,
  },
  mbbs11Years: {
    width: "71.43%",
    top: "62.87%",
    fontSize: FontSize.size_2xl,
    fontWeight: "300",
    fontFamily: FontFamily.robotoLight,
    color: Color.lightThemeGrey1,
  },
  avaIcon: {
    width: "46.15%",
    right: "26.92%",
    left: "26.92%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  opentoworkIcon: {
    left: 49,
    width: 84,
  },
  card: {
    top: 1,
    left: 384,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 182,
  },
  cardParent: {
    top: -1,
    left: 0,
    width: 758,
    height: 238,
    position: "absolute",
  },
  groupWrapper: {
    top: 531,
    left: 8,
    width: 353,
  },
});

export default ConnectSection;
