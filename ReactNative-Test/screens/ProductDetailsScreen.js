import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window'); 

const ProductDetailsScreen = ({ route }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={product.image} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: width * 0.35, 
    height: width * 0.35,
    borderRadius: 15,
    marginRight: 15, 
  },
  textContainer: {
    flex: 1, 
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'left', 
  },
});

export default ProductDetailsScreen;
