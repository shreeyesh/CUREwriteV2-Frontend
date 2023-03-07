import * as React from "react";
import { StyleSheet, View } from "react-native";
import FocusContainer from "../components/FocusContainer";
import AnswerContainer from "../components/AnswerContainer";

const CommentContainer = () => {
  return (
    <View style={styles.groupParent}>
      <FocusContainer propTop={1} propWidth={289} />
      <AnswerContainer
        answerInput="Type a comment"
        group870Top={205}
        group870Left={7}
        frameWidth={121}
        frameHeight={21}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupParent: {
    position: "absolute",
    top: 340,
    left: 0,
    width: 335,
    height: 249,
  },
});

export default CommentContainer;
