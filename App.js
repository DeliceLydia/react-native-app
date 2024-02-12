import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Todo</Text>
      <Text style={styles.header}>Todo list Items</Text>
      <View style={styles.innerContainer}>
        <Text style={styles.innerText}>1 Cleaning</Text>
        <Text style={styles.innerText}>1 Cleaning</Text>
        <Text style={styles.innerText}>1 Cleaning</Text>
        <Text style={styles.innerText}>1 Cleaning</Text>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: 20,
  },
  text: {
    fontSize: 18,
    color: '#fff',
    backgroundColor: '#f96d00',
    padding: 17,
    textAlign: 'right'
  },
  header: {
    marginTop: 60,
    marginLeft: 30,
    fontSize: 16
  },
  innerContainer: {
    marginTop: 20,
    paddingLeft: 8,
  },
  innerText: {
    fontSize: 15,
    padding: 14,
    borderRadius: 10,
    color: 'black',
    marginBottom: 15,
    borderWidth: 1
  },
});
