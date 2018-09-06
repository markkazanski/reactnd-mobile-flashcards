import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Deck from '../Deck';
import { getDecks, addDeck, getAllKeys, removeDeck } from '../../utils/api';
import { withNavigation } from 'react-navigation';
import TextButton from '../TextButton';
import defaultDecks from  '../../utils/defaultDecks';

class ListDecks extends React.Component {
    state = {
        loading: true,
        decks: {}
    }

    componentDidMount(){
        getDecks().then(result => {
          if(result === null || result === '{}'){ //if empty, add temp decks
            addDeck({key: defaultDecks['React'].title, entry: defaultDecks['React']})
            .then(() => {
              return addDeck({key: defaultDecks['JavaScript'].title, entry: defaultDecks['JavaScript']});
            })
            .then(() => { //add both decks
              return getDecks();
            })
            .then(result => { //get new decks, add to state
              const data = JSON.parse(result);
              this.setState({decks: data, loading: false});
            });
          } else { //if decks exist
            const data = JSON.parse(result);
            this.setState({decks: data, loading: false});
          }
        });
      }

    refreshDecks(){
        getDecks().then(result => {
            const data = JSON.parse(result);
            this.setState({decks: data, loading: false});
        })
    }

    render(){
        
        if(this.state.loading) return <Text>Loading</Text>;

        const { decks } = this.state;
        const { navigation } = this.props;

        return (
            <ScrollView style={{flex: 1}}>
                <Text>ListDecks</Text>
                {Object.keys(decks).map(deck => {
                    return <Deck key={deck} {...decks[deck]} />
                })}

                <TextButton 
                    style={{margin: 20, color: 'blue'}} 
                    onPress={() => navigation.navigate('NewDeck')}
                >
                        Add New Deck
                </TextButton>

                <TextButton 
                    style={{margin: 20, color: 'gray'}} 
                    onPress={() => this.refreshDecks()}
                >
                        Refresh
                </TextButton>
            </ScrollView>
        );
    }
}

export default ListDecks;