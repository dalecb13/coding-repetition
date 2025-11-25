import {
	workspace as Workspace, window as Window, Uri as VscodeUri
} from 'vscode';
import { Card } from './card';
import { fileToCard } from './transform-card';
import { getFilesFromFolder } from './get-files-from-folder';

const getCardsDirectoryName = () => {
    const folders = Workspace.workspaceFolders;
    if (!folders) {
        void Window.showErrorMessage('Spaced Code Repetition can only run on a workspace folder.');
        return;
    }

    const cardDirectory = folders[0].uri.fsPath + '/cards';
    return cardDirectory;
};

const doesCardsDirectoryExist = () => {
    const cardDirectory: string | undefined = getCardsDirectoryName();
    if (cardDirectory === undefined) {
        void Window.showErrorMessage('Spaced Code Repetition can only run on a workspace folder.');
    } else {
        let doesCardsDirectoryExist = false;
        Workspace.fs.readDirectory(VscodeUri.file(cardDirectory))
            .then(() => {
                doesCardsDirectoryExist = true;
            });
        return doesCardsDirectoryExist;
    }
};

export const getCards = async (baseUri: VscodeUri): Promise<Card[] | undefined> => {
    if (!Workspace.workspaceFolders) {
        Window.showInformationMessage('No folder or workspace opened');
        return;
    }

    const cardDirectory =  VscodeUri.joinPath(baseUri, 'cards');
    if (cardDirectory === undefined) {
        void Window.showErrorMessage('"cards" directory not found');
        return;
    }

    const fileContents = await getFilesFromFolder(cardDirectory);
    const cards = fileContents?.map(fileToCard);
    return cards;
};
