import * as fs from 'fs';
import * as path from 'path';
import { VsTheme } from '../types';

const themesDir = path.resolve(__dirname, '..', '..', 'themes');

export async function themeBuilder(theme: VsTheme) {
  try {
    if (!fs.existsSync(themesDir)) {
      await fs.promises.mkdir(themesDir, { recursive: true });
    }

    const themeData = JSON.stringify(theme);
    const filePath = path.join(themesDir, `${theme.id}.json`);

    await fs.promises.writeFile(filePath, themeData);

    console.log(`Theme "${theme.name}" saved at: ${filePath}`);
  } catch (error) {
    console.log(`Error while saving Theme: [${theme.id}], Error: [${error}]`);
  }
}
