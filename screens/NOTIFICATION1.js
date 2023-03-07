import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import SectionFilter from "../components/SectionFilter";
import NotificationBox from "../components/NotificationBox";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const NOTIFICATION1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.notification}>
      <View style={styles.groupInnerPosition}>
        <Image
          style={styles.groupChild}
          resizeMode="cover"
          source={require("../assets/ellipse-2.png")}
        />
        <Image
          style={styles.groupItem}
          resizeMode="cover"
          source={require("../assets/group-149.png")}
        />
        <View style={[styles.groupInner, styles.groupInnerPosition]} />
        <Header
          onFramePress={() => {}}
          onIconlyBrokenChatPress={() => {}}
          icon={require("../assets/icon.png")}
        />
      </View>
      <SectionFilter />
      <View style={styles.todayParent}>
        <Text style={[styles.today, styles.januaryTypo]}>Today</Text>
        <Text style={[styles.january2022, styles.januaryTypo]}>
          12 January 2022
        </Text>
        <Text style={[styles.january20221, styles.januaryTypo]}>
          12 January 2022
        </Text>
        <NotificationBox userName="Dr. Abdul Qudus " recency="Just Now" />
        <View style={[styles.notificationbox, styles.notificationboxPosition]}>
          <Image
            style={[
              styles.unsplashsibvworyqs0Icon,
              styles.iconPosition,
              styles.iconPosition1,
            ]}
            resizeMode="cover"
            source={require("../assets/unsplashsibvworyqs0.png")}
          />
          <Text style={[styles.amPosition, styles.segunContainerTypo]}>
            <Text style={styles.patrickTypo}>{`Patrick `}</Text>
            <Text style={styles.followedYou}>Followed you</Text>
          </Text>
          <Text
            style={[styles.minsTypo, styles.agoPosition, styles.amPosition]}
          >
            11:20am
          </Text>
        </View>
        <View style={styles.notificationbox1}>
          <Image
            style={[styles.unsplashymoYcN2oIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/unsplashymo-yc-n-2o.png")}
          />
          <Text
            style={[
              styles.minsAgoPosition,
              styles.patrickTypo,
              styles.segunContainerTypo,
            ]}
          >
            Segun viewed your profile
          </Text>
          <Text
            style={[styles.minsAgo, styles.minsAgoPosition, styles.minsTypo]}
          >
            15mins ago
          </Text>
        </View>
        <View style={[styles.notificationbox2, styles.notificationboxPosition]}>
          <Image
            style={[
              styles.unsplashako5dg2fqsmIcon,
              styles.iconPosition,
              styles.iconPosition1,
            ]}
            resizeMode="cover"
            source={require("../assets/unsplashako5dg2fqsm.png")}
          />
          <Text style={[styles.am1Position, styles.segunContainerTypo]}>
            <Text style={styles.patrickTypo}>{`Segun Liked your `}</Text>
            <Text style={styles.reel}>reel</Text>
          </Text>
          <Text
            style={[styles.am1Position, styles.minsTypo, styles.agoPosition]}
          >
            09:00am
          </Text>
        </View>
        <View style={[styles.notificationbox3, styles.notificationboxPosition]}>
          <Image
            style={[
              styles.unsplashkipqvvtoc1sIcon,
              styles.iconPosition,
              styles.iconPosition1,
            ]}
            resizeMode="cover"
            source={require("../assets/unsplashkipqvvtoc1s.png")}
          />
          <Text style={[styles.minsAgo1Position, styles.segunContainerTypo]}>
            <Text style={styles.patrickTypo}>{`Chris `}</Text>
            <Text style={styles.followedYou}>{`purchased your `}</Text>
            <Text style={styles.reel}>paper</Text>
          </Text>
          <Text
            style={[
              styles.minsAgo1Position,
              styles.minsTypo,
              styles.agoPosition,
            ]}
          >
            2mins ago
          </Text>
        </View>
        <View style={[styles.notificationbox4, styles.notificationboxPosition]}>
          <Image
            style={[
              styles.unsplash4uojmedcwi8Icon,
              styles.iconPosition,
              styles.iconPosition1,
            ]}
            resizeMode="cover"
            source={require("../assets/unsplash4uojmedcwi8.png")}
          />
          <Text style={[styles.am2Position, styles.segunContainerTypo]}>
            <Text style={styles.patrickTypo}>{`Dr. Chris `}</Text>
            <Text style={styles.followedYou}>Followed you</Text>
          </Text>
          <Text
            style={[styles.am2Position, styles.minsTypo, styles.agoPosition]}
          >
            10:00am
          </Text>
        </View>
        <View style={[styles.notificationbox5, styles.notificationboxPosition]}>
          <Image
            style={[
              styles.unsplashwnolnjo7ts8Icon,
              styles.iconPosition,
              styles.iconPosition1,
            ]}
            resizeMode="cover"
            source={require("../assets/unsplashwnolnjo7ts8.png")}
          />
          <Text style={[styles.hourAgoPosition, styles.segunContainerTypo]}>
            <Text style={styles.patrickTypo}>{`Chris commented on your `}</Text>
            <Text style={styles.reel}>post</Text>
          </Text>
          <Text
            style={[
              styles.hourAgoPosition,
              styles.minsTypo,
              styles.agoPosition,
            ]}
          >
            1hour ago
          </Text>
        </View>
        <View style={[styles.notificationbox6, styles.notificationboxPosition]}>
          <Image
            style={[
              styles.unsplashbgg8xpgwVqIcon,
              styles.iconPosition,
              styles.iconPosition1,
            ]}
            resizeMode="cover"
            source={require("../assets/unsplashbgg8xpgw-vq.png")}
          />
          <Text style={[styles.am3Position, styles.segunContainerTypo]}>
            <Text style={styles.patrickTypo}>{`Chris replied on your `}</Text>
            <Text style={styles.reel}>question</Text>
          </Text>
          <Text
            style={[styles.am3Position, styles.minsTypo, styles.agoPosition]}
          >
            07:00am
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupInnerPosition: {
    height: 96,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  januaryTypo: {
    textAlign: "left",
    color: Color.lightThemeDark1,
    fontSize: FontSize.size_4xl,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  notificationboxPosition: {
    height: 46,
    left: 0,
    position: "absolute",
  },
  iconPosition: {
    left: "0%",
    bottom: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition1: {
    top: "0%",
    height: "100%",
    bottom: "0%",
  },
  segunContainerTypo: {
    fontSize: FontSize.size_5xl,
    top: "0%",
  },
  agoPosition: {
    top: "50%",
    fontSize: FontSize.size_2xl,
  },
  amPosition: {
    textAlign: "center",
    left: "25.36%",
    color: Color.lightThemeDark1,
    position: "absolute",
  },
  patrickTypo: {
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
  },
  minsAgoPosition: {
    left: "21.2%",
    textAlign: "center",
    color: Color.lightThemeDark1,
    position: "absolute",
  },
  minsTypo: {
    fontSize: FontSize.size_2xl,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  groupChild: {
    top: 48,
    left: 20,
    width: 37,
    height: 37,
    position: "absolute",
  },
  groupItem: {
    height: "17.61%",
    width: "4.64%",
    top: "59.79%",
    right: "25.74%",
    bottom: "22.6%",
    left: "69.62%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupInner: {
    opacity: 0.99,
    backgroundColor: Color.lightThemeWhite1,
    width: 375,
  },
  today: {
    left: 0,
    top: 0,
    textAlign: "left",
    color: Color.lightThemeDark1,
    fontSize: FontSize.size_4xl,
  },
  january2022: {
    top: 299,
    left: 0,
  },
  january20221: {
    top: 602,
    left: 4,
  },
  unsplashsibvworyqs0Icon: {
    width: "22.01%",
    right: "77.99%",
  },
  followedYou: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  notificationbox: {
    top: 332,
    width: 209,
  },
  unsplashymoYcN2oIcon: {
    height: "97.87%",
    width: "18.4%",
    top: "2.13%",
    right: "81.6%",
  },
  minsAgo: {
    top: "51.06%",
  },
  notificationbox1: {
    top: 166,
    width: 250,
    height: 47,
    left: 0,
    position: "absolute",
  },
  unsplashako5dg2fqsmIcon: {
    width: "21.4%",
    right: "78.6%",
  },
  reel: {
    fontStyle: "italic",
    fontFamily: FontFamily.poppinsMediumItalic,
    fontWeight: "500",
  },
  am1Position: {
    left: "24.65%",
    textAlign: "center",
    color: Color.lightThemeDark1,
    position: "absolute",
  },
  notificationbox2: {
    top: 466,
    width: 215,
  },
  unsplashkipqvvtoc1sIcon: {
    width: "17.29%",
    right: "82.71%",
  },
  minsAgo1Position: {
    left: "19.92%",
    textAlign: "center",
    color: Color.lightThemeDark1,
    position: "absolute",
  },
  notificationbox3: {
    top: 100,
    width: 266,
  },
  unsplash4uojmedcwi8Icon: {
    width: "20.91%",
    right: "79.09%",
  },
  am2Position: {
    left: "24.09%",
    textAlign: "center",
    color: Color.lightThemeDark1,
    position: "absolute",
  },
  notificationbox4: {
    top: 399,
    width: 220,
  },
  unsplashwnolnjo7ts8Icon: {
    width: "15.86%",
    right: "84.14%",
  },
  hourAgoPosition: {
    left: "18.28%",
    textAlign: "center",
    color: Color.lightThemeDark1,
    position: "absolute",
  },
  notificationbox5: {
    top: 234,
    width: 290,
  },
  unsplashbgg8xpgwVqIcon: {
    width: "16.37%",
    right: "83.63%",
  },
  am3Position: {
    left: "18.86%",
    textAlign: "center",
    color: Color.lightThemeDark1,
    position: "absolute",
  },
  notificationbox6: {
    top: 533,
    width: 281,
  },
  todayParent: {
    top: 116,
    left: 27,
    height: 623,
    width: 290,
    position: "absolute",
  },
  notification: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.lightThemeWhite1,
  },
});

export default NOTIFICATION1;
