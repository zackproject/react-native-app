import React from "react";
import { View, Text } from "react-native";
//Component for each "Advent Day"
const CalendarItem = (props) => {
    console.log("props", props.image_open);
    /* <View> It's the similar as <div> */
    return (
        <View key={props.id} style={{ padding: 5 }}>
            <Text>Casilla {props.id}</Text>
            <Text>{props.advent}</Text>
            <Text>{props.image_open}</Text>
        </View>);
}

export default CalendarItem;