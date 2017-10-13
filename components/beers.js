import React, {Component} from 'react';

//----native elements
import { StyleSheet, Text, View, ScrollView, Button, Alert, Modal } from 'react-native';
import { List, ListItem } from "react-native-elements";

//----??
let RCTLog = require('RCTLog');

//---components
import Beer from './Beer';
import BeerModal from './BeerModal';

//----API call
import axios from 'axios';

export default class Beers extends Component {
    constructor() {
        super()

        this.state = {
            beers: [],
            modalVisible: false,
            currentBeer: {
                id: 0,
                name: "",
                abv: 0,
                description: ""
            },
        };
    };

    toggleModal(modalVisible, currentBeer) {
        this.setState({
            modalVisible,
            currentBeer
        });
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

        return(
            <View style={styles.container}>
                <Text>Beer List Rendering From Beers Component:</Text>
                    <Modal animationType={'slide'} transparent={false} visible={this.state.modalVisible} onRequestClose={() => {console.log("modal closed")}}>
                        <BeerModal beer={this.state.currentBeer}/>
                        <Button title="close" onPress={() => {this.toggleModal(false)}} />
                    </Modal>
                <ScrollView>
                    {beers.map(beer => <Button
                        onPress={() => {this.toggleModal(true, beer)}}
                        key={beer.id}
                        style={styles.beers}
                        title={beer.name} />)
                    }
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
