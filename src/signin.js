import { Text, View, TextInput, TouchableOpacity } from "react-native";
import styles from "./signinStyle";
import { CheckBox, Icon } from "react-native-elements";

const Signin = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <Text style={styles.paragraph}>
        Welcome Back! Please enter your details
      </Text>
      <View style={styles.inputIcon}>
      <Icon
            style={styles.iconStyle}
            name="mail"
            type="material"
            size={20}
            backgroundColor="#f7d3fe"
            color="#e456fe"
            paddingTop={5}
          />
        <TextInput
          style={styles.input}
          placeholder="lydia@gmail.com"
          placeholderTextColor="#000"
        />
      </View>

      <View style={styles.inputIcon}>
      <Icon
            style={styles.iconStyle}
            name="lock"
            type="font-awesome"
            size={20}
            backgroundColor="#e1eafe"
            color="#7099ff"
            paddingTop={5}
          />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#000"
        />
      </View>

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
        <View style={styles.bg}>
          <Icon
            style={styles.iconStyle}
            name="facebook"
            type="font-awesome"
            size={25}
            backgroundColor="#277eff"
            color="#fff"
            paddingTop={5}
          />
        </View>
        <View style={styles.bg}>
          <Icon
            style={styles.iconStyle}
            name="google"
            type="font-awesome"
            size={20}
            backgroundColor="#fd5a42"
            color="#fff"
            paddingTop={5}
          />
        </View>
        <View>
          <Icon
            style={styles.iconStyle}
            name="apple"
            type="font-awesome"
            size={30}
            color="#000"
          />
        </View>
      </View>
    </View>
  );
};

export default Signin;
