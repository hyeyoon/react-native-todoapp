import React, { Component } from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

export default class FilterMenu extends Component {
  render() {
    const {onChangeFilter, filter} = this.props;
    return (
      <View style={styles.filterContainer}>
        <TouchableOpacity onPress={() => onChangeFilter('All')}>
          <Text style={[styles.filter, filter === 'All' ? styles.filterActive : styles.filterInActive]}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onChangeFilter('Completed')}>
          <Text style={[styles.filter, filter === 'Completed' ? styles.filterActive : styles.filterInActive]}>Completed</Text>
        </TouchableOpacity>  
        <TouchableOpacity onPress={() => onChangeFilter('Active')}>
          <Text style={[styles.filter, filter === 'Active' ? styles.filterActive : styles.filterInActive]}>Active</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  filterContainer: {
    marginRight: 5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  filter: {
    padding: 8,
    fontSize: 15,
  },
  filterActive: {
    color: '#fff',
    fontWeight: 'bold',
  },
  filterInActive: {
    color: '#eee',
  }
});
