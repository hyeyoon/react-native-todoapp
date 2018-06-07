import React, { Component } from 'react';
import { TouchableOpacity, TextInput, Text, View, StyleSheet, Button } from 'react-native';

export default class InputBox extends Component {
  render() {
    const { value, onCreate, onChange } = this.props;
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={value}
          placeholder="Add Something..."
          placeholderTextColor={'#ffffff'}
          autoCorrect={false}
          onSubmitEditing={onCreate}
          onChangeText={txt => onChange(txt)}
        />
        <TouchableOpacity onPress={onCreate} style={styles.button}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: '#ecf0f1',
  },
  input: {
    marginLeft: 10,
    fontSize: 20,
    color: '#fff',
    borderBottomWidth: 2,
    borderBottomColor: '#fff',
    flexGrow: 1,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  }
});
