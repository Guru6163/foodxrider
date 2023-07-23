import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeDashboard = () => {
  // Sample data for order requests, delivery assignments, and notifications
  const [orderRequests, setOrderRequests] = useState([
    { id: '1', customer: 'John Doe', order: 'Pizza', status: 'Pending' },
    { id: '2', customer: 'Jane Smith', order: 'Burger', status: 'Pending' },
    // Add more order requests here...
  ]);

  const [deliveryAssignments, setDeliveryAssignments] = useState([
    { id: '101', customer: 'Alice Johnson', order: 'Sushi', status: 'In Progress' },
    { id: '102', customer: 'Bob Williams', order: 'Pasta', status: 'In Progress' },
    // Add more delivery assignments here...
  ]);

  const [notifications, setNotifications] = useState([
    { id: '201', message: 'New order request received.' },
    { id: '202', message: 'Delivery assignment updated.' },
    // Add more notifications here...
  ]);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.customer}</Text>
      <Text style={styles.itemText}>{item.order}</Text>
      <Text style={styles.itemText}>{item.status}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Requests:</Text>
      <FlatList
        data={orderRequests}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <Text style={styles.title}>Delivery Assignments:</Text>
      <FlatList
        data={deliveryAssignments}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <Text style={styles.title}>Notifications:</Text>
      <FlatList
        data={notifications}
        renderItem={({ item }) => <Text style={styles.notificationText}>{item.message}</Text>}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white', // White background
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color:"black"
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 16,
  },
  notificationText: {
    fontSize: 16,
    color: 'green',
    marginBottom: 5,
  },
});

export default HomeDashboard;
