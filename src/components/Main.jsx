import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import CalendarList from './CalendarList.jsx'
import AppBar from "./AppBar.jsx";

const styles = StyleSheet.create({
  background: {
    // flex: 1,
    backgroundColor: '#ffaa00',
    resizeMode: 'cover',
  }
})
const Main = () => {
  return (
    <View >
      <AppBar />
      <ImageBackground source={{ uri: 'https://i.imgur.com/ONsupqi.png' }} style={{ width: '100%', height: '100%' }} imageStyle={{ resizeMode: 'repeat' }}>
        <CalendarList />
      </ImageBackground>
    </View>
  );
};

export default Main;
