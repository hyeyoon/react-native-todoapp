import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class AppTitle extends Component {
	render() {
		return (
			<View style={styles.titleContainer}>
				<Text style={styles.title}>{this.props.appTitle}</Text>
			</View>	
		)
	}
}

const styles = StyleSheet.create({
	titleContainer: {
		marginTop: 20,
		paddingTop: 10,
		paddingBottom: 10,
		backgroundColor: '#71c1fb'
	},
	title: {
		color: '#fff',
		textAlign: 'center',
		fontSize: 20,
	}
})