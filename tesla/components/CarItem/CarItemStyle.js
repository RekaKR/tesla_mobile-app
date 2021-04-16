import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  carContainer: {
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute'
  },
  titles: {
    width: '100%',
    marginTop: '10%',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
  },
  subtitle: {
    color: '#5c5e62',
    fontSize: 16
  }
});

export default styles;