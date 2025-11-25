import * as vscode from 'vscode';

export async function getFilesFromFolder(folder: vscode.Uri): Promise<string[] | undefined> {
    console.log('getting files from folder', folder);
    if (!vscode.workspace.workspaceFolders) {
        vscode.window.showInformationMessage('No folder or workspace opened');
        return;
    }

    if (folder === undefined) {
        void vscode.window.showErrorMessage('"cards" directory not found');
        return;
    }

    var dec = new TextDecoder("utf-8");

    const fileContents = [];
    for (const [name, type] of await vscode.workspace.fs.readDirectory(folder)) {
        if (type === vscode.FileType.File) {
            const filePath =  vscode.Uri.joinPath(folder, name);
            const fileContent = await vscode.workspace.fs.readFile(filePath);
            const content = dec.decode(fileContent);
            console.log('content', content);
            fileContents.push(content);
        }
    }

    return fileContents;
}
