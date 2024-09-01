import React from "react";
import {Text, StyleSheet} from 'react-native';

function itemStock(props){
    if(props.isInStock==false){
        return(
            <Text style={styles.stock_text}>STOKTA YOK</Text>
        )
    }
}

const styles = StyleSheet.create({
    stock_text: {
      color: 'red',
      //padding: 10,
      fontWeight: 'bold'
    },
  })
  
export default itemStock;