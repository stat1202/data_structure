const HASH_SIZE = 5;

// Element()
function Element(key, value) {
  this.key = key;
  this.value = value;
}

// LinearHashTable()
function LinearHashTable() {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
}

// hashCode() key -> hash fn -> index 해시 함수
LinearHashTable.prototype.hashCode = function (key) {
  let hash = 0;
  //loselose hash
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }

  return hash % HASH_SIZE;
};

// put()
LinearHashTable.prototype.put = function (key, value) {
  let index = this.hashCode(key);
  let startIndex = index;
  console.log(`key: ${key} -> index: ${index}`);

  do {
    if (this.table[index] === undefined) {
      this.table[index] = new Element(key, value);
      this.length++;
      return true;
    }

    index = (index + 1) % HASH_SIZE;
  } while (index !== startIndex);

  return false;
};

// get()
LinearHashTable.prototype.get = function (key) {
  let index = this.hashCode(key);
  let startIndex = index;

  do {
    if (this.table[index] !== undefined && this.table[index].key === key) {
      return this.table[index].value;
    }

    index = (index + 1) % HASH_SIZE;
  } while (index !== startIndex);

  return undefined;
};

// remove()
LinearHashTable.prototype.remove = function (key) {
  let index = this.hashCode(key);
  let startIndex = index;

  do {
    if (this.table[index] !== undefined && this.table[index].key === key) {
      let element = this.table[index];
      delete this.table[index];
      this.length--;

      return element;
    }
    index = (index + 1) % HASH_SIZE;
  } while (index !== startIndex);

  return undefined;
};

// clear()
LinearHashTable.prototype.clear = function () {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
};

// size()
LinearHashTable.prototype.size = function () {
  return this.length;
};

// getBuffer()
LinearHashTable.prototype.getBuffer = function () {
  let array = [];
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i]) {
      array.push(this.table[i]);
    }
  }

  return array;
};

// print()
LinearHashTable.prototype.print = function () {
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i]) {
      console.log(i + ' -> ' + this.table[i].key + ' : ' + this.table[i].value);
    }
  }
};

let lht = new LinearHashTable();

lht.put('Ana', 172);
lht.put('John', 179);
lht.put('Donnie', 183);
lht.put('Mindy', 190);
console.log(lht.put('Paul', 168));
console.log(lht.put('Sue', 163));

lht.print();

console.log(lht.get('Ana'));
console.log(lht.get('Paul'));
console.log(lht.get('Kim'));
console.log(lht.remove('Ana'));
console.log(lht.remove('Kim'));

lht.print();
