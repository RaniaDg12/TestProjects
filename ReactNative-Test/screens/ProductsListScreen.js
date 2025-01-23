import React, { useState } from 'react';
import { 
  View, Text, FlatList, TouchableOpacity, Image, StyleSheet, Dimensions, ScrollView 
} from 'react-native';

const allProducts = {
  All: [
    { id: '1', title: 'iPhone 13', description: 'Apple smartphone', image: require('../assets/iphone.jpg') },
    { id: '2', title: 'Samsung Galaxy S22', description: 'Samsung flagship', image: require('../assets/samsung.jpg') },
    { id: '3', title: 'Google Pixel 6', description: 'Google’s AI-powered phone', image: require('../assets/pixel.jpg') },
    { id: '4', title: 'MacBook Pro', description: 'Apple laptop', image: require('../assets/macbook.jpg') },
    { id: '5', title: 'Dell XPS 13', description: 'Premium Windows laptop', image: require('../assets/dell.jpg') },
    { id: '6', title: 'Apple Watch', description: 'Apple smartwatch', image: require('../assets/applewatch.jpg') },
    { id: '7', title: 'Samsung Galaxy Watch', description: 'Samsung smartwatch', image: require('../assets/galaxywatch.jpg') },
  ],
  Smartphones: [
    { id: '1', title: 'iPhone 13', description: 'Apple smartphone', image: require('../assets/iphone.jpg') },
    { id: '2', title: 'Samsung Galaxy S22', description: 'Samsung flagship', image: require('../assets/samsung.jpg') },
    { id: '3', title: 'Google Pixel 6', description: 'Google’s AI-powered phone', image: require('../assets/pixel.jpg') },
  ],
  PCs: [
    { id: '4', title: 'MacBook Pro', description: 'Apple laptop', image: require('../assets/macbook.jpg') },
    { id: '5', title: 'Dell XPS 13', description: 'Premium Windows laptop', image: require('../assets/dell.jpg') },
  ],
  Smartwatches: [
    { id: '6', title: 'Apple Watch', description: 'Apple smartwatch', image: require('../assets/applewatch.jpg') },
    { id: '7', title: 'Samsung Galaxy Watch', description: 'Samsung smartwatch', image: require('../assets/galaxywatch.jpg') },
  ],
};

const categories = Object.keys(allProducts); 
const { width } = Dimensions.get('window');

const ProductsListScreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <View style={styles.container}>
      {/* Horizontal Category Tabs */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={styles.categoryContainer}
      >
        {categories.map((category) => (
          <TouchableOpacity 
            key={category} 
            style={[styles.categoryTab, selectedCategory === category && styles.selectedTab]} 
            onPress={() => setSelectedCategory(category)}
          >
            <Text style={[styles.categoryText, selectedCategory === category && styles.selectedText]}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Product List */}
      <FlatList
        data={allProducts[selectedCategory]}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.card} 
            onPress={() => navigation.navigate('ProductDetails', { product: item })}
          >
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    categoryContainer: {
      flexDirection: 'row',
      paddingVertical: 10,
      paddingHorizontal: 5,
      backgroundColor: '#fff',
    },
    categoryTab: {
      paddingVertical: 8,
      paddingHorizontal: 15,
      marginHorizontal: 5,
      borderRadius: 20,
      backgroundColor: '#f0f0f0',
      minWidth: 90, 
      alignItems: 'center', 
    },
    selectedTab: {
      backgroundColor: '#f0f0f0', 
      borderBottomWidth: 2, 
      borderBottomColor: '#ff4d4d',
    },
    categoryText: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#333',
    },
    selectedText: {
      color: '#ff4d4d',
    },
  list: {
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  card: {
    width: (width / 2) - 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
  },
});

export default ProductsListScreen;
