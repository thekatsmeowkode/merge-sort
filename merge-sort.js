function mergeSort(array) {
    if (array.length <=1) {return array}
    let half = Math.floor(array.length/2)
    let splitRight = mergeSort(array.slice(half))
    let splitLeft = mergeSort(array.slice(0, half))

    return merge(splitLeft, splitRight)
}

function merge(left, right) {
    let sorted = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {sorted.push(left.shift())}
    }
}

array = [4, 3, 2, 5, 1, 6]
mergeSort(array)
console.log(mergeSort(array))