import * as vscode from 'vscode';

export const getTodaysDate = () => {
    let today = new Date();
    const offset = today.getTimezoneOffset();
    today = new Date(today.getTime() - (offset*60*1000));
    return today.toISOString().split('T')[0];
};
