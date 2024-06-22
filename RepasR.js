import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';

const RepasR = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <TextInput style={styles.searchInput} placeholder="Chercher" />
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('EntreeR')}>
          <Image source={require('./assets/entrees.jpeg')} style={styles.optionImage} />
          <Text style={styles.optionText}>Entrées</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('DinerR')}>
          <Image source={require('./assets/repas.jpeg')} style={styles.optionImage} />
          <Text style={styles.optionText}>Repas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('DessertR')}>
          <Image source={require('./assets/dessert.jpeg')} style={styles.optionImage} />
          <Text style={styles.optionText}>Desserts</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dfcfc1',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 20,
  },
  searchInput: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: '#f5ebe0',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  option: {
    alignItems: 'center',
  },
  optionImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  optionText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RepasR;
