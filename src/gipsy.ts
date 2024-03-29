import { themeBuilder } from "./core/theme-builder";
import { generateTheme } from "./core/theme-generator";

async function run() {

    const gipsyDark = generateTheme('gipsy-dark', 'Gipsy Dark', 'dark');

    await themeBuilder(gipsyDark);
}

run();