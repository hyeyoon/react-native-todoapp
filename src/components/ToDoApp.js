import React, { Component } from 'react';
import { StatusBar, ScrollView, Text, View, StyleSheet, Button, Dimensions } from 'react-native';
import AppTitle from './AppTitle';
import InputBox from './InputBox';
import FilterMenu from './FilterMenu';
import TodoList from './TodoList';

export default class ToDoApp extends Component {
	state = {
		title: 'Todo App',
		filter: 'All',
		key: 2,
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
		const { todoInput, todos, key } = this.state;
		this.setState({
			todos: todos.concat({
				id: key + 1,
				todo: todoInput,
				isCompleted: false,
			}),
			todoInput: '',
			key: key + 1,
		})
	};
	deleteTodo = (id) => {
		const { todos } = this.state;
		const idx = todos.findIndex(todo => todo.id === id);
		const newTodos = todos;
		newTodos.splice(idx, 1);
		this.setState({
			todos: newTodos
		});
	};
	onInputChange = (txt) => {
		this.setState({
			todoInput: txt
		})
	};
	toggleTodo = (id) => {
		const { todos } = this.state;
		const idx = todos.findIndex(todo => todo.id === id);
		const newTodos = todos;
		newTodos[idx].isCompleted = !newTodos[idx].isCompleted;
		this.setState({
			todos: newTodos
		});
	};
	setFilter = (option) => {
		this.setState({
			filter: option
		})
	};
	render() {
		const {
			addTodo,
			onInputChange,
			toggleTodo,
			setFilter,
			deleteTodo
		} = this;
		return (
			<View style={styles.container}>
				<StatusBar barStyle="light-content" />
				<AppTitle appTitle={this.state.title} />
				<InputBox value={this.state.todoInput} onChange={onInputChange} onCreate={addTodo} />
				<FilterMenu onChangeFilter={setFilter} filter={this.state.filter} />
				<TodoList todos={this.state.todos} onToggle={toggleTodo} onDelete={deleteTodo} filter={this.state.filter} />
			</View>	
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#71c1fb',
	}
})