import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    StatusBar,
    Image,
    ActivityIndicator,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default class SplashScreen extends Component {
    render() {    
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#212121"
                    barStyle="light-content"
                />
                <Icon
                    name="camera-enhance"
                    size={150}
                    color="#fafafa"
			    />
                <ActivityIndicator
                    animating={true}
                    color="#a30000"
                    size="large"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#212121',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});