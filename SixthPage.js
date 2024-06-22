import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, TextInput } from 'react-native';

const caterers = [
  {
    id: '1',
    name: 'Rahalmaître traiteur',
    location: 'Casablanca-Rabat',
    image: require('./assets/rahal.jpeg'),
  },
  {
    id: '2',
    name: 'Himmi traiteur',
    location: 'Rabat',
    image: require('./assets/himmi.jpeg'),
  },
  {
    id: '3',
    name: 'Reve d\'une nuit traiteur',
    location: 'Casablanca',
    image: require('./assets/reve.jpeg'),
  },
];

const SixthPage = ({ navigation }) => {
  const renderItem = ({ item }) => {
    let onPressHandler;

    if (item.name === "Reve d'une nuit traiteur") {
      onPressHandler = () => navigation.navigate('Reve');
    } else if (item.name === 'Rahalmaître traiteur') {
      onPressHandler = () => navigation.navigate('Seventh', { catererId: item.id });
    } else {
      onPressHandler = () => navigation.navigate('Himmi1');
    }

    return (
      <TouchableOpacity style={styles.catererItem} onPress={onPressHandler}>
        <Image source={item.image} style={styles.catererImage} />
        <View style={styles.catererInfo}>
          <Text style={styles.catererName}>{item.name}</Text>
          <Text style={styles.catererLocation}>{item.location}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.searchInput} placeholder="Chercher" />
      <FlatList
        data={caterers}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eedfc2',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  searchInput: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 20,
  },
  catererItem: {
    marginBottom: 20,
  },
  catererImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  catererInfo: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 5,
    padding: 5,
  },
  catererName: {
    color: '#fff',
    fontSize: 18,
  },
  catererLocation: {
    color: '#fff',
    fontSize: 14,
  },
});

export default SixthPage;
