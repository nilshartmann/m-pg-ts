// funktioniert, weil das explizite export
// in lib verwendet wird, das anzeigt,
// welche Datei verwendet werden soll, wenn
// per CommonJS/require das Modul verwendet wird
import { sayHello } from "@nilshartmann/lib";

export function app() {
  console.log("app - sayHello", sayHello());
}
