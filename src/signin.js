import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { CheckBox, Icon } from "react-native-elements";

const Signin = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <Text style={styles.paragraph}>
        Welcome Back! Please enter your details
      </Text>
      <TextInput
        style={styles.input}
        placeholder="lydia@gmail.com"
        placeholderTextColor="#000"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#000"
      />
      <View style={styles.checkbox}>
        <CheckBox style={styles.check} />
        <Text style={styles.remember}>Remember me</Text>
      </View>
      <Text style={styles.forgot}>Forgot Password?</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <View style={styles.signup}>
        <Text style={styles.create}>Create account</Text>
        <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.signupText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.icon}>
        <Icon style={styles.iconStyle}
          name="facebook"
          type="font-awesome"
          size={25}
          backgroundColor="#40A2E3"
          color="#fff"
          paddingTop= {5}
          
        />
         <Icon style={styles.iconStyle}
          name="google"
          type="font-awesome"
          size={20}
          backgroundColor="#CD5C08"
          color="#fff"
          paddingTop= {5}
          
        />
         <Icon style={styles.iconStyle}
          name="apple"
          type="font-awesome"
          size={30}
          color="#000"
        />
      </View>
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70,
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  paragraph: {
    marginBottom: 70,
    fontSize: 17,
    color: "gray",
    textAlign: "center",
  },
  input: {
    height: 50,
    width: "80%",
    color: "#000",
    backgroundColor: "#efefef",
    borderRadius: 15,
    marginBottom: 16,
    paddingLeft: 8,
  },
  button: {
    backgroundColor: "#40A2E3",
    padding: 20,
    borderRadius: 40,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  checkbox: {
    flexDirection: "row",
    marginRight: 180,
    marginBottom: 80,
  },
  remember: {
    marginTop: 19,
    marginLeft: -13,
  },
  forgot: {
    marginBottom: 10,
    fontWeight: "bold",
    color: "#40A2E3",
  },
  signup: {
    marginTop: 15,
    flexDirection: "row",
    gap: 130,
  },
  signupButton: {
    backgroundColor: "#efefef",
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 12,
  },
  create: {
    marginTop: 8,
  },
  signupText: {
    color: "orange",
  },
  icon: {
    marginTop: 40,
    flexDirection: 'row',
    gap: 80,  
  },
  iconStyle: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: "#fff" 
  }
});
