import React from 'react';
import { View , TextInput , StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
	return <View style = {styles.backgroundStyle} >
	<MaterialCommunityIcons name="magnify" style={styles.iconStyle} />
	<TextInput 
	autoCapitalize = "none"
	autoCorrect = {false}
	style = {styles.inputStyle} 
	placeholder = " Search Dish " 
	value = {term}
	onChangeText = {newTerm => onTermChange(newTerm)}
	onEndEditing = { () => onTermSubmit() }
	/>
	</View>
}

const styles = StyleSheet.create({
	backgroundStyle : {
		flexDirection : 'row',
		backgroundColor: '#F0EEEE',
		height : 40,
		borderRadius : 5,
		margin : 15

	},
	inputStyle :{
		fontSize : 18,
		flex : 1 
	},
	iconStyle:{
		fontSize : 35,
		alignSelf : 'center',
		marginHorizontal : 15
	}
});

export default SearchBar;