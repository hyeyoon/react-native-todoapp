import React, { Component } from 'react';
import { ScrollView, Text, View, StyleSheet, Button, Dimensions } from 'react-native';

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
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>{this.state.title}</Text>
			</View>	
		)
	}
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 20,
	},
	title: {
		color: '#6374d0',
		textAlign: 'center',
		fontSize: 20,
	}
})