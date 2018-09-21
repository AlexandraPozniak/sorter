class Sorter {
  constructor() {
    this.arr = [];
    this.setComparator((a, b) => a - b);
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    let array = new Array();
    for (let i = 0; i<this.arr.length; i++){
      array[i] = this.arr[i];
    }
      return array;
  }

  sort(indices) {
      let sortArray = new Array();
      for (let i = 0; i<indices.length; i++){
          sortArray[i] = this.arr[indices[i]];
      }
      sortArray.sort(this.compareFunction);
      indices.sort((a, b) => a - b);
      for( var i = 0; i < indices.length; i++ ){
      this.arr[indices[i]] = sortArray[i];
    }
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;