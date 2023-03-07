import * as React from "react";
import { useState } from "react";
import {
  Text,
  StyleSheet,
  Pressable,
  View,
  TouchableHighlight,
  Image,
} from "react-native";
import { Datepicker as RNKDatepicker } from "@ui-kitten/components";
import DropDownPicker from "react-native-dropdown-picker";
import { useNavigation } from "@react-navigation/native";
import DoneBox from "../components/DoneBox";
import NameBox from "../components/NameBox";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const PERSONALINFORMATION1 = () => {
  const [rectangleDatePicker, setRectangleDatePicker] = useState(undefined);
  const [groupDropdownOpen, setGroupDropdownOpen] = useState(false);
  const [groupDropdownValue, setGroupDropdownValue] = useState("");
  const [groupDropdownItems, setGroupDropdownItems] = useState([
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Others", label: "Others" },
  ]);
  const navigation = useNavigation();

  return (
    <View style={[styles.personalInformation, styles.iconLayout]}>
      <Pressable
        style={styles.alreadyHaveAnContainer}
        onPress={() => navigation.navigate("SIGNIN")}
      >
        <Text style={styles.text}>
          <Text
            style={styles.alreadyHaveAn}
          >{`Already have an account? `}</Text>
          <Text style={styles.signIn}>Sign In</Text>
        </Text>
      </Pressable>
      <View style={styles.personalInformationChild} />
      <Text style={styles.personalInformation1}>Personal Information</Text>
      <Text style={[styles.pleaseFillThe, styles.fullNameTypo]}>
        Please fill the following
      </Text>
      <Text style={[styles.fullName, styles.fullNameTypo]}>Full name</Text>
      <Text style={[styles.emailAddress, styles.fullNameTypo]}>
        Email Address
      </Text>
      <Text style={[styles.dateOfBirth, styles.genderTypo]}>Date of birth</Text>
      <Text style={[styles.gender, styles.genderTypo]}>Gender</Text>
      <TouchableHighlight
        style={[styles.wrapper, styles.wrapperLayout]}
        underlayColor="#fff"
        activeOpacity={0.2}
        onPress={() => navigation.navigate("PERSONALINFORMATION")}
      >
        <>
          <DoneBox
            rectangle13Position="unset"
            rectangle13Top="unset"
            rectangle13Left="unset"
            rectangle13Width="unset"
            rectangle13Height="unset"
          />
          <Text>Next</Text>
        </>
      </TouchableHighlight>
      <NameBox />
      <NameBox
        rectangle13Top={329}
        rectangle13BorderStyle="unset"
        rectangle13BorderColor="unset"
      />
      <RNKDatepicker
        placeholder="23/10/2000"
        date={rectangleDatePicker}
        onSelect={setRectangleDatePicker}
        status="primary"
        controlStyle={styles.rectangleDatePickerValue}
      />
      <View style={[styles.container, styles.wrapperLayout]}>
        <DropDownPicker
          open={groupDropdownOpen}
          setOpen={setGroupDropdownOpen}
          value={groupDropdownValue}
          setValue={setGroupDropdownValue}
          placeholder="Male"
          items={groupDropdownItems}
        />
      </View>
      <Pressable
        style={styles.iconlylightOutlinearrowL}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/iconlylightoutlinearrowleft2.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleDatePickerValue: {
    position: "absolute",
    top: 416,
    left: 27,
    borderRadius: 10,
    width: 131,
    height: 49,
    backgroundColor: "#f2f2f2",
  },
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  fullNameTypo: {
    opacity: 0.7,
    left: 27,
    color: Color.lightThemeDark1,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  genderTypo: {
    top: 390,
    opacity: 0.7,
    color: Color.lightThemeDark1,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.size_4xl,
    position: "absolute",
  },
  wrapperLayout: {
    height: 49,
    position: "absolute",
  },
  alreadyHaveAn: {
    color: Color.lightThemeDark1,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  signIn: {
    fontFamily: FontFamily.poppinsRegular,
    color: Color.midnightblue,
  },
  text: {
    width: 239,
    textAlign: "left",
    fontSize: FontSize.size_4xl,
  },
  alreadyHaveAnContainer: {
    left: 69,
    top: 728,
    position: "absolute",
  },
  personalInformationChild: {
    top: 801,
    left: 105,
    borderRadius: Border.br_lg,
    backgroundColor: Color.lightThemeDark1,
    width: 165,
    height: 4,
    position: "absolute",
  },
  personalInformation1: {
    top: 136,
    fontSize: FontSize.size_10xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemibold,
    width: 215,
    left: 27,
    color: Color.lightThemeDark1,
    textAlign: "left",
    position: "absolute",
  },
  pleaseFillThe: {
    top: 171,
    fontSize: FontSize.paragraphSemiBold_size,
    width: 202,
  },
  fullName: {
    top: 216,
    width: 70,
    fontSize: FontSize.size_4xl,
  },
  emailAddress: {
    top: 303,
    width: 102,
    fontSize: FontSize.size_4xl,
  },
  dateOfBirth: {
    width: 100,
    left: 27,
  },
  gender: {
    width: 57,
    left: 217,
  },
  wrapper: {
    top: 642,
    width: 321,
    left: 27,
  },
  container: {
    top: 416,
    width: 131,
    left: 217,
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  iconlylightOutlinearrowL: {
    left: "7.2%",
    top: "8.99%",
    right: "90.13%",
    bottom: "88.76%",
    width: "2.67%",
    height: "2.25%",
    position: "absolute",
  },
  personalInformation: {
    backgroundColor: Color.lightThemeWhite1,
    flex: 1,
    height: 812,
  },
});

export default PERSONALINFORMATION1;
