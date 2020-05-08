import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

// import { Container } from './styles';

const AddItem = ({title, addItem}) => {
  const [text, setText] = useState('');
  const onChange = textValue => setText(textValue);

  return (
    <View>
      <TextInput
        placeholder="Add item..."
        style={styles.textInput}
        onChangeText={onChange}
      />
      <TouchableOpacity
        style={styles.touchButton}
        onPress={() => {
          addItem(text);
        }}>
        <Text style={styles.touchButtonText}>
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
    alignSelf: 'center',
  },
});
export default AddItem;
