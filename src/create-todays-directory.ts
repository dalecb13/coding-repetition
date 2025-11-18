import * as vscode from 'vscode';
import {
	workspace as Workspace, window as Window
} from 'vscode';

export const createTodaysDirectory = () => {
    const folders = Workspace.workspaceFolders;
    if (!folders) {
        void Window.showErrorMessage('Spaced Code Repetition can only run on a workspace folder.');
        return;
    }
    // console.log(folders);

    const CARD_DIRECTORY = folders[0].uri.fsPath + '/cards';
    // console.log(CARD_DIRECTORY);

    let today = new Date();
    const offset = today.getTimezoneOffset();
    today = new Date(today.getTime() - (offset*60*1000));
    const fileName = today.toISOString().split('T')[0];
    // console.log(fileName);

    const uri = vscode.Uri.file(CARD_DIRECTORY + '/' + fileName);

    let doesTodaysDirectoryExist = false;
    Workspace.fs.readDirectory(uri)
        .then(() => {
            console.log("Today's directory already exists");
            doesTodaysDirectoryExist = true;
        });

    if (!doesTodaysDirectoryExist) {
        Workspace.fs.createDirectory(uri)
            .then(() => {
                console.log("Created today's directory");
            });
    }
};
