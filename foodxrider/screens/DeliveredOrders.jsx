import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DeliveredOrders = () => {
  // Sample data for delivered orders
  const [deliveredOrders, setDeliveredOrders] = useState([
    { id: '1', customer: 'John Doe', order: 'Pizza', date: '2023-07-20' },
    { id: '2', customer: 'Jane Smith', order: 'Burger', date: '2023-07-21' },
    // Add more delivered orders here...
  ]);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);

  const handleStartDateChange = (event, selectedDate) => {
    setShowStartDatePicker(false);
    if (selectedDate) {
      setStartDate(selectedDate);
    }
  };

  const handleEndDateChange = (event, selectedDate) => {
    setShowEndDatePicker(false);
    if (selectedDate) {
      setEndDate(selectedDate);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.customer}</Text>
      <Text style={styles.itemText}>{item.order}</Text>
      <Text style={styles.itemText}>{item.date}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <Text style={styles.filterText}>Filter</Text>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => setShowStartDatePicker(true)} // Show the Start Date picker on button press
        >
          <Text style={styles.filterButtonText}>{startDate ? startDate.toDateString() : 'Start Date'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => setShowEndDatePicker(true)} // Show the End Date picker on button press
        >
          <Text style={styles.filterButtonText}>{endDate ? endDate.toDateString() : 'End Date'}</Text>
        </TouchableOpacity>
        {/* Add more filter options as needed */}
      </View>
      {showStartDatePicker && (
        <DateTimePicker
          value={startDate || new Date()} // Set the initial value for the Start Date picker
          mode="date"
          display="calendar"
          onChange={handleStartDateChange}
        />
      )}
      {showEndDatePicker && (
        <DateTimePicker
          value={endDate || new Date()} // Set the initial value for the End Date picker
          mode="date"
          display="calendar"
          onChange={handleEndDateChange}
        />
      )}
      <Text style={styles.title}>Delivered Orders:</Text>
      <FlatList
        data={deliveredOrders}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  filterText: {
    fontSize: 16,
    marginRight: 10,
  },
  filterButton: {
    borderColor: '#007BFF',
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
    marginRight: 10,
  },
  filterButtonText: {
    color: '#007BFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 16,
  },
});

export default DeliveredOrders;
