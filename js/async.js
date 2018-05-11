console.log('1');
console.log('2');
setTimeout(function() {
    console.log('test');
}, 5000);
setTimeout(function() {
    console.log('test 1');
}, 7000);
setTimeout(function() {
    const a = 10; 
    console.log('test 2');
}, 2000);
setTimeout(function() {
    console.log('test 3');
}, 0);
setTimeout(function() {
    console.log('test 4');
}, 1000);
setTimeout(function() {
    console.log('test 5');
}, 0);

console.log('3');
console.log('4');
console.log('5');
console.log('6');

// The ORDER OF ASYNC FUNCTION RESULTS DO NOT MATTER!!!!!!!!!!!!!!!!!
