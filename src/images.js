import React from "react";
import { View, Image, StyleSheet, Icon } from "react-native";

const Images = () => {
  return (
    <View >
      <View>
        <Icon 
          name = "arrow-left"
          size = {28}
          
        />
      </View>
      <View style={styles.container}>
        <View>
          <Image source={require("../assets/img1.jpg")} style={styles.image} />
        </View>
        <View>
          <Image source={require("../assets/img2.jpg")} style={styles.image} />
        </View>
        <View>
          <Image source={require("../assets/img3.jpg")} style={styles.image} />
        </View>
        <View>
          <Image source={require("../assets/img4.jpg")} style={styles.image} />
        </View>
        <View>
          <Image source={require("../assets/img2.jpg")} style={styles.image} />
        </View>
        <View>
          <Image source={require("../assets/img1.jpg")} style={styles.image} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 150,
    justifyContent: "space-around",
  },
  image: {
    width: 180,
    height: 180,
    marginTop: 10,
  },
});

export default Images;
