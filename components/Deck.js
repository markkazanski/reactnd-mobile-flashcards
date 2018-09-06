import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


function Deck (props) {
    return (
        <View>
            <Text>{props.title}</Text>
            <Text>{props.questions.length} questions</Text>
        </View>
    );
}

export default Deck;