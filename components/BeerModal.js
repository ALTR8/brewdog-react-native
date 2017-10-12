import React, { Component } from 'react';

//----native elements
import { Modal, Text, TouchableHighlight, View } from 'react-native';

export default class BeerModal extends Component {

    render() {
        console.log(this);
        return(
            <View>
                 <Text>Will be a modal</Text>
            </View>
        )
    };
};
