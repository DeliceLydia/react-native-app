import { Text, View, TouchableOpacity } from "react-native";
import { TextInput} from 'react-native-paper';
import styles from "./signinStyle";
import { Icon, CheckBox } from "react-native-elements";

const Signin = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <Text style={styles.paragraph}>
        Welcome Back! Please enter your details
      </Text>
        <TextInput
          style={styles.input}
          mode="flat"
          label="Email"
          underlineColor="#f7f7f7"
          left={<TextInput.Icon icon="email-outline" color="#e24bff" backgroundColor= "#f7d3fe"/>}
        />
        <TextInput
          style={styles.input}
          mode="flat"
          label="Password"
          underlineColor="#f7f7f7"
          left={<TextInput.Icon icon="lock-outline" color="#729bff" backgroundColor= "#e1eafe"/>}
        />
   
   <View style={styles.checkbox}>
    <CheckBox height= '30' width= '30'/>
    <Text style={styles.remember}>Remember</Text>
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
