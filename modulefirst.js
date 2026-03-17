// const simple= require("./modulesecond.mjs");
// simple();
import simple2, {simple} from "./modulesecond.mjs"
simple();
// simple23();
import * as a2 from "./modulesecond.mjs"
console.log(a2.simple())