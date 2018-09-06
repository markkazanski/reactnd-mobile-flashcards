import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListDecks from './components/views/ListDecks';
import IndividualDeck from './components/views/IndividualDeck';
import QuizView from './components/views/QuizView';
import NewDeck from './components/views/NewDeck';
import NewQuestion from './components/views/NewQuestion'
import { getDecks, addDeck, getAllKeys, removeDeck } from './utils/api';

export default class App extends React.Component {
  state= {
    decks: {},
    loading: true
  }

  componentDidMount(){

    //removeDeck('React');

    getDecks().then(result => {
      if(result === null || result === '{}'){ //if empty, add temp decks
        addDeck({key: decks['React'].title, entry: decks['React']})
        .then(() => {
          return addDeck({key: decks['JavaScript'].title, entry: decks['JavaScript']});
        })
        .then(() => { //add both decks
          return getDecks();
        })
        .then(result => { //get new decks, add to state
          const data = JSON.parse(result);
          this.setState({decks: data});
        });
        

      } else { //if decks exist
        const data = JSON.parse(result);
        this.setState({decks: data, loading: false});
      }
    });
  }

  render() {
    const { loading } = this.state;
    return (
      <View style={styles.container}>
        {/*<ListDecks decks={this.state.decks} />*/}
        {/*
          loading 
          ? <Text>Loading</Text>
          : <IndividualDeck deck={this.state.decks['JavaScript']} />
        */}

        {/*
          loading 
          ? <Text>Loading</Text>
          : <QuizView deck={this.state.decks['React']} />
        */}
        
        {/*<NewDeck />*/}
        <NewQuestion deckId={decks['React'].title} />

      </View>
    );
  }
}

const decks = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
