import { StyleSheet, Dimensions } from 'react-native';

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  allPages: {
    alignItems: "center"
  }, //aligns everything to horizontal center

  pageTitle: {
    fontSize: 50
  },

  registerLoginField: {
    borderBottomColor: "lightblue",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginTop: 40,
    //marginLeft: .25 * windowWidth,     Handle other margins like this when flex box/justify content/align items doesn't cut it
    width: .5 * windowWidth
  },

  registerLoginButtons: {
    backgroundColor: "lightblue",
    marginTop: 80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    width: .5 * windowWidth
  },

  registerLoginText: {
  },

  registerContinue: {
    top: .23 * windowHeight,
    fontSize: 20,
    marginLeft: .70 * windowWidth
  }
});

export default styles;
