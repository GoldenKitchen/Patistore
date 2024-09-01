import React from "react";
//import styles from './components/ItemCard/ItemCard.style';
import { View, Text, SafeAreaView, FlatList, StyleSheet } from "react-native";
import items_data from './items_data.json';
import ItemCard from "./components/ItemCard";


function App(){
    return(
        <SafeAreaView style={{flex:1}} >
          
          <View style={{flex:1}}>
          
          <FlatList  data={items_data}
            keyExtractor={item => item.id}
              renderItem={({item}) =><ItemCard product={item}/>}
              numColumns={2}
              ListHeaderComponent={<View style={styles.bar_container}>
              <Text style={styles.bar_text}>
                Ara...
              </Text>
            </View>}
           
               />
          </View>
          
         
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  bar_text: {
    color: '#b7b9bc',
    padding: 5,
  },

  bar_container:{
    backgroundColor: '#eceff1',
    margin: 10,
    borderRadius: 5,
    height: 35,
  }
})

export default App;