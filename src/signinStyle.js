import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: '#f3f4f6',
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    marginTop: 5,
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
    borderRadius: 20,
    width: "90%",
    color: "#000",
    borderWidth: 0,
    backgroundColor: '#fcfefd',
    marginBottom: 12
  },
  button: {
    backgroundColor: '#1a1c33',
    height: 40,
    borderRadius: 40,
    width: "30%",
    justifyContent: 'center',
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  checkbox: {
    flexDirection: 'row',
    marginLeft: -230,
    marginBottom: 80,
  },
  logoImg: {
    height: "40%"
  },
  remember: {
    marginTop: 17,
    marginLeft: -12
  },
  forgot: {
    marginTop: 12,
    color: "#b1aff6",
  },
  image: {
    width: 30,
    height: 30,
    marginTop: 15,
  },
  link: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 20,
    marginBottom: 10
  },
  flexButton: {
    flexDirection: 'row',
    gap: 120,
    marginTop: 20
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
    color: "#fec76b",
  },
  icon: {
    marginTop: 40,
    flexDirection: 'row',
    gap: 80,  
  },
  bg: {
    backgroundColor: '#fcfcfc',
    width: 60,
    height: 60,
    paddingLeft: 15,
    paddingTop: 2,
    borderRadius: 60
  },
  iconStyle: {
    width: 30,
    height: 30,
    marginTop: 12,
    borderRadius: 50,
    backgroundColor: "#fff" 
  },
  inputIcon: {
    flexDirection: 'row',
    marginBottom: 12,
    borderRadius: 18,
    paddingLeft: 12,
    backgroundColor: '#f7f7f7'
  }

});

export default styles;