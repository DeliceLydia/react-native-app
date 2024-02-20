import { View, Text, Image, StyleSheet } from 'react-native';

const Card = ({ title, image, price }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardPrice}>${price}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Best Seller</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    width: 300,
    margin: 10,
    backgroundColor: '#fff',
  },
  cardImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardContent: {
    padding: 10,
    justifyContent: 'space-between',
    backgroundColor: '#111315',
    flexDirection: 'row',
    borderRadius: 8
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#bbbbbc',
  },
  cardPrice: {
    fontSize: 16,
    color: '#bbbbbc',
  },
  text: {
    fontSize: 12,
    color: '#efefef',
    borderRadius: 12,
    marginTop: -230,
    marginLeft: 20,
    backgroundColor: "#c69c62",
    paddingTop: 5,
    paddingBottom:5,
    width: 100,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
