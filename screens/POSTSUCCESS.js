import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ContinueButton from "../components/ContinueButton";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const POSTSUCCESS = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.postSuccess}>
      <View style={[styles.postSuccessChild, styles.postPosition]} />
      <Text style={styles.postSuccessful}>Post Successful</Text>
      <ContinueButton
        onContinueButtonPress={() => navigation.navigate("POSTSUCCESS")}
        onRectangleTouchableHighligPress={() =>
          navigation.navigate("LEADERBOARDNATIONAL")
        }
      />
      <Image
        style={[styles.postSuccessItem, styles.postPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-14.png")}
      />
      <Image
        style={styles.horizontalLogo1Icon}
        resizeMode="cover"
        source={require("../assets/horizontallogo-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  postPosition: {
    left: 105,
    position: "absolute",
  },
  postSuccessChild: {
    top: 801,
    borderRadius: Border.br_lg,
    backgroundColor: Color.lightThemeDark1,
    width: 165,
    height: 4,
  },
  postSuccessful: {
    top: 376,
    left: 109,
    fontSize: FontSize.size_10xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemibold,
    color: Color.lightThemeDark1,
    textAlign: "left",
    position: "absolute",
  },
  postSuccessItem: {
    top: 126,
    width: 183,
    height: 183,
  },
  horizontalLogo1Icon: {
    top: 172,
    left: 123,
    width: 148,
    height: 83,
    position: "absolute",
  },
  postSuccess: {
    backgroundColor: Color.lightThemeWhite1,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default POSTSUCCESS;
