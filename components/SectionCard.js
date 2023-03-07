import * as React from "react";
import { useMemo } from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const SectionCard = ({
  doctorName,
  dentalProcedureName,
  dentistName,
  genomicsName,
  mangaArtistName,
  handbookName,
  dentistName1,
  dentistName2,
  childDentalCareName,
  propTop,
  propWidth,
  propWidth1,
  propWidth2,
  propWidth3,
  propBorderRadius,
  propTop1,
  propWidth4,
}) => {
  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  const groupView4Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  const groupView5Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth1),
    };
  }, [propWidth1]);

  const groupView6Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth2),
    };
  }, [propWidth2]);

  const groupView7Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth3),
    };
  }, [propWidth3]);

  const starIconStyle = useMemo(() => {
    return {
      ...getStyleValue("borderRadius", propBorderRadius),
    };
  }, [propBorderRadius]);

  const childDentalCareStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop1),
      ...getStyleValue("width", propWidth4),
    };
  }, [propTop1, propWidth4]);

  return (
    <View style={[styles.groupParent, styles.parentPosition, frameViewStyle]}>
      <View style={styles.image13Parent}>
        <Image
          style={[styles.image13Icon, styles.groupLayout]}
          resizeMode="cover"
          source={require("../assets/image-131.png")}
        />
        <Image
          style={[styles.image15Icon, styles.image15IconPosition]}
          resizeMode="cover"
          source={require("../assets/image-131.png")}
        />
        <View
          style={[
            styles.rectangleParent,
            styles.groupPosition1,
            styles.image15IconPosition,
          ]}
        >
          <LinearGradient
            style={[styles.groupChild, styles.groupLayout]}
            locations={[0, 0.77]}
            colors={["rgba(28, 28, 28, 0)", "#1c1c1c"]}
          />
          <View
            style={[
              styles.drNaokiUrasawaWrapper,
              styles.wrapperPosition,
              groupView4Style,
            ]}
          >
            <Text style={[styles.drNaokiUrasawa, styles.drNaokiUrasawaText]}>
              {doctorName}
            </Text>
          </View>
          <View style={[styles.parent, styles.parentPosition]}>
            <Text style={[styles.text, styles.textClr, styles.textTypo]}>
              4.1
            </Text>
            <Image
              style={[styles.groupItem, styles.groupPosition]}
              resizeMode="cover"
              source={require("../assets/star-1.png")}
            />
          </View>
          <Text
            style={[
              styles.sparklingTeeth,
              styles.textClr,
              styles.drNaokiUrasawaText,
            ]}
          >
            {dentalProcedureName}
          </Text>
        </View>
        <Image
          style={[styles.image16Icon, styles.image16IconPosition]}
          resizeMode="cover"
          source={require("../assets/image-131.png")}
        />
        <View
          style={[
            styles.rectangleGroup,
            styles.image16IconPosition,
            styles.groupPosition1,
          ]}
        >
          <LinearGradient
            style={[styles.groupChild, styles.groupLayout]}
            locations={[0, 0.77]}
            colors={["rgba(28, 28, 28, 0)", "#1c1c1c"]}
          />
          <View
            style={[
              styles.kentaroMiuraWrapper,
              styles.wrapperPosition,
              groupView5Style,
            ]}
          >
            <Text style={[styles.drNaokiUrasawa, styles.drNaokiUrasawaText]}>
              {dentistName}
            </Text>
          </View>
          <View style={[styles.parent, styles.parentPosition]}>
            <Text style={[styles.text, styles.textClr, styles.textTypo]}>
              3.9
            </Text>
            <Image
              style={[styles.groupItem, styles.groupPosition]}
              resizeMode="cover"
              source={require("../assets/star-1.png")}
            />
          </View>
          <Text
            style={[
              styles.sparklingTeeth,
              styles.textClr,
              styles.drNaokiUrasawaText,
            ]}
          >
            {genomicsName}
          </Text>
        </View>
        <Image
          style={[styles.image17Icon, styles.image17IconPosition]}
          resizeMode="cover"
          source={require("../assets/image-131.png")}
        />
        <View
          style={[
            styles.rectangleContainer,
            styles.image17IconPosition,
            styles.groupPosition1,
          ]}
        >
          <LinearGradient
            style={[styles.groupChild, styles.groupLayout]}
            locations={[0, 0.77]}
            colors={["rgba(28, 28, 28, 0)", "#1c1c1c"]}
          />
          <View
            style={[
              styles.drShaneWarneWrapper,
              styles.wrapperPosition,
              groupView6Style,
            ]}
          >
            <Text style={[styles.drNaokiUrasawa, styles.drNaokiUrasawaText]}>
              {mangaArtistName}
            </Text>
          </View>
          <View style={[styles.parent, styles.parentPosition]}>
            <Text style={[styles.text, styles.textClr, styles.textTypo]}>
              3.5
            </Text>
            <Image
              style={[styles.groupItem, styles.groupPosition]}
              resizeMode="cover"
              source={require("../assets/star-1.png")}
            />
          </View>
          <Text
            style={[
              styles.sparklingTeeth,
              styles.textClr,
              styles.drNaokiUrasawaText,
            ]}
          >
            {handbookName}
          </Text>
        </View>
      </View>
      <View
        style={[styles.groupView, styles.groupPosition1, styles.groupLayout]}
      >
        <LinearGradient
          style={[styles.groupChild, styles.groupLayout]}
          locations={[0, 0.77]}
          colors={["rgba(28, 28, 28, 0)", "#1c1c1c"]}
        />
        <View
          style={[
            styles.osamuAslamWrapper,
            styles.wrapperPosition,
            groupView7Style,
          ]}
        >
          <Text style={[styles.drNaokiUrasawa, styles.drNaokiUrasawaText]}>
            {dentistName1}
          </Text>
        </View>
        <View style={[styles.parent, styles.parentPosition]}>
          <Text style={[styles.text3, styles.textClr, styles.textTypo]}>
            {dentistName2}
          </Text>
          <Image
            style={[styles.groupPosition, starIconStyle]}
            resizeMode="cover"
            source={require("../assets/star-1.png")}
          />
        </View>
        <Text
          style={[
            styles.sparklingTeeth,
            styles.textClr,
            styles.drNaokiUrasawaText,
            childDentalCareStyle,
          ]}
        >
          {childDentalCareName}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentPosition: {
    top: 38,
    position: "absolute",
  },
  groupLayout: {
    width: 127,
    position: "absolute",
  },
  image15IconPosition: {
    left: 132,
    width: 127,
    position: "absolute",
  },
  groupPosition1: {
    top: 118,
    height: 57,
  },
  wrapperPosition: {
    height: 12,
    left: 8,
    top: 38,
    position: "absolute",
  },
  drNaokiUrasawaText: {
    textTransform: "capitalize",
    textAlign: "left",
  },
  textClr: {
    color: Color.lightThemeWhite1,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.robotoMonoBold,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: -0.4,
    color: Color.lightThemeWhite1,
    fontSize: FontSize.size_xs,
    top: 0,
    left: 0,
  },
  groupPosition: {
    height: 8,
    width: 8,
    left: 16,
    top: 2,
    position: "absolute",
  },
  image16IconPosition: {
    left: 264,
    width: 127,
    position: "absolute",
  },
  image17IconPosition: {
    left: 396,
    width: 127,
    position: "absolute",
  },
  image13Icon: {
    borderRadius: Border.br_lg,
    top: 0,
    height: 175,
    left: 0,
  },
  image15Icon: {
    borderRadius: Border.br_lg,
    top: 0,
    height: 175,
  },
  groupChild: {
    backgroundColor: "transparent",
    height: 57,
    borderRadius: Border.br_lg,
    top: 0,
    left: 0,
  },
  drNaokiUrasawa: {
    letterSpacing: -0.2,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.silver_100,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    textTransform: "capitalize",
    top: 0,
    left: 0,
    position: "absolute",
  },
  drNaokiUrasawaWrapper: {
    width: 71,
  },
  text: {
    textAlign: "left",
  },
  groupItem: {
    borderRadius: Border.br_lg,
  },
  parent: {
    left: 96,
    width: 24,
    height: 11,
  },
  sparklingTeeth: {
    top: 22,
    fontSize: FontSize.size_2xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemibold,
    textAlign: "left",
    color: Color.lightThemeWhite1,
    textTransform: "capitalize",
    left: 8,
  },
  rectangleParent: {
    height: 57,
  },
  image16Icon: {
    borderRadius: Border.br_lg,
    top: 0,
    height: 175,
  },
  kentaroMiuraWrapper: {
    width: 55,
  },
  rectangleGroup: {
    height: 57,
  },
  image17Icon: {
    borderRadius: Border.br_lg,
    top: 0,
    height: 175,
  },
  drShaneWarneWrapper: {
    width: 65,
  },
  rectangleContainer: {
    height: 57,
  },
  image13Parent: {
    shadowColor: "rgba(153, 153, 153, 0.25)",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    width: 523,
    left: 4,
    top: 0,
    height: 175,
    position: "absolute",
  },
  osamuAslamWrapper: {
    width: 56,
  },
  text3: {
    textAlign: "right",
  },
  groupView: {
    height: 57,
    left: 4,
  },
  groupParent: {
    width: 343,
    height: 175,
    left: 0,
  },
});

export default SectionCard;
