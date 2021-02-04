import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles"

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: ""
    };

    this.setEmail = this.setEmail.bind(this);
    this.setUsername = this.setUsername.bind(this);
    this.setPassword = this.setPassword.bind(this);
  }

  setEmail = (event) => {
    console.log(event.target.value);
  }

  setUsername(event) {
    console.log(event.target.value);
    this.setState({username: username});
  }

  setPassword(password) {
    console.log(this.state.password);
    this.setState({password: password});
  }

  render() {
    return (
      <View style = {styles.allPages}>
        <Text style = {styles.pageTitle}>
          Register
        </Text>


        <Text>Welcome to INSERT APP NAME HERE</Text>
        <Text>Register to perform, or continue to view performances near you</Text>

        <TextInput style = {styles.registerLoginField}
          placeholder = "Email"
          value = {this.state.email}
          onChange = {this.setEmail}
        />
        <TextInput style = {styles.registerLoginField}
          placeholder = "Username"
          value = {this.state.username}
          onChange = {this.setUsername}
        />
        <TextInput style = {styles.registerLoginField}
          placeholder = "Password"
          value = {this.state.password}
          onChange = {this.setPassword}
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
