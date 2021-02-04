import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles"

class Login extends React.Component {
  render() {
    return (
      <View style = {styles.allPages}>
        <Text style = {styles.pageTitle}>
          Login
        </Text>


        <TextInput style = {styles.registerLoginField}
          placeholder = "Username"
        />
        <TextInput style = {styles.registerLoginField}
          placeholder = "Password"
        />

        <TouchableOpacity
          style = {styles.registerLoginButtons}
          onPress={() => console.log('Simple Button pressed')}
        >
          <Text style = {styles.registerText}>
            Log In
          </Text>
        </TouchableOpacity>

      </View>
    );
  }
}

export default Login;
