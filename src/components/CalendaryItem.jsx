import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const getToday = () => {
    var date = new Date().getDate();
    return date;//format: d-m-y;
}
/* The parent style for the 'View' */
const styles = StyleSheet.create({
    lock: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5,
        backgroundColor: "lightgreen",
        margin: 10
    },

    unlock: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5,
        backgroundColor: "lightblue",
        margin: 10
    }
});

//Component for each "Advent Day"
const CalendarItem = (props) => {
    // If the day is passed show the advent day
    if (getToday() >= props.id) {
        return (
            <View key={props.id} style={styles.lock}>
                <Text>DIA {props.id}</Text>
                <Image style={{ height: 100, width: 100 }} source={{ uri: "https://www.zksama.com/navidad/"+props.image_open }} />
                <Text>Desbloqueada</Text>
            </View>);
    }
    //If the day does not arrive, block the advent day
    return (
        <View key={props.id} style={styles.unlock}>
            <Text>Casilla {props.id}</Text>
            <Image style={{ height: 100, width: 100 }} source={{ uri: 'https://www.zksama.com/navidad/images/web/fondo.webp' }} />
            <Text>Bloqueada</Text>
        </View>);

    /* <View> It's the similar as <div> */

}



export default CalendarItem;