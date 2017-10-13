{<script src="http://localhost:8097"></script>}
import React, {Component} from 'react';

//----native elements
import { StyleSheet, Text, View, ScrollView, TouchableHighlight, Button, Alert, Modal} from 'react-native';
import { List, ListItem } from "react-native-elements";

//----components
import Beers from './Beers';

export default class Beer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            beer: {},
        };
        this.activeBeer = this.activeBeer.bind(this)
    };

    activeBeer(currentBeer) {
        this.setState({
            beer: currentBeer
        });
    };

    render() {
        const {beers, name, abv, description} = this.props;

        return(
            <Beers name={name} abv={abv} description={description}/>
        );
    };
};
