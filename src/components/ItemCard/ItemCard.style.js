import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({

    image_container:{
        backgroundColor: '#eceff1',
        height: 280,
        width: '46%',
        margin:8,
        borderRadius: 10,
        flex: 1,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        //alignItems: 'center',
        //justifyContent: 'space-between'
    },
    image: {
        //height: Dimensions.get('window').height / 5,
        //width: '89%',
        borderRadius: 5,
        margin:10,
        borderRadius: 10,
        backgroundColor: 'white',
        flex: 2


    },

    title: {
        //marginTop: 10,
        fontWeight: 'bold',
        fontSize: 16,
        color: 'black'
    },

    price: {
        alignItems: 'flex-end'
    },

    text: {
        flexDirection: 'column',
        padding: 10,
        justifyContent: 'space-between',
        flex:1

    },

    text2: {
        flexDirection: 'column',
       
        justifyContent: 'space-between',
      
    }

    
})

