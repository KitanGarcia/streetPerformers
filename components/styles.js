import { StyleSheet, Dimensions } from 'react-native';

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  pageTitle: {
    fontSize: 50
  },

  registerField: {
    borderBottomColor: "lightblue",

    borderBottomWidth: StyleSheet.hairlineWidth,
    marginTop: 40,
    marginLeft: .25 * windowWidth,
    width: .5 * windowWidth
  },

  registerLoginButtons: {
    backgroundColor: "lightblue",
    marginTop: 80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: .25 * windowWidth,
    height: 60,
    width: .5 * windowWidth
  },
  registerText: {
  }
});

export default styles;
