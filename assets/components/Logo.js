import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Logo extends React.Component {
	render() {
		return (
		<View style={styles.container}>
			<Icon
				name="camera-enhance"
				size={150}
				color="#fafafa"
			/>
			<Text style={styles.logoText}>Welcome to camera app.</Text>
		</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  logoText: {
      fontSize:18,
      color: '#fafafa'
  }
});