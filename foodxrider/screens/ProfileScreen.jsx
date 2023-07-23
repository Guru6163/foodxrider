import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ProfilePage = () => {
  const riderData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 123-456-7890',
    vehicle: 'Motorcycle',
    licensePlate: 'AB123CD',
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Profile</Text>
      <View style={styles.profileDetails}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.text}>{riderData.name}</Text>

        <Text style={styles.label}>Email:</Text>
        <Text style={styles.text}>{riderData.email}</Text>

        <Text style={styles.label}>Phone:</Text>
        <Text style={styles.text}>{riderData.phone}</Text>

        <Text style={styles.label}>Vehicle:</Text>
        <Text style={styles.text}>{riderData.vehicle}</Text>

        <Text style={styles.label}>License Plate:</Text>
        <Text style={styles.text}>{riderData.licensePlate}</Text>
      </View>

      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profileDetails: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    marginBottom: 15,
  },
  editButton: {
    backgroundColor: '#007BFF',
    padding: 12,
    alignItems: 'center',
    borderRadius: 10,
  },
  editButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfilePage;
