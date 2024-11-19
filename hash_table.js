const HASH_SIZE = 37;

// Element()
function Element(key, value) {
  this.key = key;
  this.value = value;
}

// HashTable()
function HashTable() {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
}

// hashCode() key -> hash fn -> index 해시 함수
HashTable.prototype.hashCode = function (key) {
  let hash = 0;
  //loselose hash
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }

  return hash % HASH_SIZE;
};

// put()
HashTable.prototype.put = function (key, value) {
  let index = this.hashCode(key);
  console.log(`key: ${key} -> index: ${index}`);

  if (this.table[index] !== undefined) {
    return false;
  }

  this.table[index] = new Element(key, value);
  this.length++;

  return true;
};

// get()
HashTable.prototype.get = function (key) {
  return this.table[this.hashCode(key)];
};

// remove()
HashTable.prototype.remove = function (key) {
  let element = this.table[this.hashCode(key)];

  if (element !== undefined) {
    delete this.table[this.hashCode(key)];
    this.length--;
  }

  return element;
};

// clear()
HashTable.prototype.clear = function () {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
};

// size()
HashTable.prototype.size = function () {
  return this.length;
};

// getBuffer()
HashTable.prototype.getBuffer = function () {
  let array = [];
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i]) {
      array.push(this.table[i]);
    }
  }

  return array;
};

HashTable.prototype.print = function () {
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i]) {
      console.log(i + ' -> ' + this.table[i].key + ' : ' + this.table[i].value);
    }
  }
};

let ht = new HashTable();
// 충돌이 나는 경우
ht.put('Ana', 172);
ht.put('Donnie', 183);
ht.put('Sue', 163);
ht.put('Jamie', 168);
ht.put('Paul', 190);

ht.print();
// key: Ana -> index: 13
// key: Donnie -> index: 13
// key: Sue -> index: 5
// key: Jamie -> index: 5
// key: Paul -> index: 32
// 5 -> Sue : 163
// 13 -> Ana : 172
// 32 -> Paul : 190
// 충돌 발생! Donnie와 Jamie 데이터가 제대로 삽입되지 않았다.

// djb2 hash size
const HASH_SIZE = 1013;

// hashCode() key -> hash fn -> index 해시 함수
HashTable.prototype.hashCode = function (key) {
  // djb2 hash
  let hash = 5381;
  for (let i = 0; i < key.length; i++) {
    hash = hash * 33 + key.charCodeAt(i);
  }
  // //loselose hash
  // let hash = 0;
  // for (let i = 0; i < key.length; i++) {
  //   hash += key.charCodeAt(i);
  // }

  return hash % HASH_SIZE;
};
ht.put('Ana', 172);
ht.put('Donnie', 183);
ht.put('Sue', 163);
ht.put('Jamie', 168);
ht.put('Paul', 190);

ht.print();

// key: Ana -> index: 925
// key: Donnie -> index: 278
// key: Sue -> index: 502
// key: Jamie -> index: 962
// key: Paul -> index: 54
// 54 -> Paul : 190
// 278 -> Donnie : 183
// 502 -> Sue : 163
// 925 -> Ana : 172
// 962 -> Jamie : 168
