function findMinAndRemove(array){
  let index = 0
  let min = array[0]
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
  while (array.length != 0) {
    min = findMinAndRemove(array)
    sorted.push(min)
  }
  return sorted
}
