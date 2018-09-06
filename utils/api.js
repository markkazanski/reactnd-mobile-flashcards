import { AsyncStorage } from 'react-native';

const DECK_STORAGE_KEY = 'reactnd-mobile-flashcards:decks';

export function addDeck ({ entry, key }) {
    return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
        [key]: entry
    }));
}

export function removeDeck (key) {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
      .then((results) => {
        const data = JSON.parse(results)
        data[key] = undefined
        delete data[key]
        AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data))
      })
}

export function getDecks () {
    return AsyncStorage.getItem(DECK_STORAGE_KEY);
}

export function getAllKeys () {
    return AsyncStorage.getAllKeys();
}