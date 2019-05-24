import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class Form extends Component {
	render() {
		return (
		<View style={styles.container}>
			<TextInput
          style={styles.inputBox}
          placeholder="username or email"
          placeholderTextColor="#ffffff"
          selectionColor="#ffffff"
          returnKeyType="next"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          onSubmitEditing={() => this.passwordInput.focus()}
      />
      <TextInput
          style={styles.inputBox}
          placeholder="password"
          selectionColor="#ffffff"
          returnKeyType="go"
          secureTextEntry={true}
          placeholderTextColor="#ffffff"
          ref={(input) => this.passwordInput = input}
      />

      <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>{this.props.type}</Text>
      </TouchableOpacity>
		</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputBox: {
      width: 300,
      backgroundColor: '#6d6d6d',
      borderRadius: 25,
      paddingHorizontal: 16,
      fontSize: 16,
      color: '#ffffff',
      marginVertical: 10
  },
  button: {
    width: 300,
    backgroundColor: '#1b1b1b',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 11
},
  buttonText: {
      fontSize: 16,
      fontWeight: '500',
      color: '#ffffff',
      textAlign: 'center'
  }
});