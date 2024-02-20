import { Text, View, TouchableOpacity, Image } from "react-native";
import { TextInput } from "react-native-paper";
import styles from "./signinStyle";
import { Icon } from "react-native-elements";

const Signin = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logo1.jpeg")}
        style={styles.logoImg}
        resizeMode="cover"
      />
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        theme={{ roundness: 20 }}
        mode="flat"
        label="Lydia@gmail.com"
        underlineColor="#f7f7f7"
        left={
          <TextInput.Icon
            icon="account-outline"
            color="#fccc9d"
            backgroundColor="#feebe3"
          />
        }
      />
      <TextInput
        style={styles.input}
        theme={{ roundness: 20 }}
        mode="flat"
        label="Password"
        underlineColor="#f7f7f7"
        left={
          <TextInput.Icon
            icon="lock-outline"
            color="#b1aff6"
            backgroundColor="#e9eaff"
          />
        }
      />
      <View style={styles.link}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("register")}>
          <Text style={{ color: "#08684a" }}>Register</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.flexButton}>
        <Text style={styles.forgot}>Forgot Password? </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
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
          <Image
            source={require("../assets/googleLogo.png")}
            style={styles.image}
          />
        </View>
        <View style={styles.bg}>
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
