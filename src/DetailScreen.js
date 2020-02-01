import React, { Component } from 'react';

import { View, Text ,Button,Image} from 'react-native';


export default  class DetailScreen extends Component {

    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>详情</Text>
          {/* <Button
            title="Go to Details... again"
            onPress={() => this.props.navigation.navigate('Details')}
          /> */}
          <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate('Home')}
          />
          <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
      );
    }
  }
  