import React, { Component } from 'react';
import { TouchableOpacity, ScrollView, Text, View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

export default class TodoList extends Component {
  render() {
    const { todos, filter, onToggle, onDelete } = this.props;
    return (
      <View style={styles.scrollViewContainer}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          {Object.values(todos).reverse().filter((todo)=> {
            if (filter === 'All') {
              return todo;
            } else if (filter === 'Completed') {
              return todo.isCompleted;
            } else {
              return !todo.isCompleted;
            }
          }).map(todo => {
            return (
              <View key={todo.id} style={styles.list}>
                <TouchableOpacity onPress={() => onToggle(todo.id)} style={styles.listItem}>
                  <Text style={[todo.isCompleted ? styles.checked : styles.unchecked]}>{todo.todo}</Text>
                  <Icon name='trash' type='evilicon' color='#fb7171' onPress={() => onDelete(todo.id)} />
                </TouchableOpacity>
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
    // backgroundColor: '#ecf0f1',
  },
  scrollView: {
    flexDirection: 'column',
  },
  list: {
    marginRight: 10,
    marginLeft: 10,
    marginTop: 5,
    marginBottom: 5,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#ffffff',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  checked: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    color: '#bbb',
    fontStyle: 'italic',
  }
});