function mapToNegativize(sourceArray) {
    let reverse = [];
    sourceArray.forEach(num => {
     reverse.push(num * -1)
    })
    return reverse;
}

function mapToNoChange(sourceArray) {
    let newArray = sourceArray;
    return newArray;
}

function mapToDouble(sourceArray) {
    let double = [];
    sourceArray.forEach(num => {
     double.push(num * 2)
    })
    return double;
}

function mapToSquare(sourceArray) {
    let square = [];
    sourceArray.forEach(num => {
     square.push(num ** 2)
    })
    return square;
}

function reduceToTotal(sourceArray, startPoint=0) {
    sourceArray.forEach(num => {
        startPoint += num;
    })
    return startPoint;
}

function reduceToAllTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (!sourceArray[i]) return false;
    }
    return true;
}

function reduceToAnyTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i]) return true;
    }
    return false;
}