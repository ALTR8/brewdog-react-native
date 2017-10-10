import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Building my fist native app!</Text>
        <Text>Ahh this is so cool!</Text>
        <Text>Hello World</Text>
        <Text style={styles.body}>because I sometimes know something and am learning all the things.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
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
  }
});
