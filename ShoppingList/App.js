import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './components/Header.component';
import ListItem from './components/ListItem.component';
import AddItem from './components/AddItem.component';
const App = () => {
  const generateId = () => Math.floor(Math.random() * 100 + 1);
  const [items, setItems] = useState([
    {id: generateId(), text: 'Laranja'},
    {id: generateId(), text: 'Morango'},
    {id: generateId(), text: 'Leite'},
    {id: generateId(), text: 'Bolacha'},
    {id: generateId(), text: 'Cafe'},
  ]);

  const deleteItem = id => {
    setItems(previousItems => {
      return previousItems.filter(item => item.id !== id);
    });
  };

  const addItem = text => {
    if (!text) {
      Alert.alert('Oops', 'Por favor, digite alguma coisa');
    } else {
      setItems(previousItems => {
        return [{id: generateId(), text}, ...previousItems];
      });
    }
  };
  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
        keyExtractor={item => item.id}
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
