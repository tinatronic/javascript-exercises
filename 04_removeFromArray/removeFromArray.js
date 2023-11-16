const removeFromArray = function(arr, el) {
    let filtered =  arr.filter((key) => {
        return key !== el;
    });
    
     return filtered;
};

// Do not edit below this line
module.exports = removeFromArray;
