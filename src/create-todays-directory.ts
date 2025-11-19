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

    let today = new Date();
    const offset = today.getTimezoneOffset();
    today = new Date(today.getTime() - (offset*60*1000));
    const fileName = today.toISOString().split('T')[0];
    // console.log(fileName);

    const todaysDirectoryUri = vscode.Uri.file(folders[0].uri.fsPath + '/' + fileName);

    let doesTodaysDirectoryExist = false;
    Workspace.fs.readDirectory(todaysDirectoryUri)
        .then(() => {
            console.log("Today's directory already exists");
            doesTodaysDirectoryExist = true;
        });

    if (!doesTodaysDirectoryExist) {
        Workspace.fs.createDirectory(todaysDirectoryUri)
            .then(() => {
                console.log("Created today's directory");
            });
    }
};
