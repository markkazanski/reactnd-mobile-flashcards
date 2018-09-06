import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import Deck from '../Deck';
import TextButton from '../TextButton';
import { getDecks, removeDeck } from '../../utils/api';

class IndividualDeck extends React.Component {
    state = {
        loading: true,
        deck: {}
    }

    componentDidMount(){
        getDecks().then(result => {
            const data = JSON.parse(result);
            const key = this.props.navigation.state.params.id;
            this.setState({deck: data[key], loading: false});
        })
      }

    submit = () => {
        console.log("NEW DECK PRESSED");
    }

    start = () => {
        console.log("START QUIZ");
    }

    deleteDeckAlert = () => {
        Alert.alert(
            'Delete Deck?',
            'Are you sure?',
            [
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'DELETE', onPress: () => this.deleteDeck()},
            ],
            { cancelable: false }
          );
    }

    deleteDeck = () => {
        removeDeck(this.state.deck.title);
        const { navigation } = this.props;
        navigation.navigate('Home');
    }
    

    render(){
        const { deck, loading } = this.state;
        const { navigation } = this.props;

        if(loading) return <Text>{JSON.stringify(this.state.deck)}</Text>;

        return (
            <View>
                <Deck {...deck} />
                <TextButton 
                    style={{margin: 20, color: 'blue'}} 
                    onPress={() => navigation.navigate('NewQuestion',{id: deck.title})}
                >
                        Add New Question
                </TextButton>

                <TextButton 
                    style={{margin: 20, color: 'red'}} 
                    onPress={() => navigation.navigate('QuizView',{deck: deck})}
                >
                        Start Quiz
                </TextButton>

                <TextButton 
                    style={{margin: 20, color: 'red'}} 
                    onPress={this.deleteDeckAlert}
                >
                        Delete Deck
                </TextButton>
            </View>
        );
    }
}

export default IndividualDeck;
/*Deck {title, numCards}
Button - Start Quiz
Button - Add Question
*/