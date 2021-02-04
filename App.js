import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Register from "./components/Register";
import Login from "./components/Login";

export default function App() {
  let displayLogin = false;
  let loginOrRegister = <Register />
  if (displayLogin) {
    loginOrRegister = <Login />
  }

  //need refined logic to tell which screen to display between login and register

  return (
    <View style={styles.container}>
      {loginOrRegister}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
