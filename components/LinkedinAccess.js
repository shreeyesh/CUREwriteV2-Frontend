import * as React from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableHighlight,
  ImageSourcePropType,
} from "react-native";

const LinkedinAccess = ({ onGroupTouchableHighlightPress, image7 }) => {
  return (
    <TouchableHighlight
      style={styles.wrapper}
      underlayColor="#fff"
      activeOpacity={0.2}
      onPress={onGroupTouchableHighlightPress}
    >
      <>
        <Text>LinkedIn</Text>
        <ImageBackground resizeMode="cover" source={image7} />
      </>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    top: 0,
    left: 174,
    width: 87,
    height: 23,
  },
});

export default LinkedinAccess;
