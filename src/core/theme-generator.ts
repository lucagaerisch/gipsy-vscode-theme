/* eslint-disable @typescript-eslint/naming-convention */
import { Colors, VsTheme } from "../types";
import dark from '../colors/dark.json';

function getColors(theme: string): Colors {
    switch (theme) {
        case 'gipsy-dark':
            return dark;
        default:
            throw new Error('');
    }
}

export function generateTheme(theme: string, name: string): VsTheme {

    const colors = getColors(theme);

    return {
        name: `${name}`,
        id: `${theme}`,
        type: ``,
        author: 'Luca Gärisch',
        colors: {
            "activityBar.background": "#561712"
        }
    };
}