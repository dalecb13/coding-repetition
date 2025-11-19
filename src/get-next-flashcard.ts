import * as vscode from 'vscode';
import { readFiles, whatFiles } from './read-files';

const CARD_DIRECTORY = "../cards";

interface Card {
    question: string;
    answer: string;
    algorithm: string;
}

const handleFileReadError = (error: Error) => {
    console.warn("Error: " + error.message);
    vscode.window.showErrorMessage(error.message);
};

export const getNextFlashcardFunction = () => {
    console.log('In getCardFunction!');
    /*
        1. Parse cards for cards due today based on algorithm
        2. If there are no cards, display message
        3. Else
            1. Check and see if today's folder is created
                1. If not created, create it
            2. Create file in today's folder with question
            3. User fills out question
    */

    // 1. Parse cards for cards due today based on algorithm
    whatFiles();
    // const cardMap = new Map<string, string>();
    // readFiles(CARD_DIRECTORY, function(filename, content) {
    //     const parsedFileContent = JSON.parse(content);
    //     // cardMap[filename] = content;
    //     // cardMap.put(filename, card);
    //     cardMap.set(filename, parsedFileContent);
    // }, handleFileReadError);

    // print out cards
    // console.log("Cards: " + JSON.stringify(Array.from(cardMap)));
};
