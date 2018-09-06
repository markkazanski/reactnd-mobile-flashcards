import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import TextButton from '../TextButton';
import { addQuestion } from '../../utils/api';

class NewQuestion extends React.Component {
    state = {
        question: null,
        answer: null,
        deckId: null,
        loading: true
    }

    componentDidMount(){
        this.setState({
            deckId: this.props.deckId,
            loading: false
        })
    }

    onChangeQ = (question) => {
        this.setState({question});
    }

    onChangeA = (answer) => {
        this.setState({answer});
    }

    newQ = () => {
        const { deckId, answer, question } = this.state;

        //add quesiton to deck
        if(answer.length === 0 || question.length === 0) return; //check input

        //addQuestion
        addQuestion({
            key: deckId, 
            entry: {
                question,
                answer
            }
        });

        this.setState({answer: null, question: null});

        //navigate home
    }

    render(){
        const { loading, deckId } = this.state;

        if(loading) return <Text>Loading</Text>
        
        return (
            <View>
                <Text>New Question for Deck: {deckId}</Text>
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