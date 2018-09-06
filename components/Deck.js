import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Deck (props) {
    return (
        <View>
            <Text>{props.title}</Text>
            <Text>{props.questions.length} questions</Text>
        </View>
    );
}
