Array.prototype._reduce = function(callback, initialValue = 0) {
    var index=0;
    var result = initialValue;
    while(index<this.length){
        result = callback(result, this[index], index, this);
        index++;
    }
    return result;
};

var sum = [1,2,3,4]._reduce((accumulator, value)=>{
    return accumulator + value;
});

console.log(sum); // 10

var square = [1,2,3,4]._reduce((accumulator, value)=>{
    return [...accumulator, (value*value)];
}, []);

console.log(square); // [ 1, 4, 9, 16 ]