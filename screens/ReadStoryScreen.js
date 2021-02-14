import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class ReadStoryScreen extends React.Component {
    render(){
        return(
            <View style = {styles.container}>
                <Text>
                    Read Story
                </Text>
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
