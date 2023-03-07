import * as React from "react";
import { useMemo } from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  ImageSourcePropType,
} from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const FocusSection = ({
  carImageUrl,
  vehicleImageUrl,
  propTop,
  propLeft,
  propTop1,
  propBottom,
  propTop2,
  propBottom1,
  propWidth,
  propWidth1,
  propWidth2,
  propTop3,
  propTop4,
}) => {
  const groupView3Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  const heartIconStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop1),
      ...getStyleValue("bottom", propBottom),
    };
  }, [propTop1, propBottom]);

  const heartIcon1Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop2),
      ...getStyleValue("bottom", propBottom1),
    };
  }, [propTop2, propBottom1]);

  const loremIpsumDolor1Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  const loremIpsumDolor2Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth1),
    };
  }, [propWidth1]);

  const loremIpsumDolor3Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth2),
    };
  }, [propWidth2]);

  const unsplashRiDxDgHg7pwIconStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop3),
    };
  }, [propTop3]);

  const unsplash6rRIP06p4IconStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop4),
    };
  }, [propTop4]);

  return (
    <View
      style={[styles.groupWrapper, styles.groupWrapperLayout, groupView3Style]}
    >
      <View style={[styles.drChrisUilParent, styles.groupWrapperLayout]}>
        <Text style={styles.drChrisUil}>Dr. Chris uil</Text>
        <Text style={[styles.drJoeMickey, styles.drJoeMickeyTypo]}>
          Dr. Joe Mickey
        </Text>
        <Text style={[styles.generalFocus, styles.drJoeMickeyTypo]}>
          General Focus
        </Text>
        <Text style={[styles.hrsAgo, styles.hrsTypo]}>2hrs Ago</Text>
        <Text style={[styles.hrsAgo1, styles.hrsTypo]}>2hrs Ago</Text>
        <Text style={[styles.hrsAgo2, styles.hrsTypo]}>2hrs Ago</Text>
        <Image
          style={[styles.heartIcon, styles.heartIconLayout]}
          resizeMode="cover"
          source={carImageUrl}
        />
        <Image
          style={[styles.heartIcon1, styles.heartIconLayout, heartIconStyle]}
          resizeMode="cover"
          source={require("../assets/heart4.png")}
        />
        <Image
          style={[styles.heartIcon2, styles.heartIconLayout, heartIcon1Style]}
          resizeMode="cover"
          source={require("../assets/heart4.png")}
        />
        <Text style={[styles.text, styles.textTypo]}>25</Text>
        <Text style={[styles.text1, styles.textTypo]}>25</Text>
        <Text style={[styles.text2, styles.textTypo]}>25</Text>
        <Text
          style={[
            styles.loremIpsumDolor,
            styles.loremTypo,
            loremIpsumDolor1Style,
          ]}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra
          aliquam, congue habitasse tortor. Fringilla nunc aliquam volutpat
          suscipit porttitor in quis sagittis hac. Tellus sed ac libero
        </Text>
        <Text style={[styles.loremIpsumDolor1, loremIpsumDolor2Style]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra
          aliquam, congue habitasse tortor. Fringilla nunc aliquam volutpat
          suscipit porttitor in quis sagittis hac. Tellus sed ac libero
        </Text>
        <Text
          style={[
            styles.loremIpsumDolor2,
            styles.loremTypo,
            loremIpsumDolor3Style,
          ]}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra
          aliquam, congue habitasse tortor. Fringilla nunc aliquam volutpat
          suscipit porttitor in quis sagittis hac. Tellus sed ac libero
        </Text>
        <Image
          style={[styles.unsplash2egnqazbamkIcon, styles.iconLayout]}
          resizeMode="cover"
          source={vehicleImageUrl}
        />
        <Image
          style={[
            styles.unsplashridxdghg7pwIcon,
            styles.iconLayout,
            unsplashRiDxDgHg7pwIconStyle,
          ]}
          resizeMode="cover"
          source={require("../assets/unsplashridxdghg7pw3.png")}
        />
        <Image
          style={[
            styles.unsplash6rrIp06p4Icon,
            styles.iconLayout,
            unsplash6rRIP06p4IconStyle,
          ]}
          resizeMode="cover"
          source={require("../assets/unsplashridxdghg7pw3.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupWrapperLayout: {
    height: 261,
    width: 344,
    left: 0,
    position: "absolute",
  },
  drJoeMickeyTypo: {
    width: 98,
    textAlign: "left",
    color: Color.lightThemeDark1,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    fontSize: FontSize.subtitleButtonBold1_size,
    left: 46,
    position: "absolute",
  },
  hrsTypo: {
    opacity: 0.8,
    width: 46,
    color: Color.gray_300,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    left: 298,
    textAlign: "left",
    position: "absolute",
  },
  heartIconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    left: "2.09%",
    right: "94.93%",
    width: "2.99%",
    height: "3.83%",
    position: "absolute",
  },
  textTypo: {
    width: 14,
    fontSize: FontSize.size_lg,
    left: 21,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.lightThemeDark1,
    position: "absolute",
  },
  loremTypo: {
    width: 296,
    color: Color.dimgray_400,
    opacity: 0.8,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    textAlign: "left",
    left: 46,
    position: "absolute",
  },
  iconLayout: {
    height: 40,
    width: 41,
    left: 0,
    position: "absolute",
  },
  drChrisUil: {
    top: 1,
    width: 77,
    textAlign: "left",
    color: Color.lightThemeDark1,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    fontSize: FontSize.subtitleButtonBold1_size,
    left: 46,
    position: "absolute",
  },
  drJoeMickey: {
    top: 91,
  },
  generalFocus: {
    top: 181,
  },
  hrsAgo: {
    top: 6,
  },
  hrsAgo1: {
    top: 96,
  },
  hrsAgo2: {
    top: 186,
  },
  heartIcon: {
    top: "18.39%",
    bottom: "77.78%",
  },
  heartIcon1: {
    top: "298.85%",
    bottom: "-202.68%",
  },
  heartIcon2: {
    top: "333.33%",
    bottom: "-237.16%",
  },
  text: {
    top: 45,
  },
  text1: {
    top: 135,
  },
  text2: {
    top: 225,
  },
  loremIpsumDolor: {
    top: 21,
  },
  loremIpsumDolor1: {
    top: 111,
    width: 298,
    color: Color.dimgray_400,
    opacity: 0.8,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    textAlign: "left",
    left: 46,
    position: "absolute",
  },
  loremIpsumDolor2: {
    top: 201,
  },
  unsplash2egnqazbamkIcon: {
    top: 0,
  },
  unsplashridxdghg7pwIcon: {
    top: 732,
  },
  unsplash6rrIp06p4Icon: {
    top: 822,
  },
  drChrisUilParent: {
    top: 0,
  },
  groupWrapper: {
    top: 125,
  },
});

export default FocusSection;
