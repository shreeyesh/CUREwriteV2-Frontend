import * as React from "react";
import { useMemo } from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const FocusContainer = ({ propTop, propWidth }) => {
  const groupView2Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  const loremIpsumDolorStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  return (
    <View style={[styles.chrisUilParent, groupView2Style]}>
      <Text style={[styles.chrisUil, styles.chrisUilTypo]}>Chris uil</Text>
      <Text style={[styles.joeMickey, styles.chrisUilTypo]}>Joe Mickey</Text>
      <Text style={[styles.generalFocus, styles.chrisUilTypo]}>
        General Focus
      </Text>
      <Text style={[styles.hrsAgo, styles.hrsTypo]}>2hrs Ago</Text>
      <Text style={[styles.hrsAgo1, styles.hrsTypo]}>2hrs Ago</Text>
      <Text style={[styles.hrsAgo2, styles.hrsTypo]}>2hrs Ago</Text>
      <Image
        style={[styles.iconlyboldheart, styles.iconlyboldheartLayout]}
        resizeMode="cover"
        source={require("../assets/iconlyboldheart.png")}
      />
      <Image
        style={[styles.iconlyboldheart1, styles.iconlyboldheartLayout]}
        resizeMode="cover"
        source={require("../assets/iconlyboldheart2.png")}
      />
      <Text style={[styles.text, styles.textTypo]}>25</Text>
      <Text style={[styles.text1, styles.textTypo]}>25</Text>
      <Text style={[styles.loremIpsumDolor, styles.loremTypo]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra
        aliquam, congue habitasse tortor. Fringilla nunc aliquam volutpat
        suscipit porttitor in quis sagittis hac. Tellus sed ac libero
      </Text>
      <Text style={[styles.loremIpsumDolor1, loremIpsumDolorStyle]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra
        aliquam, congue habitasse tortor. Fringilla nunc aliquam volutpat
        suscipit porttitor in quis sagittis hac. Tellus sed ac libero
      </Text>
      <Text style={[styles.loremIpsumDolor2, styles.loremTypo]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra
        aliquam, congue habitasse tortor. Fringilla nunc aliquam volutpat
        suscipit porttitor in quis sagittis hac. Tellus sed ac libero
      </Text>
      <Image
        style={[styles.unsplash2egnqazbamkIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/unsplash2egnqazbamk.png")}
      />
      <Image
        style={[styles.unsplashridxdghg7pwIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/unsplashridxdghg7pw.png")}
      />
      <Image
        style={[styles.unsplash6rrIp06p4Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/unsplash-6rr-ip06p4.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  chrisUilTypo: {
    textAlign: "left",
    color: Color.lightThemeDark1,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    fontSize: FontSize.subtitleButtonBold1_size,
    left: 45,
    position: "absolute",
  },
  hrsTypo: {
    opacity: 0.8,
    color: Color.gray_300,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    left: 290,
    textAlign: "left",
    position: "absolute",
  },
  iconlyboldheartLayout: {
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
    fontSize: FontSize.size_lg,
    left: 20,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.lightThemeDark1,
    position: "absolute",
  },
  loremTypo: {
    width: 289,
    color: Color.dimgray_400,
    opacity: 0.8,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    textAlign: "left",
    left: 45,
    position: "absolute",
  },
  iconLayout: {
    height: 40,
    width: 40,
    left: 0,
    position: "absolute",
  },
  chrisUil: {
    top: 1,
  },
  joeMickey: {
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
  iconlyboldheart: {
    top: "18.39%",
    bottom: "77.78%",
  },
  iconlyboldheart1: {
    top: "52.87%",
    bottom: "43.3%",
  },
  text: {
    top: 45,
  },
  text1: {
    top: 135,
  },
  loremIpsumDolor: {
    top: 21,
  },
  loremIpsumDolor1: {
    top: 111,
    width: 290,
    color: Color.dimgray_400,
    opacity: 0.8,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    textAlign: "left",
    left: 45,
    position: "absolute",
  },
  loremIpsumDolor2: {
    top: 201,
  },
  unsplash2egnqazbamkIcon: {
    top: 0,
    width: 40,
  },
  unsplashridxdghg7pwIcon: {
    top: 90,
  },
  unsplash6rrIp06p4Icon: {
    top: 180,
  },
  chrisUilParent: {
    width: 335,
    height: 261,
    left: 0,
    position: "absolute",
    top: 0,
  },
});

export default FocusContainer;
