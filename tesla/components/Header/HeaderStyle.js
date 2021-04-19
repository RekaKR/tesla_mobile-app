import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 20,
    zIndex: 2
  },
  logo: {
    width: 100,
    height: 20,
    resizeMode: 'contain'
  },
  menu: {
    width: 25,
    height: 25,
    resizeMode: 'contain'
  }
});

export default styles;