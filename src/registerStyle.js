import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    marginTop: -30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 60,
    borderRadius: 20,
    width: "90%",
    color: "#000",
    borderWidth: 0,
    backgroundColor: '#fcfefd',
    marginBottom: 12
  },
  button: {
    backgroundColor: '#1a1c33',
    width: "90%",
    height: 60,
    borderRadius: 20,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    paddingTop: 16,
    fontSize: 18,
    textAlign: 'center',
  },
  image: {
    width: 30,
    height: 30,
    marginTop: 15,
  },
  logoImg: {
    width: 280,
    height: 280,
    marginTop: -40
  },
  link: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 15,
    marginBottom: 15
  },
  bg: {
    backgroundColor: '#fcfcfc',
    width: 60,
    height: 60,
    paddingLeft: 15,
    paddingTop: 2,
    borderRadius: 60
  },
  icon: {
    marginTop: 20,
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
});

export default styles;
