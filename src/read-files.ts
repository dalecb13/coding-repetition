import * as vscode from 'vscode';
import {
	workspace as Workspace, window as Window, Disposable, ExtensionContext, TextDocument
} from 'vscode';

export const whatFiles = () => {
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

    Workspace.fs.createDirectory(uri)
        .then(() => {
            console.log("Created today's directory");
        });
};

export const readFiles = (dirname: string, onFileContent: (filename: string, content: string) => void, onError: (err: Error) => void) => {
    console.log('🔍 CWD', __dirname);
    const fs = vscode.workspace.fs;

    const baseUri = vscode.Uri.file('.');
    fs.readDirectory(baseUri)
        .then(console.log);

    // const data = {};
    // fs.readdir(dirname, function(err, filenames) {
    //     if (err) {
    //         onError(err);
    //         return;
    //     }
    //     filenames.forEach(function(filename) {
    //         fs.readFile(dirname + filename, 'utf-8', function(err, content) {
    //             if (err) {
    //                 onError(err);
    //                 return;
    //             }
    //             onFileContent(filename, content);
    //         });
    //     });
    // });
};
