/**
 * @author Lakkanna Walikar
 * @description write converted css into editor
 */

import * as vscode from 'vscode';
import { commands } from 'vscode';

/**
 * function to write converted css into an editor
 *
 * @param {vscode.TextEditor} editor - A active vscode editor
 * @param {string[]} replacedText - Array of string values
 */
const writeToEditor = (editor: vscode.TextEditor, replacedText: string[] = ['']) => {
  	try {
        if (Array.isArray(replacedText)) {
          editor.edit(e => e.replace(editor.selection, replacedText.join("\n")), { undoStopBefore: true, undoStopAfter: true, });
          const settings = vscode.workspace.getConfiguration('cssConverter');
          if (settings.get('autoFormat')) {
            commands.executeCommand('editor.action.formatSelection', []);
          }
          vscode.window.showInformationMessage("CSS Converted 😍");
        }
			} catch (e) {
				vscode.window.showErrorMessage("Error while converting CSS! ☹️");
			}
}

export default writeToEditor;

