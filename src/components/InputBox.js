import React, { Component } from 'react';
import { TextInput, Text, View, StyleSheet, Button } from 'react-native';

export default class InputBox extends Component {
  render() {
    const { value, onCreate, onChange } = this.props;
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={value}
          placeholder="Add Something..."
          autoCorrect={false}
          onSubmitEditing={onCreate}
          onChangeText={txt => onChange(txt)}
        />
        <Button
          onPress={onCreate}
          style={styles.button}
          title="Add"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ecf0f1',
  },
  input: {
    marginLeft: 10,
    fontSize: 20,
    color: 'black',
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
    flexGrow: 1,
  },
  button: {
    color: "#ffffff",
    backgroundColor: "#6374d0",
  }
});
