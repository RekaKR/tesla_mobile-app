import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  carContainer: {
    width: '100%',
    height: Dimensions.get('window').height
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute'
  },
  titles: {
    width: '100%',
    marginTop: '20%',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
  },
  subtitle: {
    color: '#5c5e62',
    fontSize: 16
  },
  subtitleCTA: {
    textDecorationLine: 'underline'
  },
  buttonContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 50
  }
});

export default styles;