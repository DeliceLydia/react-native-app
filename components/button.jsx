import { Text, ScrollView, StyleSheet, View } from "react-native";
import Nav from "./nav";
const Button = () => {
  return (
    <View>
      <Nav />
      <ScrollView style={styles.scrollContent} horizontal>
        <Text style={styles.all}>All</Text>
        <Text style={styles.item}>Woman</Text>
        <Text style={styles.item}>Man</Text>
        <Text style={styles.item}>Dress</Text>
        <Text style={styles.item}>Baby</Text>
        <Text style={styles.item}>Kids</Text>
        <Text style={styles.item}>Nurses</Text>
      </ScrollView>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  scrollContent: {
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 5
  },
  all: {
    marginRight: 20,
    color: "#fff",
    paddingTop: 8,
    fontSize: 18,
    fontWeight: "600",
    paddingBottom: 8,
    borderRadius: 26,
    paddingLeft: 26,
    paddingRight: 26,
    backgroundColor: "#c79d5d",
  },
  item: {
    backgroundColor: "#fefefe",
    marginRight: 20,
    paddingTop: 8,
    color: "#6e6e6e",
    fontSize: 18,
    fontWeight: "600",
    paddingBottom: 8,
    borderRadius: 26,
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 1,
    borderColor: "#f6f6f6",
  },
});
