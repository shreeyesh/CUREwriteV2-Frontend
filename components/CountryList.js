import * as React from "react";
import { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import RectangleComponent from "../components/RectangleComponent";
import GroupComponent4 from "../components/GroupComponent4";
import GroupComponent1 from "../components/GroupComponent1";
import GroupComponent2 from "../components/GroupComponent2";
import GroupComponent3 from "../components/GroupComponent3";
import GroupComponent6 from "../components/GroupComponent6";
import GroupComponent5 from "../components/GroupComponent5";

const CountryList = () => {
  const [countryListFlatListData, setCountryListFlatListData] = useState([
    <RectangleComponent />,
    <GroupComponent4 />,
    <GroupComponent1 />,
    <GroupComponent2 />,
    <GroupComponent3 />,
    <GroupComponent6 />,
    <GroupComponent5 />,
  ]);

  return (
    <FlatList
      style={[styles.countryList, styles.mt32]}
      data={countryListFlatListData}
      renderItem={({ item }) => item}
    />
  );
};

const styles = StyleSheet.create({
  countryList: {
    width: 321,
    flex: 1,
    maxWidth: 321,
  },
});

export default CountryList;
