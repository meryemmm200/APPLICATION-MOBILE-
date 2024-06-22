// FifthPage.js
import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import de useNavigation
import { Calendar } from 'react-native-calendars';

const FifthPage = () => {
  const navigation = useNavigation(); // Utilisation de useNavigation pour obtenir l'objet de navigation

  const handleConfirmPress = () => {
    // Naviguer vers la sixième page lorsque le bouton "Confirmer" est pressé
    navigation.navigate('Sixth');
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Saisissez la date de votre événement</Text>

      <Calendar
        style={styles.calendar}
        onDayPress={(day) => {
          console.log('selected day', day);
        }}
      />

      <TextInput
        style={styles.input}
        placeholder="Saisissez le nombre de personnes"
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={handleConfirmPress}>
        <Text style={styles.buttonText}>Confirmer</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eedfc2',
    alignItems: 'center',
    paddingTop: 50,
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    color: '#333',
    marginBottom: 20,
  },
  calendar: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 30,
    width: '90%',
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#d4a373',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default FifthPage;
