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
        <Text>Register to perform, or continue to view performances near you</Text>

        <TextInput style = {styles.registerLoginField}
          value = "Email"
        />
        <TextInput style = {styles.registerLoginField}
          value = "Username"
        />
        <TextInput style = {styles.registerLoginField}
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

        <Text style = {styles.registerContinue}>
          Continue
        </Text>

      </View>
    );
  }
}

export default Register;
