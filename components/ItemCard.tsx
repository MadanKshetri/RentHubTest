// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
// import { Feather } from '@expo/vector-icons';

// const { width } = Dimensions.get('window');
// const cardWidth = (width - 40) / 2; // 2 cards per row with space in between

// const ItemCard = ({ item }) => {
//   return (
//     <TouchableOpacity style={styles.card}>
//       <View style={styles.imageContainer}>
//         <Feather name={item.image} size={50} color="#666" />
//       </View>
//       <View style={styles.infoContainer}>
//         <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
//         <Text style={styles.price}>{item.price}/day</Text>
//       </View>
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   card: {
//     width: cardWidth,
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     marginBottom: 15,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//     overflow: 'hidden',
//   },
//   imageContainer: {
//     height: 120,
//     backgroundColor: '#f2f2f2',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   infoContainer: {
//     padding: 12,
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: '600',
//     marginBottom: 5,
//     color: '#333',
//   },
//   price: {
//     fontSize: 14,
//     color: '#3B82F6',
//     fontWeight: '500',
//   },
// });

// export default ItemCard;

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';

const { width } = Dimensions.get('window');
const cardWidth = (width - 40) / 2; // 2 cards per row with space in between

const ItemCard = ({ item }) => {
  // Default placeholder image if none provided or invalid
  const defaultImage = 'https://via.placeholder.com/150';

  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: item.image && item.image.startsWith('http') ? item.image : defaultImage }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
        <Text style={styles.price}>{item.price} {item.Location}/day</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: cardWidth,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  imageContainer: {
    height: 120,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  infoContainer: {
    padding: 12,
    letterSpacing:1.6 
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
    color: '#333',
  },
  price: {
    fontSize: 14,
    color: '#3B82F6',
    fontWeight: '500',
  },
});

export default ItemCard;

