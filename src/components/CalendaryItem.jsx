import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const getToday = () => {
    var date = new Date().getDate();
    return date;//format: d-m-y;
}
/* The parent style for the 'View' */
const styles = StyleSheet.create({
    container: {
        position: "relative",
        margin: 10,
        borderRadius: 6,
        overflow: "hidden",
        shadowColor: "black",
        shadowRadius: 50,

    },
    image: {
        width: 150,
        height: 150,
    },
    imageOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 150,
        height: 150,
    },
    numberOverlay: {
        position: 'absolute',
        bottom: 0,
        left: 10,
        color: "white",
        fontSize: 40,
        textShadowColor: 'black',
        textShadowRadius: 15,
    }
});

//Component for each "Advent Day"
const CalendarItem = (props) => {
    // If the day is passed show the advent day
    if (getToday() >= props.id) {
        return (
            <View style={styles.container}>
                <Text style={[styles.numberOverlay, { zIndex: 2 }]}>{props.id}</Text>
                <Image style={[styles.imageOverlay, { zIndex: 1 }]} source={{ uri: 'https://www.zksama.com/navidad/images/web/candado_abierto.png' }} />
                <Image style={styles.image} source={{ uri: 'https://www.zksama.com/navidad/images/web/fondo.webp' }} />
            </View>);
    }
    //If the day does not arrive, block the advent da
    return (
        <View style={styles.container}>
            <Text style={[styles.numberOverlay, { zIndex: 2 }]}>{props.id}</Text>
            <Image style={[styles.imageOverlay, { zIndex: 1 }]} source={{ uri: 'https://www.zksama.com/navidad/images/web/candado_cerrado.png' }} />
            <Image style={styles.image} source={{ uri: 'https://www.zksama.com/navidad/images/web/fondo.webp' }} />
        </View>);
}



export default CalendarItem;