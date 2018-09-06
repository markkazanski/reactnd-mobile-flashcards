import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import TextButton from '../TextButton';

class NewQuestion extends React.Component {
    state = {
        question: null,
        answer: null
    }

    onChangeQ = (question) => {
        this.setState({question});
    }

    onChangeA = (answer) => {
        this.setState({answer});
    }

    newQ = () => {
        //add quesiton to deck
    }

    render(){
        return (
            <View>
                <Text>New Question for Deck: DeckName</Text>
                <TextInput
                    style={[styles.input, {borderColor: 'blue'}]}
                    onChangeText={this.onChangeQ}
                    value={this.state.question}
                    placeholder='Enter question'
                />

                <TextInput
                    style={[styles.input, {borderColor: 'green'}]}
                    onChangeText={this.onChangeA}
                    value={this.state.answer}
                    placeholder='Enter answer'
                />

                <TextButton style={{margin: 20, color: 'red'}} onPress={this.newQ}>
                    Create New Question
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

export default NewQuestion;