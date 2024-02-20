import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./registerStyle";
import { TextInput } from "react-native-paper";
import { Icon } from "react-native-elements";

const RegisterScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logo2.jpeg")}
        style={styles.logoImg}
        resizeMode="contain"
      />
      <Text style={styles.header}>Register</Text>
      <TextInput
        theme={{ roundness: 20 }}
        style={styles.input}
        mode="flat"
        label="Username"
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
        theme={{ roundness: 20 }}
        style={styles.input}
        mode="flat"
        label="Email"
        underlineColor="#f7f7f7"
        left={
          <TextInput.Icon
            icon="email-outline"
            color="#a3dfbf"
            backgroundColor="#ddf6e9"
          />
        }
      />
      <TextInput
        theme={{ roundness: 20 }}
        style={styles.input}
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
        <Text>Have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("signin")}>
          <Text style={{ color: "#08684a" }}>Sign in</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
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

export default RegisterScreen;
