import {
	workspace as Workspace, window as Window, Disposable, ExtensionContext, TextDocument
} from 'vscode';
import { createTodaysDirectory } from './create-todays-directory';

export const createCard = () => {
    createTodaysDirectory();

    
};
