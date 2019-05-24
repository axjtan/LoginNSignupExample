import React, {Component} from 'react';
import {
	StyleSheet,
	View,
	Text,
	StatusBar,
	ImageBackground,
} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

export default class LoginScreen extends Component {
	static navigationOptions = {
		header: null,
	}
	render() {
		return (
			<View>
				<ImageBackground source={require('../images/Background.jpg')} style={{width: '100%', height: '100%'}}>
					<StatusBar
						backgroundColor="#1b1b1b"
						barStyle="light-content"
					/>
					<Logo />
					<Form type="Login"/>
					<View style={styles.signupTextCont}>
						<Text style={styles.signupText}>Don't have an account yet? </Text>
						<Text style={styles.signupButton} onPress={() => this.props.navigation.navigate('SignupScreen')}>Signup</Text>
					</View>
				</ImageBackground>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	signupTextCont: {
		flexGrow: 1,
		alignItems: 'flex-end',
		justifyContent: 'center',
		paddingVertical: 16,
		flexDirection: 'row'
	},
	signupText: {
		color: '#bdbdbd',
		fontSize: 16,

	},
	signupButton: {
		color: '#ffffff',
		fontSize: 16,
		fontWeight: '500',
	}
});