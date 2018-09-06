import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Deck from '../Deck';
import { getDecks, addDeck, getAllKeys, removeDeck } from '../../utils/api';
import { withNavigation } from 'react-navigation';

class ListDecks extends React.Component {
    state = {
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

    render(){

        if(this.state.loading) return <Text>Loading</Text>;

        const { decks } = this.state;
        console.log("decks", decks)
        return (
            <View style={{flex: 1}}>
                <Text>ListDecks</Text>
                {Object.keys(decks).map(deck => {
                    return <Deck key={deck} {...decks[deck]} />
                })}
            </View>
        );
    }
}

export default ListDecks;