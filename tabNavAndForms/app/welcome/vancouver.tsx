import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import CityLink from "../../components/CityLink";
import CityInfo from "../../components/CityInfo";

export default function VancouverScreen() {
  const router = useRouter();

  const vancouverData = {
    cityName: "Vancouver",
    population: "2.6 million",
    province: "British Columbia",
    founded: "1886",
    nickname: "Rain City",
    keyFacts: [
      "Consistently ranked as one of the world's most livable cities",
      "Surrounded by mountains, ocean, and rainforest",
      "Hosted the 2010 Winter Olympics",
      "Major Pacific gateway and Canada's busiest port",
      "Home to the largest urban park in North America (Stanley Park)",
      "Has the mildest climate of any major Canadian city",
      "Third-largest film production center in North America",
      "Features diverse neighborhoods like Chinatown, Gastown, and Yaletown",
    ],
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      {/* Back Arrow */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={28} color="#333" />
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>

      {/* City Image */}
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/vancouver.jpg")}
          style={styles.cityImage}
          resizeMode="cover"
        />
        <View style={styles.imageOverlay}>
          <Text style={styles.imageTitle}>Vancouver, BC</Text>
        </View>
      </View>

      {/* City Info */}
      <CityInfo
        cityName={vancouverData.cityName}
        population={vancouverData.population}
        province={vancouverData.province}
        founded={vancouverData.founded}
        nickname={vancouverData.nickname}
        keyFacts={vancouverData.keyFacts}
      />

      <CityLink url="https://vancouver.ca/" />

      <View style={styles.bottomSpacer} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6F8",
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingBottom: 100,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
    marginBottom: 8,
  },
  backText: {
    fontSize: 18,
    color: "#333",
    marginLeft: 8,
  },
  imageContainer: {
    position: "relative",
    borderRadius: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
  cityImage: {
    width: "100%",
    height: 250,
  },
  imageOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 16,
  },
  imageTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  bottomSpacer: {
    height: 30,
  },
});
