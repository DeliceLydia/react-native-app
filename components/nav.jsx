import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { Icon } from "react-native-elements";

const Nav = () => {
  return (
    <View style={styles.container} >
      <View style={styles.header}>
        <Icon
          name="arrow-left"
          type="font-awesome"
          size={15}
          padding={16}
          borderRadius={50}
          backgroundColor="#e7e7e7"
         
        />
        <Text style={styles.title}>Search</Text>
        <Icon name='tune' type='material' style={styles.tune}/>
      </View>
      <View style={styles.input}>
      <Icon
          name="search"
          type="font-awesome"
          paddingTop= {23}
          paddingLeft= {20}
          size={15}
        />
         <TextInput
        label="Search"
        textColor="#c1c5cb"
        mode="flat"
        backgroundColor="#f7f8ff"
        underlineColor="#f7f8ff"
      />
      <View>
      <TextInput.Icon icon={'tune-variant'} style={styles.variant}/>
      </View>

      </View>
    </View>
  );
};

export default Nav;

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   marginTop: 100
  // },
  header: {
    marginTop: 50,
    flexDirection: 'row',
    gap: 100,
    paddingLeft: 15,
  },
  title: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold'
  },
  input: {
    width: '90%',
    backgroundColor: "#f7f8ff",
    marginTop: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: "row",
    borderRadius: 30
  },
  tune: {
    marginTop: 14
  },
  variant: {
    left: 190,
    top: 18
  }
});

