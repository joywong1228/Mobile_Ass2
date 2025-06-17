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

export default function CalgaryScreen() {
  const router = useRouter();

  const calgaryData = {
    cityName: "Calgary",
    population: "1.34 million",
    province: "Alberta",
    founded: "1875",
    nickname: "Cowtown",
    keyFacts: [
      "Home to the Calgary Stampede, the world's largest outdoor rodeo",
      "Located just 80km east of the Canadian Rocky Mountains",
      "Has the most sunny days of any major Canadian city (333 days/year)",
      "Oil and gas capital of Canada",
      "Hosted the 1988 Winter Olympics",
      "Features the iconic Calgary Tower at 191 meters tall",
      "Has one of the most extensive urban pathway systems in North America",
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
          source={require("../../assets/calgary.avif")}
          style={styles.cityImage}
          resizeMode="cover"
        />
        <View style={styles.imageOverlay}>
          <Text style={styles.imageTitle}>Calgary, Alberta</Text>
        </View>
      </View>

      {/* City Info */}
      <CityInfo
        cityName={calgaryData.cityName}
        population={calgaryData.population}
        province={calgaryData.province}
        founded={calgaryData.founded}
        nickname={calgaryData.nickname}
        keyFacts={calgaryData.keyFacts}
      />

      {/* City Link */}
      <CityLink url="https://www.calgary.ca/home.html" />

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
