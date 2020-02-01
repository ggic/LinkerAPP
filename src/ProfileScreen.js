import React, { Component } from 'react';

import { View, Text, Button, Image, StyleSheet } from 'react-native';


export default class DetailScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.head}>
          <View style={styles.profileBtn} >
            <Image style={styles.profileImg} source={require('../assets/profile.png')} />
          </View>
          <View style={styles.profileName}>
            <Text style={{ fontSize: 18 }}>韭菜的泪花</Text>
            <Text style={{ fontSize: 18, marginLeft: 15 }}>25岁</Text>
          </View>
        </View>

        <View style={styles.body}>
          <View style={styles.profileRow} >
            <Text style={styles.profileRowText}>认证中心</Text>
          </View>
          <View style={styles.profileRow} >
            <Text style={styles.profileRowText}>设置</Text>
          </View>
          <View style={styles.profileRow} >
            <Text style={styles.profileRowText}
              onPress={() => alert('确认要退出吗?')
            }>退出</Text>
          </View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "black",
    justifyContent: "flex-start"
  },
  head: {
    alignItems: 'center',
    backgroundColor: "white",
    height: 200,
  },
  body: {
    marginTop: 5,
    backgroundColor: "white",
    height: 500
  },

  profileBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    height: 120,
    width: 120,
    borderRadius: 100,
    backgroundColor: 'rgb(195, 125, 198)',
    overflow: "hidden"
  },
  profileImg: {
    height: 140,
    width: 140,
  },
  profileName: {
    flexDirection: 'row',
    margin: 15,
  },
  //----
  profileRow: {
    borderBottomWidth: 1,
    borderBottomColor: '#900',
    flexDirection: 'row',
    margin: 15,
    padding:15,
  
  },
  profileRowText:{
    marginLeft:20,
    fontSize:18,
  }

});