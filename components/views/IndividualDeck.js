import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Deck from '../Deck';
import TextButton from '../TextButton';

export default function IndividualDeck (props) {
    submit = () => {
        console.log("NEW DECK PRESSED");
    }

    start = () => {
        console.log("START QUIZ");
    }

    console.log("PROPS", props);

    return (
        <View>
            <Deck {...props.deck} />
            <TextButton style={{margin: 20, color: 'blue'}} onPress={this.submit}>
                    Add New Question
            </TextButton>

            <TextButton style={{margin: 20, color: 'red'}} onPress={this.start}>
                    Start Quiz
            </TextButton>
        </View>
    );
}

/*Deck {title, numCards}
Button - Start Quiz
Button - Add Question
*/