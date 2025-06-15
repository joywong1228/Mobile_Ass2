import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import credentials from "../data/credentials.json";

export default function SignInScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const validateUsername = (u: string) => u.length >= 5;
  const hasMinLength = (p: string) => p.length >= 8;
  const hasUppercase = (p: string) => /[A-Z]/.test(p);
  const hasLowercase = (p: string) => /[a-z]/.test(p);
  const hasNumber = (p: string) => /\d/.test(p);
  const hasSpecialChar = (p: string) => /[^A-Za-z0-9]/.test(p);

  const handleSignIn = () => {
    if (!validateUsername(username)) {
      Alert.alert("Error", "Username must be at least 5 characters.");
      return;
    }
    if (!hasMinLength(password)) {
      Alert.alert("Error", "Password must be at least 8 characters.");
      return;
    }
    if (!hasUppercase(password)) {
      Alert.alert(
        "Error",
        "Password must include at least one uppercase letter."
      );
      return;
    }
    if (!hasLowercase(password)) {
      Alert.alert(
        "Error",
        "Password must include at least one lowercase letter."
      );
      return;
    }
    if (!hasNumber(password)) {
      Alert.alert("Error", "Password must include at least one number.");
      return;
    }
    if (!hasSpecialChar(password)) {
      Alert.alert(
        "Error",
        "Password must include at least one special character."
      );
      return;
    }

    const user = credentials.users.find(
      (c: { username: string; password: string }) => c.username === username
    );

    if (!user) {
      Alert.alert("Error", "Username not found.");
      return;
    }
    if (user.password !== password) {
      Alert.alert("Error", "Incorrect password.");
      return;
    }
    router.replace("/welcome");
  };

  return (
    <View style={styles.container}>
      <View style={styles.bubble}>
        <Text style={styles.title}>Sign In</Text>
        <TextInput
          placeholder="Username"
          placeholderTextColor="#bbb"
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#bbb"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  bubble: {
    backgroundColor: "rgba(255,255,255,0.12)",
    borderRadius: 16,
    paddingVertical: 40,
    paddingHorizontal: 28,
    alignItems: "center",
    shadowColor: "#fff",
    shadowOpacity: 0.5,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 10 },
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "#fff",
    minWidth: 260,
    maxWidth: 340,
  },
  title: {
    fontSize: 26,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 22,
    letterSpacing: 5,
    textTransform: "uppercase",
    textShadowColor: "#000",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
    fontFamily: "Courier", // Monospace look (may fall back)
  },
  input: {
    width: 200,
    borderWidth: 2,
    borderColor: "#fff",
    backgroundColor: "rgba(0,0,0,0.18)",
    color: "#fff",
    padding: 12,
    marginVertical: 9,
    borderRadius: 0,
    fontSize: 18,
    fontWeight: "900",
    textAlign: "center",
    letterSpacing: 2,
    fontFamily: "Courier",
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 0,
    paddingVertical: 13,
    paddingHorizontal: 46,
    marginTop: 16,
    borderWidth: 2,
    borderColor: "#000",
    alignItems: "center",
    alignSelf: "stretch",
    width: 200,
  },
  buttonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
    textTransform: "uppercase",
    letterSpacing: 2,
    fontFamily: "Courier",
  },
});
