import React from "react";
import { Text, FlatList } from "react-native";
import repositories from "../data/repositories.js";
import CalendarItem from "../components/CalendaryItem.jsx"
//Scroll LIST
const CalendarList = () => {
  return (
    /* Flat& Scroll are similar : <ScrollView> {repositories.map((advent) => (*/
    <FlatList
      data={repositories}
      renderItem={({ item }) => (
        /*Load all the OBJ o ITEM {id, advent,image_open }*/
        <CalendarItem {...item} />
      )}
    />
  );
};

export default CalendarList;
