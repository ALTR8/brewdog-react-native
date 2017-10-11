'use strict';

import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { List, ListItem } from "react-native-elements";
let RCTLog = require('RCTLog');
import axios from 'axios';

export default class Beers extends Component {
    constructor() {
        super()

        this.state = {
            beers: []
        };
    };

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

        for (let i=0; i< beers.length; i++) {
            let name = beers[i].name
            let key = beers[i].id
            let abv = beers[i].abv
            beer.push(<Text style={styles.beers}>{name}</Text>)
            // beer.push(<Text>{key}. {name}</Text>)
            // beer.push(<Text>{abv}% alcohol by volume</Text>)

        }
        return(
            <View style={styles.container}>
                <Text>Beer List Rendering From Beers Component:</Text>
                <ScrollView>
                {beer}
                </ScrollView>
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
    color: 'magenta',
    fontSize: 10,
    lineHeight: 10,
  },
});
