import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function WelcomePage() {
  const router = useRouter();

  const handleLogout = () => {
    // Add any sign-out cleanup here if needed
    router.replace("/"); // redirect to sign-in page at app/index.tsx
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My New App</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/welcome/calgary")}>
        <Text style={styles.buttonText}>Explore Calgary</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/welcome/vancouver")}>
        <Text style={styles.buttonText}>Explore Vancouver</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    color: "#fff",
    fontSize: 30,
    marginBottom: 40,
    textAlign: "center",
  },
  button: {
    marginTop: 20,
    backgroundColor: "#444",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  logoutButton: {
    marginTop: 50,
    backgroundColor: "#b00020",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  logoutText: {
    color: "#fff",
    fontSize: 18,
  },
});
