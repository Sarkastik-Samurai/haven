import React from 'react';
import { Dimensions, TouchableOpacity, Button, Text, View, StyleSheet, ImageBackground } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';

const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get('window');

const ReadFullEntry = (props) => {
  return (
    <View>
      <ImageBackground
        source={require('../../../../../assets/img/gradient-background-image.png')}
        style={{ width: '100%', height: '100%' }}
      >
        <View style={styles.navRow}>
          <Ionicons
            name="ios-arrow-back"
            size={30}
            color="#ffffff"
            paddingLeft='10'
            onPress={() => { props.changeView('default') }}
          />
          <Entypo
            name="cross"
            size={30}
            color="#ffffff"
            paddingLeft='10'
            onPress={() => { props.changeView('default') }}
          />
        </View>

        <View style={{
          // width: DEVICE_WIDTH - 95,
            marginTop: 7,
            justifyContent: "center",
            // alignItems: "center",
            flexDirection: "row"
          }}>
          {/* <View style={styles.container}>
            {/* <Text style={{ padding: 15 }}> 
            <Text>
            </Text>
          </View> */}
          {/* <Ionicons
            name="md-star-outline"
            size={24}
            color="#ffffff"
          /> */}
          <Text style={{ 
            // textAlign: "center", 
            color: '#ffffff', 
            fontSize: 20,
            }}> {props.entry.title}
          </Text>
          {/* <Ionicons
            name="md-star-outline"
            size={24}
            color="#ffffff"
          /> */}
        </View>

        <Text style={{ padding: 0.5 }}> </Text>
        <View style={{
          backgroundColor: 'lightcyan'
        }}>
          <Text style={{ padding: 0.5 }}>
          </Text>
          <Text style={{ 
              fontSize: 14, 
              textAlign: "center", 
              color: '#0B4E7A'
            }}> {props.entry.description}
          </Text>
          <Text style={{ padding: 0.5 }}>
          </Text>
        </View>
        <Text style={{ padding: 0.5 }}> </Text>
        <Text style={styles.text}> {props.entry.file} </Text>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignItems: 'center',
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    padding: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'rgb(26,201,141)',
    borderRadius: 10,
    borderWidth: 1
  },
  text: {
    color: '#ffffff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 16
  },
  navRow: {
    height: 40,
    width: DEVICE_WIDTH - 15,
    justifyContent: "space-between",
    alignItems: "flex-end",
    flexDirection: "row",
    paddingLeft: 15,
    marginTop: 45,

  }
});

export default ReadFullEntry;