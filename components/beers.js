'use strict';

import React, {Component} from 'react';

//----native elements
import { StyleSheet, Text, View, ScrollView, Button, Alert } from 'react-native';
import { List, ListItem } from "react-native-elements";

//----components
import Beer from './Beer';

//----??
let RCTLog = require('RCTLog');

//----API call
import axios from 'axios';

export default class Beers extends Component {
    constructor() {
        super()

        this.state = {
            beers: [],
        };
    };

    onPress() {
        Alert.alert('Did a thing')
    }

    componentWillMount(){
        this.makeBeerRequest();
    };

    makeBeerRequest = () => {
        axios
            .get('https://api.punkapi.com/v2/beers?abv_gt=2&per_page=80')
            .then(({data}) => {
                this.setState({ beers: data })
        });
    };

    render() {
        const { beers } = this.state;
        let beer = [];
        let name;
        let abv;
        let key;
        let description;

        for (let i=0; i< beers.length; i++) {
            name = beers[i].name
            key = beers[i].id
            abv = beers[i].abv
            description = beers[i].description
            beer.push(<Button
                key={key}
                style={styles.beers}
                onPress={this.onPress}
                title={name}
            />)
        };

        // let beerIndex = beer.indexOf()
        return(
            <View style={styles.container}>
                <Text>Beer List Rendering From Beers Component:</Text>
                <ScrollView>
                    {beer}
                </ScrollView>
                <Beer beers={beers} name={name} abv={abv} description={description} key={key}/>
            </View>

        );
    };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  beers: {
    paddingTop: 8,
    height: 30,
    overflow: 'scroll',
    marginTop: 2,
    color: 'purple',
    fontSize: 10,
    lineHeight: 10,
  },
});
