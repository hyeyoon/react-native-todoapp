import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class FilterMenu extends Component {
  render() {
    return (
      <View style={styles.filterContainer}>
        <Text style={styles.filter}>All</Text>
        <Text style={styles.filter}>Completed</Text>
        <Text style={styles.filter}>Active</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  filter: {
    padding: 8,
    color: '#6374d0'
  }
});
