import React from "react";
import { ViewProps, StyleSheet, View, Text } from "react-native";
import Constants from "expo-constants";


const styles = StyleSheet.create({
    appBar: {
        backgroundColor: "#235e6f",
        //In Constants is the default pixel depends of mobile
        paddingTop: Constants.statusBarHeight + 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'white'
    },
    appBarText: {
        color: "white",
        fontSize: 30,
        textAlign: "center",
        fontFamily:"sans-serif-condensed"
    }
});


const AppBar = () => {
    return (
        <View style={styles.appBar}>
            <Text style={styles.appBarText}>Calendario Adviento</Text> 
        </View>
    )
}

export default AppBar;