import * as React from "react";
import { useMemo } from "react";
import {
  Pressable,
  Image,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  ImageSourcePropType,
} from "react-native";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const ExperienceCard = ({
  profileImageUrl,
  qualificationText,
  locationText,
  experienceText,
  durationText,
  propTop,
  onGroupTouchableHighlightPress,
}) => {
  const groupTouchableHighlightStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <TouchableHighlight
      style={[styles.wrapper, groupTouchableHighlightStyle]}
      underlayColor="#fff"
      activeOpacity={0.2}
      onPress={onGroupTouchableHighlightPress}
    >
      <>
        <View>
          <Image resizeMode="cover" source={profileImageUrl} />
        </View>
        <Text>{qualificationText}</Text>
        <Text>{locationText}</Text>
        <Text>{experienceText}</Text>
        <Text>{durationText}</Text>
      </>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    top: 307,
    left: 5,
    width: 315,
    height: 59,
  },
});

export default ExperienceCard;
