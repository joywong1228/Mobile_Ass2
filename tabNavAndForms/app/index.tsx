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
        <Text style={styles.title}>Sign In Page</Text>
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
    backgroundColor: "#222",
    justifyContent: "center",
    alignItems: "center",
  },
  bubble: {
    backgroundColor: "rgba(255,255,255,0.28)",
    borderRadius: 32,
    paddingVertical: 44,
    paddingHorizontal: 34,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.16,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 8 },
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
    minWidth: 280,
    maxWidth: 370,
  },
  title: {
    fontSize: 32,
    color: "#393939",
    fontWeight: "800",
    marginBottom: 30,
    letterSpacing: 1,
    fontFamily: "System",
    textAlign: "center",
    backgroundColor: "rgba(255,255,255,0.5)",
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 18,
    overflow: "hidden",
  },
  input: {
    width: 230,
    borderWidth: 0,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.72)",
    color: "#232323",
    paddingVertical: 16,
    paddingHorizontal: 18,
    marginVertical: 10,
    fontSize: 19,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 15,
    shadowColor: "#aaa",
    shadowOpacity: 0.07,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 1 },
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingVertical: 16,
    paddingHorizontal: 42,
    marginTop: 10,
    shadowColor: "#222",
    shadowOpacity: 0.1,
    shadowRadius: 7,
    shadowOffset: { width: 0, height: 2 },
    alignItems: "center",
    alignSelf: "center",
    width: 150,
  },
  buttonText: {
    color: "#232323",
    fontWeight: "800",
    fontSize: 18,
    letterSpacing: 1,
    fontFamily: "System",
    textAlign: "center",
  },
});
