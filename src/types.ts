export type Colors = {
    accent: string,
    transparent: string,
    bg: {
        primary: string,
        secondary: string,
        tertiary: string,
        overlay: string
    },
    fg: {
        base: string,
        muted: string,
        darkend: string
    },
    base: {
        black: string,
        red: string,
        orange: string,
        green: string,
        yellow: string,
        blue: string,
        magenta: string,
        purple: string,
        cyan: string,
        white: string
    },
    git: {
        added: string,
        deleted: string,
        modified: string,
        untracked: string,
        ignored: string
    }
};

export type VsTheme = {
    name: string,
    id: string,
    type?: string,
    author?: string,
    colors: any,
    tokenColors?: any;
};