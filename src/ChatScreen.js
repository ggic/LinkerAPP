import React, { Component } from 'react';

import { View, Text, Button, Image,StyleSheet } from 'react-native';
import { black } from 'colorette';


export default class ChateScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.head}>
        </View>
        <View style={styles.spitRow}>
        </View>
        <View style={styles.body}>
          <View style={styles.msgRow} >
            <View>
              <Image style={styles.profileImg} source={require('../assets/profile.png')} />
            </View>
            <View>
            <View style={{marginTop:5,marginLeft:10}}>
              <Text style={styles.msgName} >张三</Text>
            </View>
            <View style={{marginTop:5,marginLeft:10,color:'gray'}}>
              <Text style={styles.msgContent} >fjadksfjaljfajslkfaslj</Text>
            </View>
            </View>
          </View>
          <View style={styles.msgRow} >
            <View>
              <Image style={styles.profileImg} source={require('../assets/profile.png')} />
            </View>
            <View>
            <View style={{marginTop:5,marginLeft:15}}>
              <Text style={styles.msgName} >张三</Text>
            </View>
            <View style={{marginTop:5,marginLeft:15,color:'gray'}}>
              <Text style={styles.msgContent} >fjadksfjaljfajslkfaslj</Text>
            </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "white",
    justifyContent: "flex-start"
  },
  head: {
    alignItems: "flex-start",
    backgroundColor: "gray",
    height: 10,
  },

  profileImg: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: 'white',
    overflow: "hidden"
  },
  profileImg: {
    height: 50,
    width: 50,
  },
  spitRow: {
    flexDirection: 'row',
    backgroundColor:"red",
    borderBottomWidth: 1,
    borderBottomColor: '#900',
    height:15
  },
  msgRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#900',
    margin: 5,
    padding: 15
  },
  msgName: {
    fontSize: 18,
    color:'black'
  },
  msgContent: {
    fontSize: 12,
    color:'gray'
  }
})