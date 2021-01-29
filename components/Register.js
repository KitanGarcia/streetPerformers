import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles"

class Register extends React.Component {
  render() {
    return (
      <View style = {styles.allPages}>
        <Text style = {styles.pageTitle}>
          Register
        </Text>


        <Text>Welcome to INSERT APP NAME HERE</Text>
        <Text>Register to perform in the streets, or continue to view performances near you</Text>

        <TextInput style = {styles.registerField}
          value = "Email"
        />
        <TextInput style = {styles.registerField}
          value = "Username"
        />
        <TextInput style = {styles.registerField}
          value = "Password"
        />

        <TouchableOpacity
          style = {styles.registerLoginButtons}
          onPress={() => console.log('Simple Button pressed')}
        >
          <Text style = {styles.registerText}>
            Register
          </Text>
        </TouchableOpacity>

      </View>
    );
  }
}

export default Register;
