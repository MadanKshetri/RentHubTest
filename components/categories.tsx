import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

type CategoryItemProps = {
  icon: string;
  label: string;
  color: string;
};

const CategoryItem = ({ icon, label, color }) => (
  <TouchableOpacity style={styles.categoryItem}>
    <View style={[styles.iconContainer, { backgroundColor: color }]}>
      <Feather name={icon} size={24} color="#fff" />
    </View>
    <Text style={styles.categoryLabel}>{label}</Text>
  </TouchableOpacity>
);

const Categories = () => {
  const categories = [
    { id: 1, icon: 'shopping-bag', label: 'Clothing', color: '#F97316' },
    { id: 2, icon: 'camera', label: 'Cameras', color: '#8B5CF6' },
    { id: 3, icon: 'smartphone', label: 'Electronics', color: '#3B82F6' },
    { id: 4, icon: 'box', label: 'Furniture', color: '#10B981' },
    { id: 5, icon: 'headphones', label: 'Audio', color: '#EC4899' },
    { id: 6, icon: 'tool', label: 'Tools', color: '#6366F1' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Categories</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
            
      >
        {categories.map((category) => (
          <CategoryItem
            key={category.id}
            icon={category.icon}
            label={category.label}
            color={category.color}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    marginLeft: 15,
    color: '#222',
  },
  scrollContent: {
    paddingLeft: 15,
    paddingRight: 5,
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 20,
    width: 70,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  categoryLabel: {
    fontSize: 14,
    color: '#444',
    textAlign: 'center',
  },
});

export default Categories;
