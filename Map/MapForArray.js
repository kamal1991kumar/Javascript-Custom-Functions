Array.prototype._map = function mapForArray(callback) {
    var index = 0;
    var newArr = [];
    while (index < this.length) {
        var result = callback(this[index], index, this);
        newArr.push(result);
        index++;
    }
    return newArr;
}

var square = [2, 4]._map((element) => {
    return element * element;
});  
console.log(square); // [4, 16]