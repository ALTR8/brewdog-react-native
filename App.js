import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import Beers from './components/Beers';

export default class App extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>BrewDog Beers on React Native</Text>
                <Text>Hello World</Text>
                <Text style={styles.body}>because I sometimes know something and am learning all the things.</Text>
                <Image style={{width: 50, height: 50}} source={{uri: "https://images-na.ssl-images-amazon.com/images/I/91sYtn6tfWL._SL1500_.jpg"}} />
                <Beers />
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: 'magenta',
    fontSize: 20,
  },

  body: {
      fontSize: 10,
  },
});
