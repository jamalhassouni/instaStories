// @flow
import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Animated,
  Dimensions,
  Platform
} from "react-native";
import Story from "./Story";

const { width } = Dimensions.get("window");

type StoryModel = {
  id: string,
  source: number,
  user: string,
  avatar: number
};

type StoriesProps = {
  stories: StoryModel[]
};

type StoriesState = {
  x: Animated.Value
};
export default class Stories extends Component<StoriesProps, StoriesState> {
  state = {
    x: new Animated.Value(0)
  };

  render() {
    const { stories } = this.props;
    const { x } = this.state;
    return (
      <View style={styles.container}>
        {stories.map(story => (
          <Animated.View style={StyleSheet.absoluteFill} key={story.id}>
            <Story {...{ story }} />
          </Animated.View>
        ))}
        <ScrollView
          ref={this.scroll}
          style={StyleSheet.absoluteFillObject}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          snapToInterval={width}
          contentContainerStyle={{ width: width * stories.length }}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: { x }
                }
              }
            ],
            { useNativeDriver: true }
          )}
          decelerationRate={0.99}
          horizontal
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  }
});
