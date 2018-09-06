import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import TextButton from '../TextButton';
import { addDeck } from '../../utils/api';

class NewDeck extends React.Component {
    state = {
        newDeck: null
    }

    newDeck = () => {
        const { newDeck } = this.state;

        if(newDeck.length === 0) return; //check length

        if(/[^a-zA-Z0-9]/.test(newDeck)) return; //check that no spaces

        const createdDeck = { //check that no spaces
            title: newDeck.replace(/\s/g, ''),
            questions: []
        };

        addDeck({key: createdDeck.title, entry: createdDeck});
        this.setState({newDeck: ''});

        //navigate home
    }

    onChangeText = (newDeck) => {
        //check for spaces [a-zA-Z0-9]
        this.setState({newDeck: newDeck.trim()});

    } 

    render(){
        return (
            <View>
                <Text>NEW DECK</Text>
                <Text>Deck name: numbers, letters only. No spaces.</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={this.onChangeText}
                    value={this.state.newDeck}
                    placeholder='Enter deck name'
                    multiline={false}
                />
                <TextButton style={{margin: 20, color: 'red'}} onPress={this.newDeck}>
                    Create New Deck
                </TextButton>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        height: 60, 
        borderColor: 'gray', 
        borderWidth: 1,
        padding: 10,
        marginTop: 20,
        marginBottom: 20
    }
})

export default NewDeck;
