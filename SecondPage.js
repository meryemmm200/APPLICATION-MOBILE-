import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

const SecondPage = ({ navigation }) => {
  return (
    <ImageBackground source={require('./assets/background.jpeg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Organise ton ÉVÉNEMENT</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Fourth')} style={styles.supplierButton}>
          <Text style={styles.buttonText}>Fournisseur</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Third')} style={styles.button}>
          <Text style={styles.buttonText}>Explore</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start', // Aligné en haut
    marginTop: 50, // Petit décalage vers le haut
    marginRight: 20, // Ajout d'un décalage à droite pour le bouton "Fournisseur"
    marginLeft: 20, // Ajout d'un décalage à gauche pour le titre
  },
  title: {
    fontSize: 24,
    color: '#FFF', // Ne change pas la couleur
    marginBottom: 20,
  },
  supplierButton: {
    padding: 10,
    backgroundColor: '#B7867F', // Même couleur que le bouton "Explore"
    borderRadius: 5,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end', // Aligné en bas
    alignItems: 'center',
    marginBottom: 50, // Petit décalage vers le bas
  },
  button: {
    padding: 10,
    backgroundColor: '#B7867F', // Même couleur que le bouton "Explore"
    borderRadius: 5,
  },
  buttonText: {
    color: '#333',
    fontSize: 16,
  },
});

export default SecondPage;
