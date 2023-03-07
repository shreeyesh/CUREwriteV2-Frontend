import * as React from "react";
import {
  Pressable,
  Image,
  StyleSheet,
  View,
  ImageSourcePropType,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import UserTab from "../components/UserTab";

const BottomTabs = ({
  icon,
  onVectorPress,
  onIconlyBrokenPlusPress,
  onIconlyLightOutlineGraphPress,
  onGroupPressablePress,
  icon1,
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.bottomTabs}>
      <View style={[styles.bottomTabsInner, styles.wrapperPosition]}>
        <View style={[styles.bottomTabsInner, styles.wrapperPosition]}>
          <UserTab
            onVectorPress={() => navigation.navigate("PROFILELIFESTYLE")}
            icon={icon}
          />
          <Pressable
            style={[styles.vector, styles.vectorPosition]}
            onPress={onVectorPress}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/vector2.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.iconlybrokenplus, styles.vectorPosition]}
            onPress={onIconlyBrokenPlusPress}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/iconlybrokenplus.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.iconlylightOutlinegraph, styles.vectorPosition]}
            onPress={onIconlyLightOutlineGraphPress}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/combinedshape.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.wrapper, styles.wrapperPosition]}
            onPress={onGroupPressablePress}
          >
            <Image style={styles.icon} resizeMode="cover" source={icon1} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperPosition: {
    bottom: "0%",
    position: "absolute",
  },
  vectorPosition: {
    height: "92.45%",
    width: "8.12%",
    bottom: "7.55%",
    top: "0%",
    position: "absolute",
  },
  icon: {
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    width: "100%",
    height: "100%",
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
  bottomTabsInner: {
    right: "0%",
    left: "0%",
    top: "0%",
    bottom: "0%",
    width: "100%",
    height: "100%",
  },
  bottomTabs: {
    height: "38.84%",
    width: "82.13%",
    top: "31.6%",
    right: "7.47%",
    bottom: "29.57%",
    left: "10.4%",
    position: "absolute",
  },
});

export default BottomTabs;
