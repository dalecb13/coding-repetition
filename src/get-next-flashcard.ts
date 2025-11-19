import * as vscode from 'vscode';
import { readFiles, whatFiles } from './read-files';
import { getCards } from './get-cards-directory';

interface Card {
    question: string;
    answer: string;
    algorithm: string;
}

const handleFileReadError = (error: Error) => {
    console.warn("Error: " + error.message);
    vscode.window.showErrorMessage(error.message);
};

export const getNextFlashcardFunction = async () => {
    console.log('In getCardFunction!');

    // whatFiles();
    const cards = await getCards();
    if (cards === undefined) {
        // TODO: implement this
        return;
    } else {
        console.log('cards', cards);
    }
};
