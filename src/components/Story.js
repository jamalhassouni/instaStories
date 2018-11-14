import React, { Component } from 'react';
import { View, StyleSheet, SafeAreaView ,Image ,Platform,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import Avatar from './Avatar'

export default class Story extends Component {
    render() {
    const { story: { source, user, avatar } } = this.props;
        return (
         <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Image style={styles.image} {...{ source }} />
          <Avatar {...{ user, avatar }} />
        </View>
        <View style={styles.footer}>
          <Icon name="camera" color="white" size={28} />
          <TextInput style={styles.input} />
          <Icon name="message-circle" color="white" size={28} />
        </View>
      </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      ...StyleSheet.absoluteFillObject,
      width: null,
      height: null,
      borderRadius: 5,
    },
    footer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 16,
    },
    input: {
      borderWidth: 2,
      borderColor: 'white',
      height: 28,
      width: 250,
      borderRadius: Platform.OS === 'android' ? 0 : 10,
    },
  });