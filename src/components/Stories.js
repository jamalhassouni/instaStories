// @flow
import React, { Component } from "react";
import { StyleSheet, View, Animated, Dimensions, Platform } from "react-native";
import Story from "./Story";

const { width } = Dimensions.get("window");
const ratio = Platform.OS === "ios" ? 2 : 1.1;
const perspective = 400;
const angle = Math.atan(perspective / (width / 2));

export default class Stories extends Component {
  state = {
    x: new Animated.Value(0)
  };

  getStyle = index => {
    const { x } = this.state;
    const offset = index * width;
    const inputRange = [offset - width, offset + width];

    const translateX = x.interpolate({
      inputRange,
      outputRange: [width / ratio, -width / ratio],
      extrapolate: "clamp"
    });

    const rotateY = x.interpolate({
      inputRange,
      outputRange: [`${angle}rad`, `-${angle}rad`],
      extrapolate: "clamp"
    });

    const translateX1 = x.interpolate({
      inputRange,
      outputRange: [width / 2, -width / 2],
      extrapolate: "clamp"
    });

    const extra = width / ratio / Math.cos(angle / 2) - width / ratio;
    const translateX2 = x.interpolate({
      inputRange,
      outputRange: [-extra, extra],
      extrapolate: "clamp"
    });

    return {
      ...StyleSheet.absoluteFillObject,
      transform: [
        { perspective },
        { translateX },
        { rotateY },
        { translateX: translateX1 },
        { translateX: translateX2 }
      ]
    };
  };

  getMaskStyle(index) {
    const { x } = this.state;
    const offset = index * width;
    const inputRange = [offset - width, offset, offset + width];
    const opacity = x.interpolate({
      inputRange,
      outputRange: [0.75, 0, 0.75],
      extrapolate: "clamp"
    });
    return {
      backgroundColor: "black",
      ...StyleSheet.absoluteFillObject,
      opacity
    };
  }

  render() {
    const { stories } = this.props;
    const { x } = this.state;
    return (
      <View style={styles.container}>
        {stories.map((story, index) => (
          <Animated.View style={this.getStyle(index)} key={story.id}>
            <Story {...{ story }} />
            <Animated.View style={this.getMaskStyle(index)} />
          </Animated.View>
        ))}
        <Animated.ScrollView
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
