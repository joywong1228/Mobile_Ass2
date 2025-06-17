import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CityInfoProps {
  cityName: string;
  population: string;
  province: string;
  founded: string;
  nickname: string;
  keyFacts: string[];
}

export default function CityInfo({ 
  cityName, 
  population, 
  province, 
  founded, 
  nickname, 
  keyFacts 
}: CityInfoProps) {
  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <Text style={styles.cityName}>{cityName}</Text>
        <Text style={styles.nickname}>"{nickname}"</Text>
      </View>
      
      <View style={styles.infoSection}>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Province:</Text>
          <Text style={styles.value}>{province}</Text>
        </View>
        
        <View style={styles.infoRow}>
          <Text style={styles.label}>Population:</Text>
          <Text style={styles.value}>{population}</Text>
        </View>
        
        <View style={styles.infoRow}>
          <Text style={styles.label}>Founded:</Text>
          <Text style={styles.value}>{founded}</Text>
        </View>
      </View>

      <View style={styles.factsSection}>
        <Text style={styles.factsTitle}>Interesting Facts:</Text>
        {keyFacts.map((fact, index) => (
          <View key={index} style={styles.factItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.factText}>{fact}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 16,
    padding: 20,
    marginVertical: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
  },
  headerSection: {
    alignItems: 'center',
    marginBottom: 20,
    paddingBottom: 16,
    borderBottomWidth: 2,
    borderBottomColor: '#E0E0E0',
  },
  cityName: {
    fontSize: 28,
    fontWeight: '800',
    color: '#2C3E50',
    textAlign: 'center',
  },
  nickname: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#7F8C8D',
    marginTop: 4,
  },
  infoSection: {
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#34495E',
    flex: 1,
  },
  value: {
    fontSize: 16,
    color: '#2C3E50',
    flex: 2,
    textAlign: 'right',
  },
  factsSection: {
    marginTop: 8,
  },
  factsTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 12,
  },
  factItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  bullet: {
    fontSize: 16,
    color: '#3498DB',
    fontWeight: 'bold',
    marginRight: 8,
    marginTop: 2,
  },
  factText: {
    fontSize: 14,
    color: '#34495E',
    flex: 1,
    lineHeight: 20,
  },
});