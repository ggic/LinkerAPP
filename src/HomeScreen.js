
import React, { Component } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity
} from 'react-native';


class ImgChange extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("props.imgUrl:" + this.props.imgUrl);
    if (!this.props.imgUrl) {
      return <Text>Loading</Text>;
    }
    return (
      <View style={styles.body}>
        <Text>{this.props.content}</Text>
        <Image source={{ uri: this.props.imgUrl }} style={styles.changeImg} />
      </View>
    );
  }
}

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgNewUrl: null,
      newContent: null
    };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: () => (
        <Button
          title="⭕️"
          onPress={() => navigation.navigate('Scroll')}
        />
      ),
      headerRight: () => (
        <Button
          title="❎"
          onPress={() => alert('This is a button!')}
        >fdasf</Button>
      ),
    }
  };
  async _goNext() {
    const response = await fetch('https://facebook.github.io/react-native/movies.json')
    const myJson = response.json();
    this.setState({
      newContent: JSON.stringify(myJson) + new Date().getMilliseconds().toString(),
      imgNewUrl: 'http://pic.sc.chinaz.com/files/pic/pic9/201712/zzpic8696.jpg?' + new Date().getMilliseconds().toString()
    });
  }


  render() {
    return (

      <View style={styles.whole}>

        <View style={styles.body}>
          <ImgChange imgUrl={this.state.imgNewUrl} content={this.state.newContent} />
        </View>
        <View style={styles.floatDiv}  >
          <TouchableOpacity activeOpacity={0.5} onPress={() => { this._goNext() }} >
            <Image
              source={require('../assets/star.png')}
              style={styles.floatImg}
            />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.5}>
            <Image
              source={require('../assets/wrong.png')}
              style={styles.floatImg}
            />
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  whole: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  body: {
    flex: 10,
    color: 'red',
    marginTop: 10,
  },
  changeImg: {
    width: '100%',
    height: "100%",
    resizeMode: "cover"
  },
  floatDiv: {
    position: "absolute",
    right: 50,
    bottom: 40,
    backgroundColor: 'blue',
  },
  floatImg: {
    width: 60,
    marginTop: 100,
    resizeMode: "contain"
  },
  buttonLeft: {
    margin: 40,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default HomeScreen;