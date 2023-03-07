import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import PatientInfoContainer from "../components/PatientInfoContainer";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const PreventiveWaysSection = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.groupParent}>
      <Pressable
        style={styles.image13Parent}
        onPress={() => navigation.navigate("HOMEPAGERESEARCHBUYNOW1")}
      >
        <Image
          style={[styles.image13Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/image-131.png")}
        />
        <Image
          style={[styles.image15Icon, styles.image15IconPosition]}
          resizeMode="cover"
          source={require("../assets/image-131.png")}
        />
        <View style={[styles.rectangleParent, styles.image15IconPosition]}>
          <LinearGradient
            style={[styles.groupChild, styles.iconLayout]}
            locations={[0, 0.77]}
            colors={["rgba(28, 28, 28, 0)", "#1c1c1c"]}
          />
          <View style={styles.drSrKhalelWrapper}>
            <Text style={styles.drSrKhalel}>Dr. S.R. Khalel</Text>
          </View>
          <View style={styles.parent}>
            <Text style={[styles.text, styles.textClr]}>4.1</Text>
            <Image
              style={styles.groupItem}
              resizeMode="cover"
              source={require("../assets/star-1.png")}
            />
          </View>
          <Text style={[styles.theOncologist, styles.textClr]}>
            <Text style={styles.theOncologist1}>{`The Oncologist `}</Text>
          </Text>
        </View>
        <Image
          style={[styles.image16Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/image-131.png")}
        />
        <PatientInfoContainer
          doctorName="Shawn Doe"
          doctorRating="3.9"
          specialtyArea="Oncology"
          propLeft={264}
          propWidth={44}
          propTextAlign="left"
          propTop={22}
        />
        <Image
          style={[styles.image17Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/image-131.png")}
        />
        <PatientInfoContainer
          doctorName="Hirohiko Araki"
          doctorRating="3.5"
          specialtyArea="Clinical Trial"
          propLeft={396}
          propWidth={54}
        />
      </Pressable>
      <PatientInfoContainer
        doctorName="Dr. Petersen S"
        doctorRating="4.6"
        specialtyArea="Preventive Ways"
        propLeft={4}
        propWidth={53}
        propTextAlign="right"
        propTop={20}
        propWidth1={112}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: 127,
    borderRadius: Border.br_lg,
    top: 0,
    position: "absolute",
  },
  image15IconPosition: {
    left: 132,
    width: 127,
    position: "absolute",
  },
  textClr: {
    color: Color.lightThemeWhite1,
    textAlign: "left",
    position: "absolute",
  },
  image13Icon: {
    height: 175,
    left: 0,
  },
  image15Icon: {
    borderRadius: Border.br_lg,
    top: 0,
    height: 175,
  },
  groupChild: {
    height: 57,
    backgroundColor: "transparent",
    left: 0,
  },
  drSrKhalel: {
    letterSpacing: -0.2,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.silver_100,
    textAlign: "left",
    textTransform: "capitalize",
    fontSize: FontSize.size_xs,
    top: 0,
    left: 0,
    position: "absolute",
  },
  drSrKhalelWrapper: {
    width: 52,
    height: 12,
    left: 8,
    top: 38,
    position: "absolute",
  },
  text: {
    letterSpacing: -0.4,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: FontFamily.robotoMonoBold,
    color: Color.lightThemeWhite1,
    fontSize: FontSize.size_xs,
    top: 0,
    left: 0,
  },
  groupItem: {
    top: 2,
    left: 16,
    width: 8,
    height: 8,
    borderRadius: Border.br_lg,
    position: "absolute",
  },
  parent: {
    left: 96,
    width: 24,
    height: 11,
    top: 38,
    position: "absolute",
  },
  theOncologist1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  theOncologist: {
    top: 22,
    fontSize: FontSize.size_2xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemibold,
    textTransform: "capitalize",
    color: Color.lightThemeWhite1,
    left: 8,
  },
  rectangleParent: {
    top: 118,
    height: 58,
  },
  image16Icon: {
    left: 264,
    height: 175,
  },
  image17Icon: {
    left: 396,
    height: 175,
  },
  image13Parent: {
    left: 4,
    shadowColor: "rgba(153, 153, 153, 0.25)",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    width: 523,
    height: 176,
    top: 0,
    position: "absolute",
  },
  groupParent: {
    top: 283,
    width: 343,
    height: 175,
    left: 0,
    position: "absolute",
  },
});

export default PreventiveWaysSection;
