import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, FlatList } from 'react-native';

const data = [
  { id: '1', title: 'Verrines sucrées', image: require('./assets/ver.jpg'), quantity: 0 },
  { id: '2', title: 'Eclairs', image: require('./assets/eclair.jpg'), quantity: 0 },
  { id: '3', title: 'Magnums', image: require('./assets/magnum.jpg'), quantity: 0 },
  { id: '4', title: 'Fruits', image: require('./assets/fruits.jpg'), quantity: 0 },
];

const DessertH = () => {
  const [items, setItems] = useState(data);

  const updateQuantity = (id, increment) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + increment } : item
    ));
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => updateQuantity(item.id, -1)} disabled={item.quantity <= 0}>
            <Text style={styles.quantityButton}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{item.quantity}</Text>
          <TouchableOpacity onPress={() => updateQuantity(item.id, 1)}>
            <Text style={styles.quantityButton}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Image source={require('./assets/himmi.jpeg')} style={styles.headerImage} />
      <TextInput style={styles.searchInput} placeholder="Chercher" />
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
      <View style={styles.footer}>
        <Text style={styles.totalText}>Total: DHS</Text>
        <TouchableOpacity style={styles.confirmButton}>
          <Text style={styles.confirmButtonText}>Confirmer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eedfc2',
    paddingTop: 10,
  },
  headerImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  searchInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingLeft: 10,
    backgroundColor: '#fff',
  },
  list: {
    paddingHorizontal: 12,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
  },
  itemImage: {
    width: 100,
    height: 100,
  },
  itemDetails: {
    flex: 1,
    paddingHorizontal: 10,
  },
  itemTitle: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    fontSize: 20,
    color: '#333',
    paddingHorizontal: 10,
  },
  quantityText: {
    fontSize: 16,
    color: '#333',
    marginHorizontal: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderTopWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  totalText: {
    fontSize: 18,
    color: '#333',
  },
  confirmButton: {
    backgroundColor: '#333',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default DessertH;