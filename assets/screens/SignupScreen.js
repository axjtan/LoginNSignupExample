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

export default class SignupScreen extends Component {
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
					<Form type="Signup"/>
					<View style={styles.signinTextCont}>
						<Text style={styles.signinText}>Already have an account? </Text>
						<Text style={styles.signinButton} onPress={() => this.props.navigation.navigate('LoginScreen')}> Sign in</Text>
					</View>
				</ImageBackground>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	signinTextCont: {
		flexGrow: 1,
		alignItems: 'flex-end',
		justifyContent: 'center',
		paddingVertical: 16,
		flexDirection: 'row'
	},
	signinText: {
		color: '#bdbdbd',
		fontSize: 16,

	},
	signinButton: {
		color: '#ffffff',
		fontSize: 16,
		fontWeight: '500',
	}
});