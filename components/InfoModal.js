import React, {Component} from 'react';

//----native elements
import { StyleSheet, Text, View, Button, Modal, Image, resizeMode, ScrollView, Linking } from 'react-native';

//----libraries
import Hyperlink from 'react-native-hyperlink'

export default class InfoModal extends Component {
    render() {
        return(
                <View style={styles.modal}>
                    <Image
                        style={styles.image}
                        source={ require('../images/ohiobrewery.png')}
                        resizeMode="contain"
                    />
                    <View style={styles.content1}>
                        <Text style={styles.name}>Useful Links</Text>
                    </View>
                    <ScrollView style={styles.content}>
                        <Hyperlink
                            linkStyle={ { color: 'blue' } }
                            linkText={ url => url === 'https://www.brewdog.com/brewery/brewery' ? 'Ellon, Aberdeenshire' : url }>

                            <Text>Brewery HQ</Text>
                            <Text style={styles.link}>
                                https://www.brewdog.com/brewery/brewery
                            </Text>
                        </Hyperlink>
                        <Hyperlink
                            linkStyle={ { color: 'blue' } }
                            linkText={ url => url === 'https://www.brewdog.com/brewery/usa-brewery' ? 'Columbus, Ohio' : url }>
                            <Text>{"\n"}US Brewery</Text>
                            <Text style={styles.link}>
                                https://www.brewdog.com/brewery/usa-brewery
                            </Text>
                        </Hyperlink>
                        <Hyperlink
                            linkStyle={ { color: 'blue' } }
                            linkText={ url => url === 'https://www.brewdog.com/welcome' ? 'Website Home' : url }>
                            <Text>{"\n"}Web Home</Text>
                            <Text style={styles.link}>
                                https://www.brewdog.com/welcome
                            </Text>
                        </Hyperlink>
                    </ScrollView>
                </View>

        );
    };
};

const styles = StyleSheet.create({
    modal: {
        backgroundColor: '#BA4A73',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    link: {
        fontSize: 15,
    },
    image: {
        position: 'absolute',
        top: 300,
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