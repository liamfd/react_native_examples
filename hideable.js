import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Platform
} from 'react-native';

const hideable_styles = StyleSheet.create({
  android_hidden: {
    height: 0,
    borderWidth: 0,
    paddingTop: 0,
    paddingBottom: 0,
    marginTop: 0,
    marginBottom: 0
  }
});
class Hideable extends Component {
  render(){
    const {hide, children, style = {}, ...rest_props} = this.props;

    // on ios, best way to hide is to return null
    if (hide && Platform.OS === 'ios') return null;

    // otherwise, if android, going to add in the special android hidden styles
    const conditional_layout = hide ? hideable_styles.android_hidden : {};
    const styles = [style, conditional_layout];

    return (
      <View {...rest_props} style={styles}>
        {children}
      </View>
    );
  }
}

const simpleTestHideable = ({hide = true}) => {
  return (
    <Hideable hide={hide} style={{zIndex: 1, backgroundColor: 'red', height: 100}} >
      <Text>{hide ? 'You should not see this' : 'You should see this' }</Text>
    </Hideable>
  );
}

class TestHideable extends Component {
  constructor(props){
    super(props);

    this.state = { hide_content: false };

    this.toggleContent = this.toggleContent.bind(this);
  }

  toggleContent(){
    this.setState({hide_content: !this.state.hide_content});
  }

  render(){
    const { hide_content } = this.state;

    return (
      <View style={{paddingTop: 20}}>
        <Hideable
          hide={hide_content}
          anotherProp="foo"
          style={{
            padding: 10,
            height: 100,
            borderWidth: 0.5,
            borderColor: '#d6d7da',
            marginTop: 100,
            marginBottom: 100,
            backgroundColor: 'red',
            zIndex: 2
          }} >
            <Text>I am showing!</Text>
        </Hideable>
        <Text onPress={this.toggleContent}>{hide_content ? 'SHOW!' : 'HIDE!'}</Text>
      </View>
    )
  }
}

export default TestHideable;
