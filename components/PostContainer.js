import * as React from "react";
import { useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  TouchableHighlight,
  ImageBackground,
  Alert,
  Share,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const PostContainer = ({ postTitle, tags }) => {
  const navigation = useNavigation();

  const onArchiveAddIconClick = useCallback(() => {
    Alert.alert("Post added to archives", "");
  }, []);

  const onArrowUpIconClick = useCallback(async () => {
    try {
      const result = await Share.share({
        message: "Liked",
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  }, []);

  const onArrowDownIconClick = useCallback(async () => {
    try {
      const result = await Share.share({
        message: "Disliked",
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  }, []);

  const onAkarIconsshareBoxClick = useCallback(() => {
    Alert.alert("Downloading File", "");
  }, []);

  return (
    <View style={[styles.groupWrapper, styles.image5IconPosition]}>
      <View style={[styles.groupWrapper, styles.image5IconPosition]}>
        <Pressable
          style={styles.ciplaBeginTheContainer}
          onPress={() => navigation.navigate("HOMEPAGEPOSTCOMMENTS")}
        >
          <Text style={[styles.ciplaBeginTheTrailsForNew, styles.kTypo]}>
            {postTitle}
          </Text>
        </Pressable>
        <TouchableHighlight
          style={[
            styles.archiveAdd,
            styles.arrowUpPosition,
            styles.arrowUpLayout,
          ]}
          underlayColor="#000"
          onPress={onArchiveAddIconClick}
        >
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/archiveadd2.png")}
          />
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.arrowUp, styles.arrowUpPosition, styles.arrowUpLayout]}
          underlayColor="#000"
          activeOpacity={0.2}
          onPress={onArrowUpIconClick}
        >
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/arrowup.png")}
          />
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.arrowDown, styles.arrowDownPosition]}
          underlayColor="#1c6ba4"
          activeOpacity={0.2}
          onPress={onArrowDownIconClick}
        >
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/arrowdown.png")}
          />
        </TouchableHighlight>
        <Text style={[styles.k, styles.kTypo]}>56.9k</Text>
        <TouchableHighlight
          style={[styles.wrapper, styles.arrowUpPosition]}
          underlayColor="#fff"
          activeOpacity={0.2}
          onPress={() => navigation.navigate("HOMEPAGEPOSTCOMMENTS")}
        >
          <>
            <View>
              <View>
                <Image
                  resizeMode="cover"
                  source={require("../assets/message.png")}
                />
              </View>
            </View>
            <Text>4682</Text>
          </>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.pharmaWrapper}
          underlayColor="#fff"
          activeOpacity={0.2}
          onPress={() => {}}
        >
          {tags}
        </TouchableHighlight>
        <Pressable
          style={[styles.akarIconsshareBox, styles.arrowDownPosition]}
          onPress={onAkarIconsshareBoxClick}
        >
          <Image
            style={[styles.icon3, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/akariconssharebox2.png")}
          />
        </Pressable>
        <View style={styles.groupChild} />
        <ImageBackground
          style={[styles.image5Icon, styles.image5IconPosition]}
          resizeMode="cover"
          source={require("../assets/image5.png")}
        />
        <View style={[styles.mParent, styles.mParentPosition]}>
          <Text style={[styles.m, styles.mClr]}>M</Text>
          <Text
            style={[
              styles.ciplaIndustries,
              styles.hoursAgoPosition,
              styles.pharmaTypo,
            ]}
          >
            Cipla Industries
          </Text>
          <Text style={[styles.hoursAgo, styles.hoursAgoPosition]}>
            1 hours ago
          </Text>
          <ImageBackground
            style={[styles.unsplashp5bobf0xjuaIcon, styles.mParentPosition]}
            resizeMode="cover"
            source={require("../assets/unsplashp5bobf0xjua3.png")}
          />
        </View>
        <Image
          style={styles.groupItem}
          resizeMode="cover"
          source={require("../assets/group-823.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image5IconPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  kTypo: {
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBlack,
    fontWeight: "900",
  },
  arrowUpPosition: {
    height: 24,
    top: 456,
    position: "absolute",
  },
  arrowUpLayout: {
    width: 20,
    height: 24,
    top: 456,
  },
  arrowDownPosition: {
    top: 455,
    height: 24,
    width: 20,
    position: "absolute",
  },
  mClr: {
    color: Color.lightThemeWhite1,
    textAlign: "left",
  },
  pharmaTypo: {
    fontFamily: FontFamily.nunitoSansBlack,
    fontWeight: "900",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  mParentPosition: {
    height: 36,
    top: 0,
    position: "absolute",
  },
  hoursAgoPosition: {
    left: 42,
    textAlign: "left",
    position: "absolute",
  },
  ciplaBeginTheTrailsForNew: {
    fontSize: FontSize.size_8xl,
    lineHeight: 27,
    color: Color.neutral9001,
    width: 343,
  },
  ciplaBeginTheContainer: {
    left: 16,
    top: 47,
    position: "absolute",
  },
  archiveAdd: {
    left: 301,
  },
  arrowUp: {
    left: 20,
  },
  arrowDown: {
    left: 78,
  },
  k: {
    top: 459,
    left: 43,
    fontSize: FontSize.size_2xl,
    color: Color.gray_400,
    width: 35,
    position: "absolute",
  },
  wrapper: {
    left: 147,
    width: 58,
    height: 24,
    top: 456,
  },
  pharmaWrapper: {
    top: 111,
    borderRadius: Border.br_3xl,
    backgroundColor: Color.midnightblue,
    width: 71,
    flexDirection: "row",
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_2xs,
    left: 15,
    position: "absolute",
  },
  icon3: {
    overflow: "hidden",
  },
  akarIconsshareBox: {
    left: 326,
  },
  groupChild: {
    top: 463,
    left: 308,
    backgroundColor: Color.steelblue_100,
    width: 7,
    height: 9,
    position: "absolute",
  },
  image5Icon: {
    top: 144,
    height: 303,
  },
  m: {
    top: 7,
    left: 11,
    fontSize: FontSize.paragraphSemiBold_size,
    fontWeight: "700",
    fontFamily: FontFamily.nunitoSansBold,
    position: "absolute",
  },
  ciplaIndustries: {
    fontSize: FontSize.size_5xl,
    color: Color.lightThemeDark1,
    top: 0,
  },
  hoursAgo: {
    top: 18,
    fontSize: FontSize.subtitleButtonBold1_size,
    fontFamily: FontFamily.nunitoSansRegular,
    color: Color.gray_300,
  },
  unsplashp5bobf0xjuaIcon: {
    width: 36,
    left: 0,
    height: 36,
  },
  mParent: {
    width: 157,
    left: 15,
  },
  groupItem: {
    marginTop: -232.75,
    marginLeft: 155.75,
    top: "50%",
    left: "50%",
    width: 16,
    height: 16,
    position: "absolute",
  },
  groupWrapper: {
    height: 480,
    top: 0,
  },
});

export default PostContainer;
