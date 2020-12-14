import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const AddItem = ({ title, addItem }) => {
    const [text, setText] = useState('');

    const onChange = (textValue) => setText(textValue);

    return (
        <View>
            <TextInput placeholder="Add Item" style={styles.input} onChangeText={onChange} />

            <TouchableOpacity style={styles.btn} onPress={() => addItem(text)} >
                <Text style={StyleSheet.btnText}>
                    <Ionicons name="add" />
                    Add Item
                </Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 16,
    },
    btn: {
        backgroundColor: 'grey',
        padding: 9,
        margin: 5,
    },
    btnText: {
        color: 'darkblue',
        fontSize: 20,
        textAlign: 'center',
    },
});

export default AddItem;