function findMinAndRemove(array){
  let index = 0
  let min = array[0]
  let newArr = []
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i]
      index = i
    }
  }
  array.slice(index, 1)
  return min
}

function insertionSort(array){
  let min
  let sorted = []
  while (array.length !== 0) {
    sorted.push(findMinAndRemove(array))
  }
  return sorted
}
