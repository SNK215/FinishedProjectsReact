import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CategoriesPage from './Components/CategoriesPage'
import MealsOverviewPage from './Components/MealsOverviewPage'
import RecipePage from './Components/RecipePage'


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
            <Stack.Navigator initialRouteName='CategoriesPage'>
                <Stack.Screen name="All Categories" component={CategoriesPage}/>
                <Stack.Screen name="MealsOverviewPage" component={MealsOverviewPage} options={{title : "Meals Overview"}}/>
                <Stack.Screen name="RecipePage" component={RecipePage} options={{title : "About the Meal"}}/>
            </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})