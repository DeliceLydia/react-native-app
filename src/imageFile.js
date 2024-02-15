import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import Entypo from "react-native-vector-icons/Entypo"
import { Icon } from "react-native-elements";

const ViewPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Icon 
        name="arrow-left"
        type="font-awesome"
        size={15}
        borderWidth= {3}
        borderRadius= {8}
        borderColor = '#000'
        marginTop = {6}
        padding={5}
        />
        <Text style={styles.title}>Text to Image</Text>
        <Entypo name="dots-three-vertical" 
        size={30}
        marginTop={8}
        />
      </View>
      <View style={styles.flexContainer}>
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
  },
  flexContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: 10,
    marginTop: 50
  },
  image: {
    width: 180,
    borderRadius: 10,
    height: 180,
    marginTop: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 70
  },
  title: {
    fontSize: 25,
    marginTop: 4,
    fontWeight: 'bold'
  }
});

export default ViewPage;
