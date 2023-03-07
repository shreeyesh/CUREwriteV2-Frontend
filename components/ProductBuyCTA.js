import * as React from "react";
import { useMemo } from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { Border, FontSize, Color, FontFamily, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const ProductBuyCTA = ({
  productName,
  productAuthor,
  casestudyFocusable,
  buybuttonFocusable,
  group878MarginLeft,
  group878Width,
  studyOfOralHealthMarginLeft,
  studyOfOralHealthWidth,
  rateThisPaperMarginLeft,
  starRatingMarginLeft,
  ganresMarginLeft,
  title,
  buttonLeft,
  button,
}) => {
  const groupViewStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", group878MarginLeft),
      ...getStyleValue("width", group878Width),
    };
  }, [group878MarginLeft, group878Width]);

  const studyOfOralStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", studyOfOralHealthMarginLeft),
      ...getStyleValue("width", studyOfOralHealthWidth),
    };
  }, [studyOfOralHealthMarginLeft, studyOfOralHealthWidth]);

  const rateThisPaperStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", rateThisPaperMarginLeft),
    };
  }, [rateThisPaperMarginLeft]);

  const starRatingIconStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", starRatingMarginLeft),
    };
  }, [starRatingMarginLeft]);

  const ganresStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", ganresMarginLeft),
    };
  }, [ganresMarginLeft]);

  const buttonStyle = useMemo(() => {
    return {
      ...getStyleValue("left", buttonLeft),
    };
  }, [buttonLeft]);

  return (
    <View style={[styles.studyOfOralHealthParent, groupViewStyle]}>
      <Text style={[styles.studyOfOral, studyOfOralStyle]}>{productName}</Text>
      <Text style={styles.drJrrTolkien}>{productAuthor}</Text>
      <Text style={[styles.rateThisPaper, rateThisPaperStyle]}>
        Rate this paper
      </Text>
      <Image
        style={[styles.starRatingIcon, starRatingIconStyle]}
        resizeMode="cover"
        source={require("../assets/star-rating.png")}
      />
      <View
        style={[styles.ganres, styles.ganresFlexBox, ganresStyle]}
        focusable={casestudyFocusable}
      >
        <Text style={styles.title}>{title}</Text>
      </View>
      <View
        style={[styles.button, styles.ganresFlexBox, buttonStyle]}
        focusable={buybuttonFocusable}
      >
        <Text style={styles.button1}>{button}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ganresFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: Border.br_xs,
    alignItems: "center",
    position: "absolute",
  },
  studyOfOral: {
    marginLeft: -92,
    top: 0,
    fontSize: FontSize.header11_size,
    height: 23,
    textAlign: "left",
    color: Color.style,
    fontFamily: FontFamily.subtitleButtonBold1,
    fontWeight: "700",
    width: 184,
    left: "50%",
    position: "absolute",
  },
  drJrrTolkien: {
    marginLeft: -83,
    top: 32,
    width: 167,
    height: 20,
    color: Color.style1,
    fontFamily: FontFamily.nunitoRegular,
    letterSpacing: 0,
    fontSize: FontSize.paragraphSemiBold_size,
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  rateThisPaper: {
    marginLeft: -43,
    bottom: 0,
    display: "flex",
    width: 86,
    height: 14,
    alignItems: "center",
    fontSize: FontSize.size_2xl,
    color: Color.style1,
    textAlign: "left",
    fontFamily: FontFamily.subtitleButtonBold1,
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  starRatingIcon: {
    marginLeft: -59,
    bottom: 23,
    width: 119,
    height: 22,
    left: "50%",
    position: "absolute",
  },
  title: {
    color: Color.grey5001,
    textAlign: "center",
    fontSize: FontSize.size_2xl,
    fontFamily: FontFamily.nunitoRegular,
  },
  ganres: {
    marginLeft: -52,
    top: 61,
    backgroundColor: Color.grey3001,
    width: 104,
    height: 31,
    paddingHorizontal: Padding.p_3xl,
    paddingVertical: Padding.p_lg,
    left: "50%",
  },
  button1: {
    letterSpacing: 0,
    fontSize: FontSize.paragraphSemiBold_size,
    textAlign: "left",
    color: Color.style,
    fontFamily: FontFamily.subtitleButtonBold1,
    fontWeight: "700",
  },
  button: {
    top: 114,
    left: 8,
    backgroundColor: Color.style3,
    width: 169,
    height: 36,
    overflow: "hidden",
    paddingHorizontal: Padding.p_2xl,
    paddingVertical: Padding.p_md,
  },
  studyOfOralHealthParent: {
    marginLeft: -87.5,
    top: 204,
    height: 215,
    width: 184,
    left: "50%",
    position: "absolute",
  },
});

export default ProductBuyCTA;
