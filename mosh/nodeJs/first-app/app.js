/* function sayHello(name){
    console.log(`Hello ${name}`);
}

sayHello("Savvy"); */
/*

//1.0: NODE MODULE SYSTEM
//GLOBAL OBJECTS
setTimeout()
clearTimeout()

setInterval()
clearInterval()

but browsers have a window object that represent a global scope. where all variable and function that are defined globally can be accessed via the window object

there is the window object and global object.
window.setTimeout() or global.setTimeout()
in node we dont have the window object but rather the global object. 

declared variables are global only in scope of the file


1.MODULES
Every file ina node app is called a module. in a module the variables and functions inside the module has a scope to that file and not available outside of that module
app.js is the main module
console.log(module);
*/


//Loading a Module
/* let logger = require('./logger');//the file or module to load
logger('Hello')  */// the exported function assigned to variable logger. 

//Path Module
/* 
const path = require('path'); 
const pathObj = path.parse(__filename);
console.log(pathObj) */

//OS MODULE
/* const os = require('os');
const totalMem = os.totalmem();
const freeMem = os.freemem();

console.log(`Total memory: ${totalMem}\nFree memory: ${freeMem}`)
 */


//FILE SYSTEM MODULE
const fs = require('fs');
const files = fs.readdirSync('./');
console.log(files)