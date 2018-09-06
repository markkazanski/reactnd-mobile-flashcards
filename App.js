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
        title: 'ListDecks',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: 'blue'
        }
      }
    },
    IndividualDeck: {
      screen: IndividualDeck,
      navigationOptions: {
        title: 'IndividualDeck',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: 'blue'
        }
      }
    }, 
    NewDeck: {
      screen: NewDeck,
      navigationOptions: {
        title: 'NewDeck',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: 'blue'
        }
      }
    }, 
    NewQuestion: {
      screen: NewQuestion,
      navigationOptions: {
        title: 'NewQuestion',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: 'blue'
        }
      }
    },
    QuizView: {
      screen: QuizView,
      navigationOptions: {
        title: 'QuizView',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: 'blue'
        }
      }
    }
  });

  function Home123 ({ navigation }){
    return (
      <View>
        {console.log('Home View')}
        <Text>HOME</Text>
        <Text>asdfasdf988987</Text>
        <Text onPress={() => navigation.navigate('Dashboard', { entryId: 'test123' })}>To Dashboard</Text>
      </View>
    )
  }

  function Dashboard ({ navigation }){
    return (
      <View>
        <Text>Dashboards</Text>
        <Text onPress={() => navigation.navigate('Home')}>To Home</Text>
        <Text onPress={() => navigation.navigate('ListDecks')}>To ListDecks</Text>
        <Text onPress={() => navigation.navigate('IndividualDeck',{id: 'React'})}>To IndividualDeck</Text>
      </View>
    )
  }

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'red'}}>
        <Stack />
      </View>
    );
  }
}