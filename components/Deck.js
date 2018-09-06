import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

function Deck (props) {
    const { navigation } = props;

    if(!props.questions) return <Text>Question Not Found {navigation.navigate('Home')}</Text>

    return (
        <View style={{marginBottom: 20, justifyContent: 'center'}}>
            <Text style={{color: 'blue', fontWeight: 'bold'}} onPress={() => navigation.navigate('IndividualDeck',{id: props.title})}>{props.title}</Text>
            <Text>{props.questions.length} questions</Text>
        </View>
    );
}

export default withNavigation(Deck);