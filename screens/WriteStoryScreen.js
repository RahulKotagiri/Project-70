import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet, KeyboardAvoidingView, Alert } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as firebase from 'firebase'

export default class WriteStoryScreen extends React.Component {
    constructor(){
        super();
    }

    render() {
        return(
            <View style = {styles.container}>
                <TextInput 
                style = {styles.bar}
                placeholder = "Title of the Story">
                </TextInput>
                <TextInput
                style = {styles.bar}
                placeholder = "Author of the Story">
                </TextInput>
                <TextInput
                style = {styles.bar}
                placeholder = "Write Story"
                multiline = {true}>
                </TextInput>
                <TouchableOpacity
                style = {styles.submitButton}>
                    <Text>
                        Submit
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 20
    },
    searchBar:{
      flexDirection:'row',
      height:40,
      width:'auto',
      borderWidth:0.5,
      alignItems:'center',
      backgroundColor:'grey',
  
    },
    bar:{
      borderWidth:2,
      height:30,
      width:300,
      paddingLeft:10,
    },
    submitButton:{
      borderWidth:1,
      height:30,
      width:50,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'green'
    }
  })
