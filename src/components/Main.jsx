import React from "react";
//The constants are
import Constants from "expo-constants";
import { Text, View ,Image} from "react-native";
import repositories from "../data/repositories.js";
import CalendarList from './CalendarList.jsx'
const Main = () => {
  return (
    <View style={{ marginTop: Constants.statusBarHeight }}>
      <Text>Calendario de Adviento</Text>
      <CalendarList />
    </View>
  );
};

export default Main;
