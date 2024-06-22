import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';

const Rahal1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/rahal.jpeg')} style={styles.headerImage} />
      <Text style={styles.headerText}>Rahalmaitretraiteur</Text>
      <TextInput style={styles.searchInput} placeholder="Chercher" />
      <TouchableOpacity
        style={styles.option}
        onPress={() => navigation.navigate('RepasRahal')}
      >
        <Text style={styles.optionText}>Repas</Text>
        <View style={styles.arrowContainer}>
          <Text style={styles.arrow}>➔</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Assiettes')}>
        <Text style={styles.optionText}>Assiettes</Text>
        <View style={styles.arrowContainer}>
          <Text style={styles.arrow}>➔</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Table')}>
        <Text style={styles.optionText}>Mises en places</Text>
        <View style={styles.arrowContainer}>
          <Text style={styles.arrow}>➔</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Tapi')}>
        <Text style={styles.optionText}>Tapis</Text>
        <View style={styles.arrowContainer}>
          <Text style={styles.arrow}>➔</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dfcfc1',
    padding: 20,
    alignItems: 'center',
  },
  headerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  searchInput: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: '#f5ebe0',
  },
  option: {
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#f5ebe0',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  optionText: {
    fontSize: 18,
    color: '#333',
  },
  arrowContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Rahal1;
