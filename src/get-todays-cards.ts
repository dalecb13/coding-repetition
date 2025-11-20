import {
	workspace as Workspace, window as Window, Uri as VscodeUri
} from 'vscode';
import { getTodaysDate } from './get-todays-date';
import { log } from './log';

const getOrCreateTodaysDirectory = () => {
    const folders = Workspace.workspaceFolders;
    if (!folders) {
		void Window.showErrorMessage('Spaced Code Repetition can only run on a workspace folder.');
		return;
	}
    const todaysDirectoryName: string = getTodaysDate();
    const todaysDirectoryUri = VscodeUri.file(folders[0].uri.fsPath + "/" + todaysDirectoryName);
    let doesTodaysDirectoryExist = false;
    Workspace.fs.readDirectory(todaysDirectoryUri)
            .then(() => {
                doesTodaysDirectoryExist = true;
            });

    if (!doesTodaysDirectoryExist) {
        Workspace.fs.createDirectory(todaysDirectoryUri)
            .then(() => {
                log("Created today's directory");
            });
    }
};

export const getTodaysCards = async () => {
    getOrCreateTodaysDirectory();

    const folders = Workspace.workspaceFolders;
    if (!folders) {
		void Window.showErrorMessage('Spaced Code Repetition can only run on a workspace folder.');
		return;
	}
    const todaysDirectoryName: string = getTodaysDate();
    const todaysDirectoryUri = VscodeUri.file(folders[0].uri.fsPath + "/" + todaysDirectoryName);
    return await Workspace.fs.readDirectory(todaysDirectoryUri);
};
