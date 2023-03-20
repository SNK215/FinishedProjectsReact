import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import React from 'react'
import { CATEGORIES } from '../data/data'


export default function CategoriesPage({navigation}) {

  return (
    <View style={styles.myView}>
      <FlatList data={CATEGORIES} numColumns={2} renderItem={(itemData) => {
        return (
          <Pressable style={({pressed}) => pressed ? [{backgroundColor:itemData.item.color},styles.pressedButton] : [{backgroundColor:itemData.item.color},styles.myButton]} onPress={()=>navigation.navigate("MealsOverviewPage", {category:itemData.item.id})}>
            <View>
              <Text style={styles.myText}>{itemData.item.title}</Text>
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
  myText:{
    fontSize:19,
    color:"black",
    textAlign:"center"
  },
  myButton:{
    padding:20,
    borderRadius:10,
    margin:10,
    width:150,
    height:150,
    justifyContent:"center",
    alignItems:"center",
  },
  myView:{
    alignItems:"center",
  },
  pressedButton:{
    padding:20,
    borderRadius:10,
    margin:10,
    width:150,
    height:150,
    justifyContent:"center",
    alignItems:"center",
    borderColor:"black",
    borderWidth:1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 5,
    shadowRadius: 5,
    
    elevation: 5,
  }
})