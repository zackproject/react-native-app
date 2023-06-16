import React from "react";
import { Text, ScrollView, StyleSheet, View } from "react-native";
import repositories from "../data/repositories.js";
import CalendarItem from "../components/CalendaryItem.jsx"

const styles = StyleSheet.create({
  adventList: {
    //Default flex : "column"
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around"
  }
});

//ListView
const CalendarList = () => {
  /* <View> It's the similar as <div> but with flex default*/
  return (
    <ScrollView>
      <Text>Abre las casilla de hoy</Text>
      <View style={styles.adventList}>
        {repositories.map((advent) => (
          <CalendarItem key={advent.id} {...advent} />
        ))}
      </View>
    </ScrollView>
  );
};


export default CalendarList;
