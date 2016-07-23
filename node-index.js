var ffi = require('ffi');
const path = require('path');

var externalPath = path.join(__dirname, '/native/target/release/fibonacci')

var lib = ffi.Library(externalPath, {  
  fibonacci: ['int', ['int']]
});

var num = lib.fibonacci(20);  

console.log(num)