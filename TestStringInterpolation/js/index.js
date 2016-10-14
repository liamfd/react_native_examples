import React, { Component } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';

class RotateableThing extends Component {
  constructor(props){
    super(props);

    this.state = { rotation_value: new Animated.Value(0) };

    this.rotateIt = this.rotateIt.bind(this);
  }

  rotateIt(){
    const animation = Animated.timing(this.state.rotation_value, {duration: 2000, toValue: 360});
    animation.start(() => this.state.rotation_value.setValue(0));
  }

  render(){
    const {rotation_value: value} = this.state;
    const interpolated_value = value.interpolate({
      inputRange: [0, 360],
      outputRange: ['0deg', '360deg']
    });

    const animated_thing_base_styles = {backgroundColor: 'gainsboro', height: 50, width: 50};
    const animated_thing_animated_styles = { transform: [{rotate: interpolated_value}] };

    return (
      <View style={styles.container}>
        <Animated.View style={[animated_thing_base_styles, animated_thing_animated_styles]} />
        <Text style={{paddingTop: 20}} onPress={this.rotateIt}>Rotate It!</Text>
      </View>
    )
  }
}

export default class App extends Component {
  render(){
    return <RotateableThing />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
