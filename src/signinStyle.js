import { StyleSheet} from "react-native";

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
    height: 60,
    borderRadius: 15,
    width: "90%",
    color: "#000",
    borderWidth: 0,
    backgroundColor: '#f7f7f7',
    marginBottom: 16
  },
  button: {
    backgroundColor: "#159bff",
    height: 60,
    borderRadius: 40,
    width: "90%",
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
  remember: {
    marginTop: 17,
    marginLeft: -12
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
    color: "#fec76b",
  },
  icon: {
    marginTop: 40,
    flexDirection: 'row',
    gap: 80,  
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