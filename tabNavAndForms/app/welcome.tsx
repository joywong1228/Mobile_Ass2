import React from "react";
import { View, Text } from "react-native";

export default function WelcomePage() {
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
        this will be the welcome page
      </Text>
    </View>
  );
}
