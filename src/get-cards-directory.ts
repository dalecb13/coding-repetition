import {
	workspace as Workspace, window as Window, Uri as VscodeUri
} from 'vscode';

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

export const getCards = async () => {
    const cardDirectory: string | undefined = getCardsDirectoryName();
    if (cardDirectory === undefined) {
        void Window.showErrorMessage('"cards" directory not found');
    } else {
        const cards = await Workspace.fs.readDirectory(VscodeUri.file(cardDirectory));
        return cards;
    }
};
