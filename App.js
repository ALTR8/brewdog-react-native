import React, {Component} from 'react';

//----native elements
import { StyleSheet, View, Image, resizeMode } from 'react-native';

//----components
import Beers from './components/Beers';


export default class App extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image} resizeMode="center" source={ require('./images/logo.png')} />
                <Beers />
           </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: '#817753',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  image: {
    width: 100,
    height: 200,
},
  body: {
      fontSize: 15,
  },
});
