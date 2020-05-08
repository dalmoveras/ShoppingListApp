import React from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons';

// import { Container } from './styles';

const AddItem = () => {
  return (
    <View>
      <TextInput placeholder="Add item..." style={styles.textInput} />
      <TouchableOpacity style={styles.touchButton}>
        <Text styles={styles.touchButtonText}>
          <Icon name="plus" size={20} />
          Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  textInput: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  touchButton: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
  },
  touchButtonText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  },
});
export default AddItem;
