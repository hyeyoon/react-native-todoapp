import React, { Component } from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';

export default class TodoList extends Component {
  render() {
    return (
      <View style={styles.scrollViewContainer}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          {Object.values(this.props.todos).reverse().map(todo => {
            return (
              <View key={todo.id} style={styles.list}>
                <Text>{todo.todo}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#ecf0f1',
  },
  scrollView: {
    flexDirection: 'column',
  },
  list: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#cccccc',
  }
});