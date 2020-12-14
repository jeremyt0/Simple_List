import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, Platform, FlatList } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem'
import AddItem from './components/AddItem'


const App = () => {

    // console.log(Dimensions.get('screen'))

    const guidGenerator = () => {
      let s4 = () => {
        return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
      }
      return (s4()+s4()+"-"+s4()+"-"+s4()+"-"+s4()+"-"+s4()+s4()+s4());
    }



    const [movies, setMovies] = useState ([
      {id: guidGenerator(), title: 'Interstellar'},
      {id: guidGenerator(), title: 'Inception'},
      {id: guidGenerator(), title: 'Pulp Fiction'},
      {id: guidGenerator(), title: 'Her'},
      {id: guidGenerator(), title: 'Star Wars'},
    ]);


    const addItem = (text) => {
      // console.log("Adding item");
      setMovies(prevItems => {
        return [...prevItems, {id: guidGenerator(), title: text}];
      });
    }

    const deleteItem = (id) => {
      // console.log("Deleting item");
      setMovies(prevItems => {
        return prevItems.filter(item => item.id != id);
      });
    }

  return (
    
    <View style={styles.container}>

      <Header title="Movies List"/>


      <AddItem addItem={addItem} />

      <FlatList 
        data={movies} 
        renderItem={ ({ item }) => 
        <ListItem 
          item={item} 
          deleteItem={deleteItem}/>}
      />
      
      {/* <Image source={require('./assets/favicon.png')}/> */}

      <Button title="Click me" 
        color="orange"
        onPress={ () => Alert.alert("My title", "My Message", [
          { text: "Yes", onPress: () => console.log("Yes") }, 
          { text: "No" , onPress: () => console.log("No")}
        ])} />
    


      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});



export default App;
