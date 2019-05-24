/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import { createStackNavigator, createAppContainer } from 'react-navigation';

import SplashScreen from './assets/screens/SplashScreen';
import LoginScreen from './assets/screens/LoginScreen';
import SignupScreen from './assets/screens/SignupScreen';

const RootStack = createStackNavigator(
	{
		LoginScreen: LoginScreen,
		SignupScreen: SignupScreen
	},
	{
		initialRouteName: 'LoginScreen'
	}
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = { isLoading: true }
	}

	performTimeConsumingTask = async() => {
		return new Promise((resolve) =>
			setTimeout(
				() => { resolve( 'result' )},
				2000
			)
		);
	}

	async componentDidMount() {
		// Preload data from an external API
		// Preload data using AsyncStorage
		const data = await this.performTimeConsumingTask();

		if (data !== null) {
			this.setState({ isLoading: false });
		}
	}

	render() {
		if (this.state.isLoading) {
			return <SplashScreen />
		}

		return (
			<AppContainer />
		);
	}
}