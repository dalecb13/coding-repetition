import * as vscode from 'vscode';
import { getCards } from './get-cards-directory';
import { getTodaysCards } from './get-todays-cards';

interface Card {
    question: string;
    answer: string;
    algorithm: string;
}

const handleFileReadError = (error: Error) => {
    console.warn("Error: " + error.message);
    vscode.window.showErrorMessage(error.message);
};

export const getNextFlashcardFunction = async (baseUri: vscode.Uri) => {
    /*
        Show random card
        1. Load cards from cards directory
            1. If no cards directory exists, show error message
            2. If no cards exist in directory, show error message
        2. Load cards from todays directory
            1. Create it if it doesn't exist, and show message
        3. Remove all cards from cards directory that is in todays directory
        4. Apply algorithm to figure out if a card needs to be displayed and filter out unneeded cards
        5. Randomly choose
    */
    console.log('In getCardFunction!');

    // 1. Load cards
    const cards = await getCards(baseUri);
    if (cards === undefined) {
        // TODO: implement this
        return;
    } else {
        console.log('cards', cards);
    }

    // 2. Load cards from today's directory
    // let todaysCards = await getTodaysCards(baseUri);
    // if (todaysCards === undefined) {
    //     // TODO: implement this
    //     // No cards, which is fine
    //     todaysCards = [];
    //     console.log('todaysCards is empty');
    //     return;
    // } else {
    //     console.log('todaysCards', todaysCards);
    // }
};
