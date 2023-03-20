import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'
import { MEALS } from '../data/data'

export default function RecipePage({route}) {

    const displayedRecipeId = route.params.recipeId
    const displayedRecipe = MEALS.find(element => element.id == displayedRecipeId)

    return (
        <ScrollView>
            <View style={styles.myView}>
                    <Image style={styles.myImage} source={{uri: displayedRecipe.imageUrl}}/>

                    <Text style={styles.myTitle}>{displayedRecipe.title}</Text>

                    <View style={styles.MySubView}>
                        <Text style={styles.MySubTitle}>{displayedRecipe.duration}m</Text>
                        <Text style={styles.MySubTitle}>{displayedRecipe.complexity.toUpperCase()}</Text>
                        <Text style={styles.MySubTitle}>{displayedRecipe.affordability.toUpperCase()}</Text>
                    </View>

                    <Text style={styles.myListTitle}>Ingredients</Text>
                    <View style={styles.myListLine}/>
                    {displayedRecipe.ingredients.map((ingredient, key) => (
                        <View key={key} style={styles.myListViews}>
                            <Text style={styles.myListElements}>{ingredient}</Text>
                        </View>
                    ))}

                    <Text style={styles.myListTitle}>Steps</Text>
                    <View style={styles.myListLine} />
                    {displayedRecipe.steps.map((step, key) => (
                        <View key={key} style={styles.myListViews}>
                            <Text style={styles.myListElements}>{step}</Text>
                        </View>
                    ))}

                    <View style={styles.logoGroupViews}>
                        <View style={styles.logoView}>
                            <Text style={styles.logoTitle}>Gluten Free ?</Text>
                            {displayedRecipe.isGlutenFree ? <Image source={require('./check.png')} style={styles.logo}/> : <Image source={require('./cross.png')} style={styles.logo}/>}
                        </View>

                        <View style={styles.logoView}>
                            <Text style={styles.logoTitle}>Lactose Free ?</Text>
                            {displayedRecipe.isLactoseFree ? <Image source={require('./check.png')} style={styles.logo}/> : <Image source={require('./cross.png')} style={styles.logo}/>}
                        </View>

                        <View style={styles.logoView}>
                            <Text style={styles.logoTitle}>Vegan ?</Text>
                            {displayedRecipe.isVegan ? <Image source={require('./check.png')} style={styles.logo}/> : <Image source={require('./cross.png')} style={styles.logo}/>}
                        </View>

                        <View style={styles.logoView}>
                            <Text style={styles.logoTitle}>Vegetarian ?</Text>
                            {displayedRecipe.isVegetarian ? <Image source={require('./check.png')} style={styles.logo}/> : <Image source={require('./cross.png')} style={styles.logo}/>}
                        </View>
                    </View>


            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    myView:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"flex-start",
        textAlign:"center",
    },
    myImage:{
        height:350, 
        width:"100%"
    },
    myTitle:{
        marginTop:5,
        fontSize:22,
        color:"black",
        fontWeight:"bold"
    },
    MySubView:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        marginTop:5
    }, 
    MySubTitle:{
        fontSize:13,
        color:"black",
        margin:3
    },
    myListTitle:{
        fontSize:20, 
        color:"black",
        marginTop:7,
        marginBottom:7

    },
    myListLine:{
        borderBottomColor:"#ebc475",
        borderBottomWidth:2,
        width:"70%",
        marginBottom:5
    },
    myListElements:{
        color:"black",
        fontSize:15,
        textAlign:"center"

    },
    myListViews:{
        backgroundColor:"#ebc475",
        width:"70%",
        borderRadius:5,
        padding:3,
        textAlign:"center",
        margin:4
    },
    logo:{
        height:50,
        width:50
    },
    logoTitle:{
        color:"black",
        textAlign:"center",
        fontSize:15
    },
    logoGroupViews:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center"
    },
    logoView:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        margin:5,
        marginTop:20,
        marginBottom:45
    }

})