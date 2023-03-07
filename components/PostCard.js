import * as React from "react";
import { useMemo } from "react";
import {
  Text,
  StyleSheet,
  Pressable,
  TouchableHighlight,
  View,
} from "react-native";
import TriTextbox from "../components/TriTextbox";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const PostCard = ({
  abstractText,
  titleText,
  researchTypeText,
  propWidth,
  propWidth1,
  onUploadButtonPress,
  onRectangleTouchableHighligPress,
  captionValue,
  hashtagsValue,
}) => {
  const typeAbstractStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  const researchTypeStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth1),
    };
  }, [propWidth1]);

  return (
    <View style={styles.typeAbstractParent}>
      <Text style={[styles.typeAbstract, styles.typeTypo, typeAbstractStyle]}>
        {abstractText}
      </Text>
      <Text style={[styles.typeTitle, styles.typeTypo]}>{titleText}</Text>
      <Text style={[styles.researchType, styles.typeTypo, researchTypeStyle]}>
        {researchTypeText}
      </Text>
      <TriTextbox captionValue={captionValue} hashtagsValue={hashtagsValue} />
      <Pressable
        style={[styles.uploadbutton, styles.wrapperLayout]}
        onPress={onUploadButtonPress}
      >
        <TouchableHighlight
          style={[styles.wrapper, styles.wrapperLayout]}
          underlayColor="#fff"
          activeOpacity={0.2}
          onPress={onRectangleTouchableHighligPress}
        >
          <View />
        </TouchableHighlight>
        <Text style={styles.upload}>Upload</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  typeTypo: {
    opacity: 0.7,
    color: Color.lightThemeDark1,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_4xl,
    left: 0,
    textAlign: "left",
    position: "absolute",
  },
  wrapperLayout: {
    height: 49,
    left: 0,
    width: 321,
    position: "absolute",
  },
  typeAbstract: {
    width: 198,
    top: 0,
  },
  typeTitle: {
    top: 176,
    width: 88,
  },
  researchType: {
    top: 303,
    width: 150,
  },
  wrapper: {
    borderRadius: Border.br_lg,
    backgroundColor: Color.midnightblue,
    top: 0,
  },
  upload: {
    top: 11,
    left: 127,
    fontSize: FontSize.size_8xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemibold,
    color: Color.lightThemeWhite1,
    textAlign: "left",
    position: "absolute",
  },
  uploadbutton: {
    top: 414,
  },
  typeAbstractParent: {
    top: 174,
    left: 27,
    height: 463,
    width: 321,
    position: "absolute",
  },
});

export default PostCard;
