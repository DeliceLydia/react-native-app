import { StyleSheet, Text, View } from 'react-native';

const Todo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Todo</Text>
      <Text style={styles.header}>Todo list Items</Text>
      <View style={styles.innerContainer}>
        <Text style={styles.innerText}>1 Cleaning</Text>
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.innerText}>1 Cleaning</Text>
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.innerText}>1 Cleaning</Text>
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.innerText}>1 Cleaning</Text>
      </View>
    </View>
    
  );
}

export default Todo;

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
    fontSize: 20,
    fontWeight: 500
  },
  innerContainer: {
    margin: 15,
    padding: 15,
    borderWidth: 2,
    borderRadius: 10,
    borderStyle: 'dotted'
  },
  innerText: {
    color: '#000',
    textAlign: 'left',
  },
});
