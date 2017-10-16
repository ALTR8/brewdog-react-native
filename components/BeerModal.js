import React, {Component} from 'react';

//----native elements
import { StyleSheet, Text, View, Button, Modal, Image, resizeMode } from 'react-native';

//---components
import Beers from './Beers';

export default class BeerModal extends Component {
    constructor(props) {
        super(props)
    };

    render() {
        return(
                <View style={styles.modal}>

                <View >
                    <Text>{this.props.beer.name}</Text>
                    <View style={styles.content}>
                        <Text>{this.props.beer.abv}% ABV</Text>
                        <Text>{this.props.beer.ibu} IBUs</Text>
                        <Text>{this.props.beer.description}</Text>
                        <Text>Food Pairings: {this.props.beer.food_pairing[0]}, {this.props.beer.food_pairing[1]}</Text>
                    </View>
                </View>
                </View>

        );
    };
};

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'visible',
    },
        content: {
        paddingLeft: 10,
        paddingRight: 10,
    },
        image: {
        width: 200,
        height: 400,
    },
});
