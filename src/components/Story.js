import React, { Component } from 'react';
import { Text, StyleSheet, View ,Image} from 'react-native';

type StoryProps = {

};

export default class Story extends Component <StoryProps>{
    render() {
      const {story:{source}} = this.props;
        return (
          <Image style={styles.image} {...{source}} />
        );
    }
}

const styles = StyleSheet.create({
image:{
    ...StyleSheet.absoluteFillObject,
    width:null,
    height:null
}
});