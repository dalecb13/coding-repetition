import {
	window as Window,
} from 'vscode';

export const log = (message: string) => {
    console.log(message);
    Window.showErrorMessage(message);
};
