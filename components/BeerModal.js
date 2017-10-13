import React, {Component} from 'react';

//----native elements
import { StyleSheet, Text, View, ScrollView, Button, Alert, Modal } from 'react-native';

//---components
import Beers from './Beers';

export default class BeerModal extends Component {
    constructor(props) {
        super(props)
    };

    render() {
        return(

                <View>
                    <Text>{this.props.beer.name}</Text>
                </View>

        );
    };
};
