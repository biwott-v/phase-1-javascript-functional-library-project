// Collection Functions

function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i]);
        }
    } else {
        const values = Object.values(collection);
        for (const value of values) {
            callback(value);
        }
    }
    return collection;
}

function myMap(collection, callback) {
    const result = [];
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            result.push(callback(collection[i], i));
        }
    } else {
        const entries = Object.entries(collection);
        for (const [key, value] of entries) {
            result.push(callback(value, key));
        }
    }
    return result;
}

function myReduce(collection, callback, acc) {
    let values = Array.isArray(collection) ? [...collection] : Object.values(collection);
    let startIdx = 0;
    
    if (acc === undefined) {
        if (values.length === 0) throw new Error("Empty collection with no initial value");
        acc = values[0];
        startIdx = 1;
    }
    
    for (let i = startIdx; i < values.length; i++) {
        acc = callback(acc, values[i], collection);
    }
    return acc;
}

function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i], i)) return collection[i];
        }
    } else {
        const entries = Object.entries(collection);
        for (const [key, value] of entries) {
            if (predicate(value, key)) return value;
        }
    }
    return undefined;
}

function myFilter(collection, predicate) {
    const result = [];
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i], i)) result.push(collection[i]);
        }
    } else {
        const entries = Object.entries(collection);
        for (const [key, value] of entries) {
            if (predicate(value, key)) result.push(value);
        }
    }
    return result;
}

function mySize(collection) {
    return Array.isArray(collection) 
        ? collection.length 
        : Object.keys(collection).length;
}

// Array Functions

function myFirst(array, n = 1) {
    return n === 1 ? array[0] : array.slice(0, n);
}

function myLast(array, n = 1) {
    return n === 1 ? array[array.length - 1] : array.slice(-n);
}

// Object Functions

function myKeys(object) {
    return Object.keys(object);
}

function myValues(object) {
    return Object.values(object);
}
