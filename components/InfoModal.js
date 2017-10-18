import React, {Component} from 'react';

//----native elements
import {
    StyleSheet,
    Text,
    View,
    Modal,
    Image,
    resizeMode,
    ScrollView,
    Linking,
    TouchableHighlight
} from 'react-native';

links = [
    'https://www.brewdog.com/welcome',
    'https://www.brewdog.com/brewery/brewery',
    'https://www.brewdog.com/brewery/usa-brewery'
]

export default class InfoModal extends Component {

    handlePress = (i) => {
        Linking.openURL(links[i]);
    };

    render() {
        return(
            <View style={styles.modal}>
                <Image
                    style={styles.image}
                    source={ require('../images/beers.png')}
                    resizeMode="center"
                />
                <Text>{'\n'}</Text>
                <Image
                    style={styles.image}
                    source={ require('../images/ohiobrewery.png')}
                    resizeMode="center"
                />
                <View style={styles.links}>
                <Text style={styles.name}>Useful Links</Text>
                    <TouchableHighlight onPress={() => {this.handlePress(2)}}>
                        <Text style={styles.link}>{'\n'}Brewery HQ</Text>
                    </TouchableHighlight>
                    <Text>Ellon, Aberdeenshire{'\n'}</Text>
                    <TouchableHighlight onPress={() => {this.handlePress(3)}}>
                        <Text style={styles.link}>US Brewery</Text>
                </TouchableHighlight>
                    <Text >Columbus, OH{'\n'}</Text>
                    <TouchableHighlight onPress={() => {this.handlePress(1)}}>
                        <Text style={styles.link}>Brewdog.com</Text>
                    </TouchableHighlight>
                    <Text>Web Home</Text>
                </View>
            </View>
        );
    };
};

//----Style

const styles = StyleSheet.create({
    modal: {
        backgroundColor: '#BA4A73',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    links: {
        position: 'absolute',
        top: 20,
    },
    link: {
        fontSize: 15,
        color: 'blue',
    },
    image: {
        position: 'absolute',
        top: 250,
    },
    content1: {
        padding: 15,
        zIndex: 5000,
    },
    name: {
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: 60,
        fontSize: 30,
    },
    content: {
        paddingTop: 20,
    },
});
