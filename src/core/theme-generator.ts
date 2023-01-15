/* eslint-disable @typescript-eslint/naming-convention */
import { Colors, VsTheme } from "../types";
import dark from '../colors/dark.json';

function getColors(theme: string): Colors {
    switch (theme) {
        case 'gipsy-dark':
            return dark;
        default:
            throw new Error(`Colors for "${theme}" not found!`);
    }
}

export function generateTheme(theme: string, name: string, type?:string): VsTheme {

    const colors = getColors(theme);

    return {
        name: `${name}`,
        id: `${theme}`,
        type: `${type}`,
        author: 'Luca Gärisch',
        colors: {
            "activityBar.activeFocusBorder": colors.accent,
            "activityBar.background": colors.bg.primary,
            "activityBar.border": colors.bg.primary,
            "activityBar.foreground": colors.accent,
            "activityBar.inactiveForeground": colors.fg.muted,
            "activityBarBadge.background": colors.accent,
            "activityBarBadge.foreground": colors.base.black,
        }
    };
}