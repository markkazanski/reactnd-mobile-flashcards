import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TextButton from '../TextButton';

class QuizView extends React.Component {
    state = {
        showAnswer: false,
        qNum: 0,
        total: null,
        correct: 0, 
        loading: true
    }

    componentDidMount(){
        this.setState({total: this.props.deck.questions.length, loading: false});
    }

    toggleAnswer = () => {
        const { showAnswer } = this.state;

        this.setState(() => ({showAnswer: !showAnswer}));
    }

    correct = () => {
        const { correct, qNum } = this.state;
        this.setState({
            correct: correct + 1,
            qNum: qNum + 1
        });
    }

    incorrect = () => {
        const {  qNum } = this.state;
        this.setState({
            qNum: qNum + 1
        });   
    }

    toHome = () => {

    }

    render(){
        const { questions, title } = this.props.deck;
        const { showAnswer, qNum, total, correct, loading } = this.state;
        
        if(loading) return <Text>Loading</Text>

        if(!total){
            return <Text>No Questions</Text>
        }

        if(qNum >= total){
            return (
                <View>
                    <Text>Quiz Complete</Text>
                    <Text>Answered Correctly: {((correct / total) * 100).toFixed(2)}%</Text>
                    <TextButton style={{margin: 20, color: 'blue'}} onPress={this.toHome}>
                        Home
                    </TextButton>
                </View>
            );
        }

        return(
            <View>
                <Text>{title}</Text>
                {
                    showAnswer
                        ? <Text>{questions[qNum].answer}</Text>
                        : <Text>{questions[qNum].question}</Text>
                }

                <TextButton style={{margin: 20, color: 'blue'}} onPress={this.toggleAnswer}>
                    {showAnswer ? 'Show Question' : 'Show Answer'}
                </TextButton>

                <TextButton style={{margin: 20, color: 'green'}} onPress={this.correct}>
                    Correct
                </TextButton>

                <TextButton style={{margin: 20, color: 'red'}} onPress={this.incorrect}>
                    Incorrect
                </TextButton>

                <Text>Question Number: {qNum + 1} / {total}</Text>
                <Text>Questions Left: {total - (qNum + 1)}</Text>
                <Text>Score: {((correct / total) * 100).toFixed(2)}</Text>  
            </View>
        );
    }
}

export default QuizView;