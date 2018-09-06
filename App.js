import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListDecks from './components/views/ListDecks';
import IndividualDeck from './components/views/IndividualDeck';
import QuizView from './components/views/QuizView';
import NewDeck from './components/views/NewDeck';
import NewQuestion from './components/views/NewQuestion'
import { getDecks, addDeck, getAllKeys, removeDeck } from './utils/api';
import { createStackNavigator, createDrawerNavigator,
  createBottomTabNavigator, createTabNavigator } from 'react-navigation';


  const Tabs = createBottomTabNavigator({
    ListDecks: {
      screen: ListDecks,
      navigationOptions: {
        tabBarLabel: 'ListDecks',
      },
    },
    NewDeck: {
      screen: NewDeck
    }
  });

  const MainNavigator = createStackNavigator({
    Home: {
      screen: Tabs
    },
    NewDeck: {
      screen: NewDeck,
    }
  })

export default class App extends React.Component {
  state= {
    decks: {},
    loading: true
  }
  
  componentDidMount(){
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
        <ListDecks />

        {/*<ListDecks decks={this.state.decks} />*/}
        
        {/** UNCOMMENT TO SEE ONE DECK**/}
        {/* 
          loading 
          ? <Text>Loading</Text>
          : <IndividualDeck deck={this.state.decks['JavaScript']} />
        */}

        {/** UNCOMMENT TO SEE QUIZ**/}
        {/*
          loading 
          ? <Text>Loading</Text>
          : <QuizView deck={this.state.decks['React']} />
        */}
        
        {/** UNCOMMENT TO ADD NEW DECK**/}
        {/*<NewDeck />*/}

        {/** UNCOMMENT TO ADD QUESTION TO A DECK**/}
        {/*<NewQuestion deckId={decks['React'].title} />*/}

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
