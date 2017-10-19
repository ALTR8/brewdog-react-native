import React, {Component} from 'react';

//----native elements
import { StyleSheet,
    Text,
    View,
    Button,
    Modal,
    Image,
    resizeMode,
    ScrollView,
    Dimensions,
} from 'react-native';

//---components
import Beers from './Beers';

const screenWidth = Dimensions.get('window').width

export default class BeerModal extends Component {
    constructor(props) {
        super(props)
    };

    render() {
        return(
            <View style={styles.modal}>
                <Image
                    style={styles.image}
                    source={ require('../images/brewery.png')}
                    resizeMode="cover"
                />
                <View>
                    <View style={styles.content1}>
                        <Text style={styles.name}>{this.props.beer.name}{'\n'}</Text>
                    </View>
                    <ScrollView style={styles.content}>
                        <Text style={styles.details}>{this.props.beer.abv}% ABV</Text>
                        <Text style={styles.details}>{this.props.beer.ibu} IBUs{"\n"}</Text>
                        <Text style={styles.details}>{this.props.beer.description}{"\n"}</Text>
                        <Text style={styles.details}>Food Pairings: {this.props.beer.food_pairing[0]}, {this.props.beer.food_pairing[1]}</Text>
                    </ScrollView>
                </View>
            </View>
        );
    };
};

//----Style

const styles = StyleSheet.create({
    modal: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        position: 'absolute',
        top: 200,
    },
    content1: {
        zIndex: 5000,
    },
    name: {
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: 20,
        fontSize: 30,
    },
    details: {
        fontSize: 16,
        lineHeight: 20,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,
        backgroundColor: 'white',
        zIndex: 5000,
    },
    content: {
        height: 150,
        width: screenWidth,
    },
});
