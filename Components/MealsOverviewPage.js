import { StyleSheet, Text, View, FlatList, Pressable, Image } from 'react-native'
import React from 'react'
import { MEALS } from '../data/data'

export default function MealsOverviewPage({navigation,route}) {

    const category = route.params.category
    const correctMeals = MEALS.filter(element => element.categoryIds.includes(category))

    return (
        <View style={styles.myContainer}>
            <FlatList data={correctMeals} renderItem={(itemData) => {
        return (
            <Pressable style={({pressed}) => pressed ? styles.myPressedButton : styles.myButton} onPress={()=>navigation.navigate("RecipePage", {recipeId : itemData.item.id})}>

                    <View style={styles.myView}>
                        <Image source={{uri: itemData.item.imageUrl}} style={styles.myImage} resizeMode="cover"/>
                    </View>
                    <Text style={styles.myTitle}>{itemData.item.title}</Text>
                    <View style={styles.mySubView}>
                        <Text style={styles.mySubText}>{itemData.item.duration}m</Text>
                        <Text style={styles.mySubText}>{itemData.item.complexity.toUpperCase()}</Text>
                        <Text style={styles.mySubText}>{itemData.item.affordability.toUpperCase()}</Text>
                    </View>

            </Pressable>
            )
            }}
            keyExtractor={(item, index) => {
            return index;
            }}
        />           
        </View>
    )
}

const styles = StyleSheet.create({
    myButton:{
        borderRadius:10,
        width:300,
        borderColor:"grey",
        borderWidth:0.7,
        marginBottom:20
    },
    myTitle:{
        fontSize:22,
        color:"#ebc475",
        textAlign:"center", 
        marginBottom:7,
        marginTop:5,
        fontWeight:"bold",
    },
    mySubView:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        marginBottom:5
    },
    mySubText:{
        color:"black",
        fontSize:15,
        margin:5
    },
    myImage:{
        width:299, 
        height:200,
        borderTopRightRadius:10,
        borderTopLeftRadius:10
    },
    myContainer:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        marginVertical:20
    },
    myPressedButton:{
        borderRadius:10,
        width:300,
        borderColor:"grey",
        borderWidth:0.7,
        marginBottom:20,
        borderWidth:2,
    }
})