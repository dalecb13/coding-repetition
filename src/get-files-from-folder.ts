import * as vscode from 'vscode';
import { posix } from 'path';

export async function getFilesFromFolder(folder: vscode.Uri): Promise<string[] | undefined> {
    if (!vscode.workspace.workspaceFolders) {
        vscode.window.showInformationMessage('No folder or workspace opened');
        return;
    }

    var dec = new TextDecoder("utf-8");

    const fileContents = [];
    for (const [name, type] of await vscode.workspace.fs.readDirectory(folder)) {
        if (type === vscode.FileType.File) {
            const filePath = posix.join(folder.path, name);
            const folderUri = vscode.workspace.workspaceFolders[0].uri;
            const fileUri = folderUri.with({ path: posix.join(folderUri.path, name) });
            const fileContent = await vscode.workspace.fs.readFile(fileUri);
            const content = dec.decode(fileContent);
            fileContents.push(content);
        }
    }

    return fileContents;
}
