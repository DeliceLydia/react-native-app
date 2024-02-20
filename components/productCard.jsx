import { View, Text, Image, StyleSheet } from "react-native";
import AntiDesign from "react-native-vector-icons/AntDesign";

const ProductCard = ({ title, image, price }) => {
  return (
    <View style={styles.card}>
      <AntiDesign name="hearto" size={20} color='black' marginLeft={10}/>
        <Image source={{ uri: image }} style={styles.cardImage} />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardPrice}>${price}</Text>
        </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    width: 160,
    borderWidth: 0,
    marginTop: 50,
    margin: 10,
    
  },
  cardImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardContent: {
    padding: 10,
    
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  cardPrice: {
    fontSize: 16,
    color: "#676767",
  },
  text: {
    fontSize: 12,
    color: "#efefef",
    borderRadius: 12,
    marginTop: -230,
    marginLeft: 20,
    backgroundColor: "#c69c62",
    paddingTop: 5,
    paddingBottom: 5,
    width: 100,
    textAlign: "center",
    fontWeight: "bold",
  },
});
