import React from "react";
import { Tabs } from "expo-router";
import { Alert, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function WelcomeLayout() {
  const router = useRouter();

  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            router.push("/");
          },
        },
      ],
      { cancelable: false }
    );
  };

  const handleGroup3Press = () => {
    Alert.alert("Info", "Assignment 2 Done");
  };

  const LogoutButton = () => (
    <TouchableOpacity onPress={handleLogout} style={{ marginRight: 15 }}>
      <Text style={{ color: "#fff", fontWeight: "bold" }}>Logout</Text>
    </TouchableOpacity>
  );

  const Group3Button = () => (
    <TouchableOpacity onPress={handleGroup3Press} style={{ marginLeft: 15 }}>
      <Text style={{ color: "#fff", fontWeight: "bold" }}>Group 3</Text>
    </TouchableOpacity>
  );

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
        tabBarStyle: { backgroundColor: "#222" },
        tabBarLabelStyle: { fontSize: 14 },
        headerStyle: { backgroundColor: "#111" },
        headerTintColor: "#fff",
        headerTitle: "Welcome to My New App",
        headerTitleAlign: "center",
        headerRight: () => <LogoutButton />,
        headerLeft: () => <Group3Button />,
      }}
    >
      <Tabs.Screen
        name="calgary"
        options={{ title: "Calgary", tabBarLabel: "Calgary" }}
      />
      <Tabs.Screen
        name="vancouver"
        options={{ title: "Vancouver", tabBarLabel: "Vancouver" }}
      />
    </Tabs>
  );
}
