import React, {Component} from 'react';

//----native elements
import { StyleSheet,
    Text,
    View,
    ScrollView,
    Button,
    Modal
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
                <Text>Press a beer for more information:</Text>
                    <Modal animationType={'slide'} transparent={false} visible={this.state.modalVisible} onRequestClose={() => {console.log("modal closed")}}>
                        <BeerModal beer={this.state.currentBeer}/>
                        <Button title="close" color="black" onPress={() => {this.toggleModal(false)}} />
                        <Text></Text>
                    </Modal>
                    <Modal style={styles.modal} animationType={'slide'} transparent={false} visible={this.state.infoVisible} onRequestClose={() => {console.log("modal closed")}}>
                        <InfoModal />
                        <Button title="close" color="black" onPress={() => {this.toggleInfo(false)}} />
                        <Text></Text>
                    </Modal>
                <ScrollView style={styles.scroll}>
                    {beers.map(beer => <Button
                        onPress={() => {this.toggleModal(true, beer)}}
                        color="#817753"
                        key={beer.id}
                        style={styles.beers}
                        title={beer.name} />)
                    }
                </ScrollView>
                <Button
                    onPress={() => {this.toggleInfo(true)}}
                    color="#663333"
                    style={styles.beers}
                    title='Learn More About Brewdog'
                />
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
    scroll: {
        backgroundColor: '#817753',
    },
    beers: {
        backgroundColor: '#817753',
        height: 30,
        overflow: 'scroll',
        marginTop: 2,
        fontSize: 10,
        lineHeight: 10,
        borderRadius: 0,
    },
});
