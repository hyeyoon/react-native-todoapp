import React, { Component } from 'react';
import { ScrollView, Text, View, StyleSheet, Button, Dimensions } from 'react-native';
import AppTitle from './AppTitle';
import InputBox from './InputBox';
import FilterMenu from './FilterMenu';
import TodoList from './TodoList';

export default class ToDoApp extends Component {
	state = {
		title: 'Todo App',
		filter: 'All',
		todos: [
			{
				id: 0,
				todo: 'Study React Native',
				isCompleted: false,
			},
			{
				id: 1,
				todo: 'Meet Friend',
				isCompleted: true,
			},
			{
				id: 2,
				todo: 'Do Somethind',
				isCompleted: false,
			},
		],
		todoInput: '',
	};
	addTodo = () => {
		const { todoInput, todos } = this.state;
		this.setState({
			todos: todos.concat({
				id: todos.length,
				todo: todoInput,
				isCompleted: false,
			}),
			todoInput: '',
		})
	};
	onInputChange = (txt) => {
		this.setState({
			todoInput: txt
		})
	};
	render() {
		const {
			addTodo,
			onInputChange
		} = this;
		return (
			<View style={styles.container}>
				<AppTitle appTitle={this.state.title} />
				<InputBox value={this.state.todoInput} onChange={onInputChange} onCreate={addTodo} />
				<FilterMenu />
				<TodoList todos={this.state.todos} />
			</View>	
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	}
})