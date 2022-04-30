import { helloWorldFromCommonJs } from "./internal";

export function sayHelloToCommonJs() {
  return "Hello " + helloWorldFromCommonJs();
}
