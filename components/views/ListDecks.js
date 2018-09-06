import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Deck from '../Deck';

function ListDecks (props) {
    const { decks } = props;
    return (
        <View>
            <Text>ListDecks</Text>
            {Object.keys(decks).map(deck => {
                return <Deck key={deck} {...decks[deck]} />
            })}
        </View>
    );
}

export default ListDecks;