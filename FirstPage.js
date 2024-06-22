import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const FirstPage = ({ navigation }) => {
  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Image source={require('./assets/logo.png')} style={styles.logo} />
        <Text style={styles.text}>POUR VOS ÉVÉNEMENTS</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Second')} style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eedfc2',
  },
  container: {
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 120,
  },
  text: {
    fontSize: 24,
    color: '#333',
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#333',
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default FirstPage;

