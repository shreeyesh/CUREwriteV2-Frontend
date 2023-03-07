import * as React from "react";
import { StyleSheet, View, ImageBackground, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color } from "../GlobalStyles";

const SPLASH = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.splash}
      onPress={() => navigation.navigate("ONBOARDING")}
    >
      <View style={styles.splashChild} />
      <ImageBackground
        style={styles.horizontalLogo1Icon}
        resizeMode="cover"
        source={require("../assets/horizontallogo1.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  splashChild: {
    top: 801,
    left: 105,
    borderRadius: Border.br_lg,
    backgroundColor: Color.lightThemeDark1,
    width: 165,
    height: 4,
    position: "absolute",
  },
  horizontalLogo1Icon: {
    top: 346,
    left: 82,
    width: 211,
    height: 119,
    position: "absolute",
  },
  splash: {
    backgroundColor: Color.lightThemeWhite1,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default SPLASH;
