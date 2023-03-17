import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "../../theme/colors";

const LoginScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../../theme/shoeImages/airJordan1_chicago.png")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Username or email or mobile number"
          placeholderTextColor={colors.primaryDark}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor={colors.primaryDark}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.createAccountButton}>
          <Text style={styles.createAccountButtonText}>Create New Account</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    padding: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 50,
    backgroundColor: colors.backgroundTint,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: colors.background,
    color: colors.secondary,
    alignItems: "center",
    width: "80%",
  },
  button: {
    height: 50,
    backgroundColor: colors.background,
    color: colors.secondary,
    width: "80%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: colors.primaryDark,
    fontSize: 18,
    fontWeight: "bold",
  },
  createAccountButton: {
    height: 50,
    backgroundColor: colors.backgroundTint,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 50,
    color: colors.secondary,
    width: "80%",
    marginTop: 20,
  },
  createAccountButtonText: {
    color: colors.primaryDark,
    backgroundColor: colors.background,
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default LoginScreen;
