import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function WelcomePage() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#111",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "#fff", fontSize: 30 }}>
        Welcome to My New App
      </Text>
      
      <TouchableOpacity onPress={() => router.push('/welcome/calgary')}>
        <Text style={{ color: "#fff", fontSize: 20, marginTop: 20 }}>
          Go to Calgary
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => router.push('/welcome/vancouver')}>
        <Text style={{ color: "#fff", fontSize: 20, marginTop: 20 }}>
          Go to Vancouver
        </Text>
      </TouchableOpacity>
    </View>
  );
}