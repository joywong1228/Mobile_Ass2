import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import CityLink from '../../components/CityLink';
import CityInfo from '../../components/CityInfo';

export default function CalgaryScreen() {
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
      "Has one of the most extensive urban pathway systems in North America"
    ]
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.imageContainer}>
        <Image 
          source={require('../../data/calgary.avif')} 
          style={styles.cityImage}
          resizeMode="cover"
        />
        <View style={styles.imageOverlay}>
          <Text style={styles.imageTitle}>Calgary, Alberta</Text>
        </View>
      </View>

      <CityInfo 
        cityName={calgaryData.cityName}
        population={calgaryData.population}
        province={calgaryData.province}
        founded={calgaryData.founded}
        nickname={calgaryData.nickname}
        keyFacts={calgaryData.keyFacts}
      />

      <CityLink url="https://www.calgary.ca/home.html" />
      
      <View style={styles.bottomSpacer} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingBottom: 100, // Extra space for tab bar
  },
  imageContainer: {
    position: 'relative',
    marginTop: 16,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
  cityImage: {
    width: '100%',
    height: 250,
  },
  imageOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 16,
  },
  imageTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  bottomSpacer: {
    height: 20,
  },
});