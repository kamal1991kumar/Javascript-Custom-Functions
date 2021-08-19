Object.prototype._reduce = function(callback, initialValue = 0) {
    var index=0;
    var keys = Object.keys(this);
    var result = initialValue;
    while(index<keys.length){
        var value = this[keys[index]];
        result = callback(result, value, keys[index], index, this);
        index++;
    }
    return result;
};

var sum = {a: 4, b: 8}._reduce((accumulator, value)=>{
    return accumulator + value;
});

console.log(sum); // 12

var square = {a: 4, b: 8}._reduce((accumulator, value)=>{
    return [...accumulator, (value*value)];
}, []);

console.log(square); // [ 16, 64 ]