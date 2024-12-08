/* eslint-disable @typescript-eslint/naming-convention */
import { Colors, VsTheme } from '../types';
import dark from '../colors/dark.json';
import light from '../colors/light.json';

function getColors(theme: string): Colors {
  switch (theme) {
    case 'gipsy-dark':
      return dark;
    case 'gipsy-light':
      return light;
    default:
      throw new Error(`Colors for "${theme}" not found!`);
  }
}

function hexBrightness(hex: string, amount: number): string {
  hex = hex.replace('#', '');

  if (hex.length === 6) {
    const decimalColor = parseInt(hex, 16);
    let r = (decimalColor >> 16) + amount;
    r > 255 && (r = 255);
    r < 0 && (r = 0);
    let g = (decimalColor & 0x0000ff) + amount;
    g > 255 && (g = 255);
    g < 0 && (g = 0);
    let b = ((decimalColor >> 8) & 0x00ff) + amount;
    b > 255 && (b = 255);
    b < 0 && (b = 0);
    return `#${(g | (b << 8) | (r << 16)).toString(16)}`;
  } else {
    return hex;
  }
}

function addAlpha(hex: string, opacity: number): string {
  // opacity value between 0 and 1.
  var _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
  return hex + _opacity.toString(16).toUpperCase();
}

export function generateTheme(
  theme: string,
  name: string,
  type?: string,
): VsTheme {
  const colors = getColors(theme);

  return {
    name: `${name}`,
    id: `${theme}`,
    type: `${type}`,
    author: 'Luca Gärisch',
    colors: {
      'activityBar.activeFocusBorder': colors.accent,
      'activityBar.background': colors.bg.primary,
      'activityBar.border': colors.bg.primary,
      'activityBar.foreground': colors.accent,
      'activityBar.inactiveForeground': colors.fg.darkend,
      'activityBarBadge.background': colors.accent,
      'activityBarBadge.foreground': colors.base.black,

      'button.background': colors.bg.tertiary,
      'button.foreground': colors.fg.base,
      //"button.hoverBackground": ,
      'button.secondaryBackground': colors.bg.tertiary,
      'button.secondaryForeground': colors.fg.base,
      //"button.secondaryHoverBackground": ,
      'button.separator': colors.bg.overlay,

      'charts.blue': colors.base.blue,
      'charts.foreground': colors.fg.base,
      'charts.green': colors.base.green,
      'charts.lines': colors.fg.muted,
      'charts.orange': colors.base.orange,
      'charts.purple': colors.base.purple,
      'charts.red': colors.base.red,
      'charts.yellow': colors.base.yellow,

      'checkbox.background': colors.bg.secondary,
      'checkbox.border': colors.bg.overlay,
      'checkbox.foreground': colors.base.green,

      'commandCenter.activeBackground': colors.bg.overlay,
      'commandCenter.activeForeground': colors.fg.muted,
      'commandCenter.background': colors.bg.primary,
      'commandCenter.border': colors.bg.overlay,
      //"commandCenter.foreground": ,

      'debugConsole.errorForeground': colors.base.red,
      'debugConsole.infoForeground': colors.base.cyan,
      'debugConsole.sourceForeground': colors.base.white,
      'debugConsole.warningForeground': colors.base.orange,
      'debugConsoleInputIcon.foreground': colors.base.yellow,
      'debugExceptionWidget.background': colors.bg.tertiary,
      'debugExceptionWidget.border': colors.bg.overlay,
      'debugIcon.breakpointCurrentStackframeForeground': colors.base.yellow,
      'debugIcon.breakpointDisabledForeground': colors.fg.darkend,
      'debugIcon.breakpointForeground': colors.base.red,
      'debugIcon.breakpointStackframeForeground': colors.base.white,
      'debugIcon.breakpointUnverifiedForeground': colors.base.orange,
      'debugIcon.continueForeground': colors.base.white,
      'debugIcon.disconnectForeground': colors.base.white,
      'debugIcon.pauseForeground': colors.base.white,
      'debugIcon.restartForeground': colors.base.green,
      'debugIcon.startForeground': colors.base.green,
      'debugIcon.stepBackForeground': colors.base.white,
      'debugIcon.stepIntoForeground': colors.base.white,
      'debugIcon.stepOutForeground': colors.base.white,
      'debugIcon.stepOverForeground': colors.base.white,
      'debugIcon.stopForeground': colors.base.red,
      'debugTokenExpression.boolean': colors.base.orange,
      'debugTokenExpression.error': colors.base.red,
      'debugTokenExpression.name': colors.base.cyan,
      'debugTokenExpression.number': colors.base.magenta,
      'debugTokenExpression.string': colors.base.yellow,
      'debugTokenExpression.value': colors.base.white,
      'debugToolBar.background': colors.bg.tertiary,
      'debugView.exceptionLabelBackground': colors.base.red,
      'debugView.exceptionLabelForeground': colors.bg.overlay,
      'debugView.stateLabelBackground': colors.base.green,
      'debugView.stateLabelForeground': colors.bg.overlay,
      'debugView.valueChangedHighlight': colors.base.yellow,

      'dropdown.background': colors.bg.overlay,
      'dropdown.border': colors.transparent,
      'dropdown.foreground': colors.fg.base,
      'dropdown.listBackground': colors.bg.overlay,

      'editor.background': colors.bg.primary,
      'editor.foreground': colors.fg.base,
      'editor.lineHighlightBorder': colors.transparent,
      'editor.selectionHighlichtBorder': colors.transparent,
      'editor.wordHighlightBorder': colors.transparent,
      'editor.wordHighlightStrongBorder': colors.transparent,
      'editorBracketHighlight.foreground1': colors.base.red,
      'editorBracketHighlight.foreground2': colors.base.orange,
      'editorBracketHighlight.foreground3': colors.base.magenta,
      'editorBracketHighlight.foreground4': colors.base.green,
      'editorBracketHighlight.foreground5': colors.base.cyan,
      'editorBracketHighlight.foreground6': colors.base.yellow,
      'editorCursor.foreground': colors.fg.base,
      'editorError.background': colors.transparent,
      'editorError.border': colors.transparent,
      'editorError.foreground': colors.base.red,
      'editorGroupHeader.noTabsBackground': colors.bg.secondary,
      'editorGroupHeader.tabsBackground': colors.bg.secondary,
      'editorGroupHeader.tabsBorder': colors.transparent,
      'editorGutter.addedBackground': colors.base.green,
      'editorGutter.background': colors.bg.primary,
      'editorGutter.deletedBackground': colors.base.red,
      'editorGutter.foldingControlForeground': colors.fg.muted,
      'editorGutter.modifiedBackground': colors.base.orange,
      'editorInfo.foreground': colors.base.cyan,
      'editorLightBulb.foreground': colors.base.yellow,
      'editorLightBulbAutoFix.foreground': colors.base.green,
      'editorLineNumber.activeForeground': colors.fg.muted,
      //"editorLineNumber.foreground": "#525053",
      'editorLink.activeForeground': colors.base.cyan,
      //"editorMarkerNavigation.background": "#363537",
      'editorMarkerNavigationError.background': colors.base.red,
      'editorMarkerNavigationInfo.background': colors.base.cyan,
      'editorMarkerNavigationWarning.background': colors.base.orange,
      'editorOverviewRuler.addedForeground': colors.base.green,
      'editorOverviewRuler.border': colors.bg.overlay,
      //"editorOverviewRuler.currentContentForeground": "#363537",
      'editorOverviewRuler.deletedForeground': colors.base.red,
      'editorOverviewRuler.errorForeground': colors.base.red,
      //"editorOverviewRuler.findMatchForeground": "#f7f1ff26",
      //"editorOverviewRuler.incomingContentForeground": "#363537",
      'editorOverviewRuler.infoForeground': colors.base.cyan,
      'editorOverviewRuler.modifiedForeground': colors.base.orange,
      //"editorOverviewRuler.rangeHighlightForeground": "#f7f1ff26",
      //"editorOverviewRuler.selectionHighlightForeground": "#f7f1ff26",
      'editorOverviewRuler.warningForeground': colors.base.orange,
      //"editorOverviewRuler.wordHighlightForeground": "#f7f1ff26",
      //"editorOverviewRuler.wordHighlightStrongForeground": "#f7f1ff26",
      'editorPane.background': colors.bg.overlay,
      //"editorRuler.foreground": "#525053",
      //"editorSuggestWidget.background": "#363537",
      //"editorSuggestWidget.border": "#363537",
      'editorSuggestWidget.foreground': colors.fg.muted,
      'editorSuggestWidget.highlightForeground': colors.fg.base,
      //"editorSuggestWidget.selectedBackground": "#69676c",
      //"editorUnnecessaryCode.opacity": "#000000a5",
      'editorWarning.background': colors.transparent,
      'editorWarning.border': colors.transparent,
      'editorWarning.foreground': colors.base.orange,
      //"editorWhitespace.foreground": "#525053",
      //"editorWidget.background": "#363537",
      //"editorWidget.border": "#363537",
      errorForeground: colors.base.red,

      'extensionBadge.remoteForeground': colors.accent,
      'extensionBadge.remoteBackground': colors.bg.primary,
      'extensionButton.prominentBackground': colors.bg.primary,
      'extensionButton.prominentForeground': colors.fg.base,
      //"extensionButton.prominentHoverBackground": ,
      'extensionIcon.preReleaseForeground': colors.base.magenta,
      'extensionIcon.sponsorForeground': colors.base.cyan,
      'extensionIcon.starForeground': colors.base.yellow,
      'extensionIcon.verifiedForeground': colors.base.green,

      focusBorder: colors.bg.tertiary,
      foreground: colors.fg.base,

      'gitDecoration.addedResourceForeground': colors.git.added,
      //"gitDecoration.conflictingResourceForeground": ,
      'gitDecoration.deletedResourceForeground': colors.git.deleted,
      'gitDecoration.ignoredResourceForeground': colors.git.ignored,
      'gitDecoration.modifiedResourceForeground': colors.git.modified,
      'gitDecoration.stageDeletedResourceForeground': colors.git.deleted,
      'gitDecoration.stageModifiedResourceForeground': colors.git.modified,
      'gitDecoration.untrackedResourceForeground': colors.git.untracked,

      'list.activeSelectionBackground': addAlpha(colors.accent, 0.5),
      //"list.activeSelectionForeground": "#fce566",
      //"list.dropBackground": "#191919bf",
      'list.errorForeground': colors.base.red,
      'list.focusBackground': colors.bg.overlay,
      'list.focusForeground': colors.fg.base,
      'list.highlightForeground': colors.fg.base,
      'list.hoverBackground': addAlpha(colors.base.black, 0.3),
      'list.hoverForeground': colors.fg.base,
      'list.inactiveFocusBackground': colors.bg.overlay,
      //"list.inactiveSelectionBackground": "#bab6c00c",
      //"list.inactiveSelectionForeground": ,
      'list.invalidItemForeground': colors.base.red,
      'list.warningForeground': colors.base.orange,
      'listFilterWidget.background': colors.bg.overlay,
      'listFilterWidget.noMatchesOutline': colors.base.red,
      'listFilterWidget.outline': colors.bg.overlay,

      'notificationCenter.border': colors.transparent,
      'notificationCenterHeader.background': colors.bg.overlay,
      'notificationCenterHeader.foreground': colors.fg.muted,
      'notificationLink.foreground': colors.accent,
      'notifications.background': colors.bg.overlay,
      'notifications.border': colors.transparent,
      'notifications.foreground': colors.fg.muted,
      'notificationsErrorIcon.foreground': colors.base.red,
      'notificationsInfoIcon.foreground': colors.base.blue,
      'notificationsWarningIcon.foreground': colors.base.orange,
      'notificationToast.border': colors.transparent,

      'panel.background': colors.bg.primary,
      'panel.border': colors.bg.tertiary,
      //"panel.dropBackground": ,
      'panelTitle.activeBorder': colors.accent,
      'panelTitle.activeForeground': colors.accent,
      'panelTitle.inactiveForeground': colors.fg.darkend,

      'pickerGroup.border': colors.bg.overlay,
      'pickerGroup.foreground': colors.accent,

      'problemsErrorIcon.foreground': colors.base.red,
      'problemsInfoIcon.foreground': colors.base.blue,
      'problemsWarningIcon.foreground': colors.base.orange,

      'progressBar.background': colors.bg.tertiary,

      'settings.checkboxBackground': colors.bg.secondary,
      'settings.checkboxBorder': colors.bg.overlay,
      'settings.checkboxForeground': colors.base.green,
      'settings.dropdownBackground': colors.bg.secondary,
      'settings.dropdownBorder': colors.bg.overlay,
      'settings.dropdownForeground': colors.fg.base,
      'settings.dropdownListBorder': colors.bg.overlay,
      'settings.headerForeground': colors.accent,
      'settings.modifiedItemForeground': colors.accent,
      'settings.modifiedItemIndicator': colors.accent,
      'settings.numberInputBackground': colors.bg.secondary,
      'settings.numberInputBorder': colors.bg.overlay,
      'settings.numberInputForeground': colors.fg.base,
      //"settings.rowHoverBackground": ,
      'settings.textInputBackground': colors.bg.secondary,
      'settings.textInputBorder': colors.bg.overlay,
      'settings.textInputForeground': colors.fg.base,

      'sideBar.background': colors.bg.secondary,
      'sideBar.border': colors.bg.primary,
      //"sideBar.dropBackground": ,
      'sideBar.foreground': colors.fg.darkend,
      'sideBarSectionHeader.background': colors.bg.secondary,
      'sideBarSectionHeader.foreground': colors.fg.darkend,
      'sideBarTitle.foreground': colors.fg.muted,

      'statusBar.background': colors.bg.primary,
      'statusBar.border': colors.transparent,
      'statusBar.debuggingBackground': colors.bg.tertiary,
      'statusBar.debuggingBorder': colors.bg.primary,
      'statusBar.debuggingForeground': colors.fg.base,
      'statusBar.focusBorder': colors.transparent,
      'statusBar.foreground': colors.fg.darkend,
      'statusBar.noFolderBackground': colors.bg.primary,
      'statusBar.noFolderBorder': colors.transparent,
      'statusBar.noFolderForeground': colors.fg.darkend,
      'statusBarItem.activeBackground': colors.bg.overlay,
      'statusBarItem.errorBackground': colors.bg.primary,
      'statusBarItem.errorForeground': colors.base.red,
      'statusBarItem.focusBorder': colors.transparent,
      //"statusBarItem.hoverBackground": ,
      //"statusBarItem.prominentBackground": ",
      //"statusBarItem.prominentHoverBackground": ,
      'statusBarItem.remoteBackground': colors.bg.primary,
      'statusBarItem.remoteForeground': colors.accent,

      'tab.activeBackground': colors.bg.primary,
      'tab.activeBorder': colors.accent,
      'tab.activeForeground': colors.accent,
      'tab.activeModifiedBorder': colors.bg.tertiary,
      'tab.border': colors.transparent,
      'tab.hoverBackground': colors.bg.primary,
      'tab.hoverBorder': colors.bg.tertiary,
      'tab.hoverForeground': colors.fg.base,
      'tab.inactiveBackground': colors.bg.secondary,
      'tab.inactiveForeground': colors.fg.muted,
      'tab.inactiveModifiedBorder': colors.bg.tertiary,
      'tab.lastPinnedBorder': colors.bg.tertiary,
      'tab.unfocusedActiveBorder': colors.fg.darkend,
      'tab.unfocusedActiveForeground': colors.fg.muted,
      'tab.unfocusedActiveModifiedBorder': colors.bg.tertiary,
      'tab.unfocusedHoverBackground': colors.bg.primary,
      'tab.unfocusedHoverBorder': colors.transparent,
      'tab.unfocusedHoverForeground': colors.fg.muted,
      'tab.unfocusedInactiveForeground': colors.fg.darkend,
      'tab.unfocusedInactiveModifiedBorder': colors.bg.tertiary,

      'terminal.ansiBlack': colors.base.black,
      'terminal.ansiBlue': colors.base.blue,
      'terminal.ansiBrightBlack': hexBrightness(colors.base.black, 100),
      'terminal.ansiBrightBlue': hexBrightness(colors.base.blue, 100),
      'terminal.ansiBrightCyan': hexBrightness(colors.base.cyan, 100),
      'terminal.ansiBrightGreen': hexBrightness(colors.base.green, 100),
      'terminal.ansiBrightMagenta': hexBrightness(colors.base.magenta, 100),
      'terminal.ansiBrightRed': hexBrightness(colors.base.red, 100),
      'terminal.ansiBrightWhite': hexBrightness(colors.base.white, 100),
      'terminal.ansiBrightYellow': hexBrightness(colors.base.yellow, 100),
      'terminal.ansiCyan': colors.base.cyan,
      'terminal.ansiGreen': colors.base.green,
      'terminal.ansiMagenta': colors.base.magenta,
      'terminal.ansiRed': colors.base.red,
      'terminal.ansiWhite': colors.base.white,
      'terminal.ansiYellow': colors.base.yellow,
      'terminal.background': colors.bg.primary,
      'terminal.foreground': colors.fg.base,
      //"terminal.selectionBackground": ,
      'terminalCommandDecoration.defaultBackground': colors.base.white,
      'terminalCommandDecoration.errorBackground': colors.base.red,
      'terminalCommandDecoration.successBackground': colors.base.green,
      'terminalCursor.background': colors.transparent,
      'terminalCursor.foreground': colors.fg.base,

      'textLink.activeForeground': colors.fg.base,
      'textLink.foreground': colors.accent,

      'titleBar.activeBackground': colors.bg.primary,
      'titleBar.activeForeground': colors.fg.muted,
      'titleBar.border': colors.bg.primary,
      'titleBar.inactiveBackground': colors.bg.primary,
      'titleBar.inactiveForeground': colors.fg.darkend,

      'walkThrough.embeddedEditorBackground': colors.bg.secondary,

      'welcomePage.buttonBackground': colors.bg.tertiary,
      //"welcomePage.buttonHoverBackground": ,
      'welcomePage.progress.background': colors.bg.tertiary,
      'welcomePage.progress.foreground': colors.accent,
      //"welcomePage.titleBackground": ,
    },
    tokenColors: [
      // Comments
      {
        scope: [
          'comment keyword',
          'comment markup.underline.link',
          'comment string',
          'comment punctuation.definition',
          'comment punctuation',
          'comment text',
        ],
        settings: {
          foreground: colors.fg.darkend,
        },
      },

      // Markdown
      {
        scope: 'punctuation.definition.list.begin.markdown',
        settings: {
          foreground: colors.base.orange,
        },
      },
      {
        scope: 'punctuation.definition.heading.markdown',
        settings: {
          foreground: colors.base.orange,
          fontStyle: 'bold',
        },
      },
    ],
  };
}
