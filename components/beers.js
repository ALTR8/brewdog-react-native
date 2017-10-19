import React, {Component} from 'react';

//----native elements
import { StyleSheet,
    Text,
    View,
    ScrollView,
    Button,
    Modal,
    TouchableHighlight,
} from 'react-native';

//---components
import BeerModal from './BeerModal';
import InfoModal from './InfoModal';

//----API call
import axios from 'axios';

export default class Beers extends Component {
    constructor() {
        super()

        this.state = {
            beers: [],
            modalVisible: false,
            infoVisible: false,
            currentBeer: {
                id: 0,
                name: "",
                abv: 0,
                description: ""
            },
        };
    };

    //----Events

    toggleModal(modalVisible, currentBeer) {
        this.setState({
            modalVisible,
            currentBeer,
        });
    };

    toggleInfo(infoVisible) {
        this.setState({
            infoVisible,
        });
    };

    //----LifeCycle

    componentWillMount(){
        this.makeBeerRequest();
    };

    //----API Call

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
                <Text style={styles.bold}>Press a beer for more information:</Text>
                <Modal animationType={'slide'} transparent={false} visible={this.state.modalVisible} onRequestClose={() => {console.log("modal closed")}}>
                    <Text></Text>
                    <View style={{width: 80, height: 35, marginTop: 20, paddingBottom: 15, backgroundColor: '#F0F0F0'}}>
                        <Button
                            onPress={() => {this.toggleModal(false)}}
                            title="close"
                            color='black'
                        />
                    </View>
                    <BeerModal beer={this.state.currentBeer}/>
                    <Text></Text>
                </Modal>
                <Modal style={styles.modal} animationType={'slide'} transparent={false} visible={this.state.infoVisible} onRequestClose={() => {console.log("modal closed")}}>
                    <View style={{width: 80, height: 35, marginTop: 40, paddingBottom: 5, backgroundColor: '#F0F0F0'}}>
                        <Button
                            onPress={() => {this.toggleInfo(false)}}
                            title="close"
                            color='black'
                        />
                    </View>
                    <InfoModal />
                    <Text></Text>
                </Modal>
                <ScrollView>
                    {beers.map(beer =>
                        <TouchableHighlight onPress={() => {this.toggleModal(true, beer)}} key={beer.id}>
                            <Text style={styles.beers}>{beer.name}</Text>
                        </TouchableHighlight>
                    )}
                </ScrollView>
                <View style={{width: 400, height: 55}}>
                    <Button
                        onPress={() => {this.toggleInfo(true)}}
                        color="#663333"
                        style={styles.beers}
                        title='Learn More'
                    />
                </View>
            </View>
        );
    };
};

//----Style

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#817753',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 0,
    },
    bold: {
        fontWeight: 'bold',
    },
    beers: {
        backgroundColor: '#817753',
        height: 45,
        overflow: 'scroll',
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
    },
});
