<Pressable style={({pressed}) => pressed ? [{backgroundColor:itemData.item.color},styles.pressedButton] : [{backgroundColor:itemData.item.color},styles.myButton]} onPress={()=>navigation.navigate("MealsOverviewPage", {category:itemData.item.id})}>
