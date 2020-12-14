import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Header = (props) => {
    return (
        <View style={ styles.header }>
            <Text style={ styles.text }>{ props.title }</Text>
        </View>
    )
};

Header.defaultProps = {
    title: 'Movies List',
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        width: "100%",
        padding: 15,
        backgroundColor: 'darkblue',
    },
    text: {
        color: "#fff",
        textAlign: 'center',
    }
})

export default Header;