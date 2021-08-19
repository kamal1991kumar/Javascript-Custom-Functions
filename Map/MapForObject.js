Object.prototype._map = function mapForArray(callback, property=0) {
    var getObjectKeys = Object.keys(this);
    var index = 0;
    var newArr = [];
    while (index < getObjectKeys.length) {
        var key = getObjectKeys[index];
        if(property){
            if(key === property){
                var result = callback(this[key], index, this);
                newArr.push(result);
            }
        } else {
            var result = callback(this[key], index, this);
            newArr.push(result);
        }
        index++;
    }
    return newArr;
}

var square = {a: 4, b: 8}._map((element) => {
    return element * element;
});  
console.log(square); // [16, 64]

var square = {a: 4, b: 8}._map((element) => {
    return element * element;
}, 'a');  
console.log(square); // [16]

var square = {a: 4, b: 8}._map((element) => {
    return element * element;
}, 'c');  
console.log(square); // []