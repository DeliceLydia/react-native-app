import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

const Home = () => {
  return (
    <View style={styles.container}>
       <Text style={styles.title}>Home</Text>
      <View style={styles.icon}>
        <View>
          <Entypo name="flash" size={30} color={"blue"} />
        </View>
        <View>
          <AntDesign name="swap" size={30} color={"orange"} />
        </View>
        <View>
          <MaterialIcon name="copy-all" size={30} color={"blue"} />
        </View>
        <View>
          <Entypo name="star-outlined" size={30} color={"green"} />
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // backgroundColor: "#f3f4f6",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 30,
    textAlign: "left",
  },
  icon: {
    marginTop: 30,
    flexDirection: "row",
    gap: 80,
  },
  iconStyle: {
    width: 30,
    height: 30,
    marginTop: 12,
    borderRadius: 50,
    backgroundColor: "#fff",
  },
});
