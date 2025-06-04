// import React from 'react';
// import { View, Text, StyleSheet, FlatList, Dimensions, Image } from 'react-native';
// import ItemCard from './ItemCard';

// const FeaturedItems = () => {
//     const featuredItems = [
//     {
//       id: '1',
//       title: 'Road Bicycle',
//       price: '₹500',
//       image: 'https://i.pinimg.com/736x/12/f1/35/12f1355859d0aaa18fb4b054681a62b4.jpg',
//     },
//     {
//       id: '2',
//       title: 'DSLR Camera',
//       price: '₹800',
//       image: '',
//     },
//     {
//       id: '3',
//       title: 'MacBook Pro',
//       price: '₹1,200',
//       image: '',
//     },
//     {
//       id: '4',
//       title: 'Modern Sofa',
//       price: '₹700',
//       image: '',
//     },
//     {
//       id: '5',
//       title: 'Gaming Console',
//       price: '₹600',
//       image: '',
//     },
//     {
//       id: '6',
//       title: 'Drone',
//       price: '₹900',
//       image: 'radio',
//     },
//   ];
  

//   return (
//     <View style={styles.container}>
//       <Text style={styles.sectionTitle}>Featured</Text>
//       <FlatList
//         data={featuredItems}
//         renderItem={({ item }) => <ItemCard item={item} />}
//         keyExtractor={item => item.id}
//         numColumns={2}
//         contentContainerStyle={styles.gridContent}
//         columnWrapperStyle={styles.columnWrapper}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     marginVertical: 10,
//   },
//   sectionTitle: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginBottom: 15,
//     marginLeft: 15,
//     color: '#222',
//   },
//   gridContent: {
//     paddingHorizontal: 10,
//     paddingBottom: 20,
//   },
//   columnWrapper: {
//     justifyContent: 'space-between',
//   },
// });

// export default FeaturedItems;


import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ItemCard from './ItemCard';

const FeaturedItems = () => {
  const featuredItems = [
    {
      id: '1',
      title: 'Road Bicycle',
      price: 'Rs 500',
      image: 'https://i.pinimg.com/736x/2e/90/9b/2e909ba583f3f7ffbb064723a49c8844.jpg',
      Location: "Pokhara"
    },
    {
      id: '2',
      title: 'DSLR Camera',
      price: 'Rs 800',
      image: 'https://images.pexels.com/photos/225157/pexels-photo-225157.jpeg?cs=srgb&dl=pexels-fox-58267-225157.jpg&fm=jpg',
      Location: "Pokhara"
    },
    {
      id: '3',
      title: 'MacBook Pro',
      price: 'Rs1,200',
      image: 'https://media.istockphoto.com/id/471604920/photo/apple-15-inch-macbook-pro-retina-with-os-x-yosemite.jpg?s=612x612&w=0&k=20&c=7AXwje39nckM-TIUz1OKXFrPLN5FkH-X9SQ4gMlrag4=',
      Location: "Pokhara"
    },
    {
      id: '4',
      title: 'Modern Sofa',
      price: 'Rs 700',
      image: 'https://mysleepyhead.com/media/catalog/product/4/t/4thaug_2ndhalf5934_green.jpg',
      Location: "Pokhara"
    },  
    {
      id: '5',
      title: 'Gaming Console',
      price: 'Rs 600',
      image: 'https://t4.ftcdn.net/jpg/04/15/71/93/360_F_415719389_eNoldf5iIAbut6rgs1raR4Q3fEFW0KnV.jpg',
      Location: "Pokhara"
    },
    {
      id: '6',
      title: 'Drone',
      price: 'Rs 900',
      image: 'https://www.shutterstock.com/image-photo/drone-takeoff-quadcopter-lamp-propellers-600nw-2552216067.jpg',
      Location: "Pokhara"
    },
    {
      id: '7',
      title: 'Drone',
      price: 'Rs 900',
      image: 'https://www.shutterstock.com/image-photo/drone-takeoff-quadcopter-lamp-propellers-600nw-2552216067.jpg',
      Location: "Pokhara"
    },
    {
      id: '8',
      title: 'Drone',
      price: 'Rs 900',
      image: 'https://www.shutterstock.com/image-photo/drone-takeoff-quadcopter-lamp-propellers-600nw-2552216067.jpg',
      Location: "Pokhara"
    },
    {
      id: '9',
      title: 'Drone',
      price: 'Rs 900',
      image: 'https://www.shutterstock.com/image-photo/drone-takeoff-quadcopter-lamp-propellers-600nw-2552216067.jpg',
      Location: "Pokhara"
    },
    {
      id: '10',
      title: 'Drone',
      price: 'Rs 900',
      image: 'https://www.shutterstock.com/image-photo/drone-takeoff-quadcopter-lamp-propellers-600nw-2552216067.jpg',
      Location: "Pokhara"
    },
    {
      id: '11',
      title: 'Drone',
      price: 'Rs 900',
      image: 'https://www.shutterstock.com/image-photo/drone-takeoff-quadcopter-lamp-propellers-600nw-2552216067.jpg',
      Location: "Pokhara"
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Featured</Text>
      <FlatList
        data={featuredItems}
        renderItem={({ item }) => <ItemCard item={item} />}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.gridContent}
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    marginLeft: 15,
    color: '#222',
  },
  gridContent: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
});

export default FeaturedItems;
