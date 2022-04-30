// funktioniert, weil das explizite export
// in lib verwendet wird, das anzeigt,
// welche Datei verwendet werden soll, wenn
// per CommonJS/require das Modul verwendet wird
import { sayHello } from "@nilshartmann/lib";
import { sayHelloToCommonJs } from "@nilshartmann/lib-cjs";

export function app() {
  console.log("app - sayHello", sayHello());
  console.log("app - hello cjs", sayHelloToCommonJs());
}
