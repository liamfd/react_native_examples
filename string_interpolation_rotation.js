
class RotateableThing extends Component {
  constructor(props){
    super(props);

    this.state = { rotation_value: new Animated.Value(0) };

    this.rotateIt = this.rotateIt.bind(this);
  }

  rotateIt(){
    const animation = Animated.timing(this.state.rotation_value, {duration: 400, toValue: 100});
    animation.start(() => this.state.rotation_value.setValue(0));
  }

  render(){
    const interpolated_value = this.state.rotation_value.interpolate({
      inputRange: [0, 100],
      outputRange: ['0deg', '360deg']
    });

    const animated_thing_base_styles = {backgroundColor: 'gainsboro', height: 50, width: 50};
    const animated_thing_animated_styles = { transform: [ {rotate: interpolated_value} ] };

    return (
      <View>
        <Animated.View style={[animated_thing_base_styles, animated_thing_animated_styles]} />
        <Text style={{paddingTop: 20}} onPress={this.rotateIt}>Rotate It!</Text>
      </View>
    )
  }
}
