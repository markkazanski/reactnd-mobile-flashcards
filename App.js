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



  const Stack = createStackNavigator({
    Home: {
      screen: ListDecks,
      navigationOptions: {
        title: 'Home'
      }
    },
    ListDecks: {
      screen: ListDecks,
      navigationOptions: {
        title: 'Deck List',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: 'blue'
        }
      }
    },
    IndividualDeck: {
      screen: IndividualDeck,
      navigationOptions: {
        title: 'Deck Details',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: 'blue'
        }
      }
    }, 
    NewDeck: {
      screen: NewDeck,
      navigationOptions: {
        title: 'New Deck',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: 'blue'
        }
      }
    }, 
    NewQuestion: {
      screen: NewQuestion,
      navigationOptions: {
        title: 'New Question',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: 'blue'
        }
      }
    },
    QuizView: {
      screen: QuizView,
      navigationOptions: {
        title: 'Quiz',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: 'blue'
        }
      }
    }
  });

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'red'}}>
        <Stack />
      </View>
    );
  }
}