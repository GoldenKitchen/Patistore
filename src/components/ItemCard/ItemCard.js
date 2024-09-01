import React from "react";
import {View, Text, Image} from 'react-native';
import styles from './ItemCard.style';
import ItemStock from "../../itemStock";
//import items_data from './items_data.json';


const ItemCard = ({product}) => {
    return(
        <View style={styles.image_container}>
            <Image resizeMode="contain"style={styles.image} source={{uri: product.imgURL}}/>
            
                <View style={styles.text}>
                    <Text style={styles.title}>{product.title}</Text>
                    <View style={styles.text2}>
                <Text>{product.price}</Text>
                <ItemStock isInStock={product.inStock}/>
                </View>
                </View>
               
     
        </View>
    );
};

export default ItemCard;