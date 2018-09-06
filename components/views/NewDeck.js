import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import TextButton from '../TextButton';

class NewDeck extends React.Component {
    state = {

    }

    newDeck = () => {}

    onChangeText = (newDeck) => {
        //check for spaces [a-zA-Z0-9]
        this.setState({newDeck})
    } 

    render(){
        return (
            <View>
                <Text>NEW DECK</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={this.onChangeText}
                    value={this.state.newDeck}
                    placeholder='Enter deck name'
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
