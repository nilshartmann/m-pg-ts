# ESM Beispiel

Dieses Repo ist ein MonoRepo/Yarn Workspace mit drei Modulen (s.u.), um die Verwendung
von ESM-Modulen in TypeScript zu zeigen.

# Ausführen

- Im Root-Verzeichnis `yarn install`
- Im `lib`-Verzeichnis `yarn build` -> TS compiliert nach `dist` (ESM-Code!)

- Im Verzeichnis `app`:
  - `yarn build` -> TS compiliert nach `dist` (Common-JS code!)
  - `yarn start` -> verwendet compilierten code aus `build` geht nicht, weil CJS kein ESM verwenden (hier: lib) darf
- Im Verzeichnis `app-ts`:
  - `yarn build` -> TS compiliert nach `dist` (ESM code!)
  - `yarn start` -> funktioniert, da app und lib ESM sind (verwendet den compilierten Code aus `build`)
  - `yarn dev` -> geht -> verwendet `ts-node` mit `--esm` flag (https://github.com/TypeStrong/ts-node/issues/1007)

# Module

## lib

- Modul, das "nur" ESM-Code enthält (=> p-queue), aber kein CommonJS
- Wird von `app` und `app-esm` verwendet

## app

- TS app, compiliert zu common-js, kann deshaöb lib nicht verwenden :-(

## app-esm

- TS app, compiliert nach ESM (imports bleiben erhalten)

- Änderungen:
  - package.json: `type: module`, damit NodeJS die import-Statements zur Laufzeit verarbeitet (oder alle Dateien in .mjs ändern)
  - Imports innerhalb des Modules: verwenden `.js`-Endung (!)
    - siehe `app.ts`
    - Das ist Bedingung, wenn man `import` nativ in NodeJS verwendet
    - Das muss leider in bestehendem Code angepasst werden
  - tsconfig: `"module": "ES2022"`, `"moduleResolution": "node",`
