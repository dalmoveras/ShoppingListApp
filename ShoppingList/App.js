import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Header from './components/Header.component';
import ListItem from './components/ListItem.component';
const App = () => {
  const [items, setItems] = useState([
    {id: 1, text: 'Laranja'},
    {id: 2, text: 'Morango'},
    {id: 3, text: 'Leite'},
    {id: 4, text: 'Bolacha'},
    {id: 5, text: 'Cafe'},
  ]);
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={items}
        renderItem={({item}) => <ListItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
