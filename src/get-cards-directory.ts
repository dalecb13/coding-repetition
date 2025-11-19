import {
	workspace as Workspace, window as Window
} from 'vscode';

export const getCardsDirectory = () => {
    const folders = Workspace.workspaceFolders;
    if (!folders) {
        void Window.showErrorMessage('Spaced Code Repetition can only run on a workspace folder.');
        return;
    }

    const cardDirectory = folders[0].uri.fsPath + '/cards';
    return cardDirectory;
};
