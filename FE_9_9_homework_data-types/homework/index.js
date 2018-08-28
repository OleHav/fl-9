function findType(passedParameter) {
    return typeof passedParameter;
} 

function forEach(Arr, fn) {
    for (let i = 0; i < Arr.length; i++) {
        fn(Arr[i]);
    }
} 

function map(Arr, fn) {
    let newArray = [];
    forEach(Arr, function(el) {
        newArray.push(fn(el));
    })
    return newArray;
}

function filter(Arr, fnFilter) {
    let newArray = [];
    forEach(Arr, function(el) {
        if(fnFilter(el)) {
            newArray.push(el);
        }
    })
    return newArray;
}

function getAdultAppleLovers(data) {
    return map(
        filter(data, function(el){
            return el.age >= 18 && el.favoriteFruit === 'apple';  
    }), function(el) {
        return el.name;
    })
}

function keysOfAnyObj(Obj){
    let keysArr = [];
    for(let key in Obj) {
        if (Object.prototype.hasOwnProperty.call(Obj, key)) {
            keysArr.push(key);
        }
    }
    return keysArr;
}

function values(Obj) {
    let valuesArr = [];
    for(let key in Obj) {
        if (Object.prototype.hasOwnProperty.call(Obj, key)) {
            valuesArr.push(Obj[key]);
        }
    }
    return valuesArr;
}

function showFormattedDate (date) {
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `It is ${date.getDate()} of ${monthNames[date.getMonth()]}, ${date.getFullYear()}`;
}