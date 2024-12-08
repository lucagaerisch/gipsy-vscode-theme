import { themeBuilder } from './core/theme-builder';
import { generateTheme } from './core/theme-generator';

async function run() {
  try {
    const gipsyDark = generateTheme('gipsy-dark', 'Gipsy Dark', 'dark');
    const gipsyLight = generateTheme('gipsy-light', 'Gipsy Light', 'ligth');

    // Build all themes
    // Themes also need to be added in the package.json
    await themeBuilder(gipsyDark);
    await themeBuilder(gipsyLight);
  } catch (error) {
    console.log(
      `Some error occured while generating the themes! Error:[${error}]`,
    );
  }
}

run();
