import React, { Component } from 'react';

import {
    StyleSheet,
    ScrollView,
    Image,
    View,
    Text,
    StatusBar,
    Button,
    Dimensions,
    Animated,
    PanResponder,

} from 'react-native';


const Foods = [
    { id: "1", uri: require('../assets/ditie.jpg') },
    { id: "2", uri: require('../assets/123.jpg') },
    { id: "3", uri: require('../assets/star.png') },
    { id: "4", uri: require('../assets/wrong.png') },
    { id: "5", uri: require('../assets/heart.png') },
]

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width



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
            <Image source={{ uri: this.props.imgUrl }} style={styles.changeImg} />
        );
    }
}

export default class ScrollScreen extends React.Component {
    constructor(props) {
        super(props);
        this.position = new Animated.ValueXY();
        this.rotate = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: ['-10deg', '0deg', '10deg'],
            extrapolate: 'clamp'
        })
        this.rotateAndTranslate = {
            transform: [{
                rotate: this.rotate
            },
            ...this.position.getTranslateTransform()
            ]
        }

        this.likeOpacity = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: [0, 0, 1],
            extrapolate: 'clamp'
        })
        this.nopeOpacity = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: [1, 0, 0],
            extrapolate: 'clamp'
        })
        this.nextCardOpacity = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: [1, 0, 1],
            extrapolate: 'clamp'
        })
        this.nextCardScale = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: [1, 0.8, 1],
            extrapolate: 'clamp'
        })
        this.state = {
            currentIndex: 0,
            newContent: null,
            imgNewUrl: null,
        };
    }



    UNSAFE_componentWillMount() {
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onPanResponderMove: (evt, gestureState) => {
                this.position.setValue({ x: gestureState.dx, y: gestureState.dy });
            },
            onPanResponderRelease: (evt, gestureState) => {
            }
        })
    }
    // 监听滚动
    async _goNext() {
        const response = await fetch('https://facebook.github.io/react-native/movies.json')
        const myJson = response.json();
        this.setState({
            newContent: JSON.stringify(myJson) + new Date().getMilliseconds().toString(),
            imgNewUrl: 'http://pic1.sc.chinaz.com/files/pic/pic9/201912/zzpic21916.jpg?' + new Date().getMilliseconds().toString()
        });
    }
    render() {
        return Foods.map((item, i) => {
            if (i < this.state.currentIndex) {
                return (null);
            } else if (i == this.state.currentIndex) {
                return (
                    <Animated.View
                        {...this._panResponder.panHandlers}
                        key={item.id}
                        style={[
                            this.rotateAndTranslate,
                            {
                                height: SCREEN_HEIGHT - 120,
                                width: SCREEN_WIDTH,
                                padding: 10,
                                position: "absolute"
                            }
                        ]}
                    >
                       
                        <Animated.View
                            style={{
                                opacity: this.likeOpacity,
                                transform: [{ rotate: "-30deg" }],
                                position: "absolute",
                                top: 50,
                                left: 40,
                                zIndex: 1000
                            }}
                        >
                            <Text
                                style={{
                                    borderWidth: 1,
                                    borderColor: "green",
                                    color: "green",
                                    fontSize: 32,
                                    fontWeight: "800",
                                    padding: 10
                                }}
                            >
                                LIKE
    </Text>
                        </Animated.View>
                        <Animated.View
                            style={{
                                opacity: this.nopeOpacity,
                                transform: [{ rotate: "30deg" }],
                                position: "absolute",
                                top: 50,
                                right: 40,
                                zIndex: 1000
                            }}
                        >
                            <Text
                                style={{
                                    borderWidth: 1,
                                    borderColor: "red",
                                    color: "red",
                                    fontSize: 32,
                                    fontWeight: "800",
                                    padding: 10
                                }}
                            >
                                NOPE
    </Text>
                        </Animated.View>
                        <Image
                            style={{
                                flex: 1,
                                height: null,
                                width: null,
                                resizeMode: "cover",
                                borderRadius: 20
                            }}
                            source={item.uri}
                        />
                    </Animated.View>
                );
            }
        }).reverse();
    }
}

var styles = StyleSheet.create({
    /*
    父類別flex:1充滿整個空間  
    justifyContent: 'center' 佈局對齊方式:中間
    alignItems: 'center' 項目對齊方式:中間
  */
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    scrollViewStyle: {
        // 背景色
        backgroundColor: 'red',
    },

    itemStyle: {
        // 尺寸
        width: 600,
        height: "100%"
    },
    changeImg: {
        width: '100%',
        height: "100%",
        resizeMode: "cover"
    },
});