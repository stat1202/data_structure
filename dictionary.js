// Dictionary()
function Dictionary(items = {}) {
  this.items = items;
}

// getBuffer()
Dictionary.prototype.getBuffer = function () {
  return { ...this.items };
};

// clear()
Dictionary.prototype.clear = function () {
  this.items = {};
};

// size()
Dictionary.prototype.size = function () {
  return Object.keys(this.items).length;
};

// has()
Dictionary.prototype.has = function (key) {
  return this.items.hasOwnProperty(key);
};

//set()
Dictionary.prototype.set = function (key, value) {
  this.items[key] = value;
};

// get()
Dictionary.prototype.get = function (key) {
  return this.has(key) ? this.items[key] : undefined;
};

// remove()
Dictionary.prototype.remove = function (key) {
  if (this.has(key)) {
    delete this.items[key];
    return true;
  }

  return false;
};

// keys()
Dictionary.prototype.keys = function () {
  return Object.keys(this.items);
};

// values()
Dictionary.prototype.values = function () {
  return Object.values(this.items);
};

// each()
Dictionary.prototype.each = function (fn) {
  for (let k in this.items) {
    fn(k, this.items[k]);
  }
};

function printDictionary(key, value) {
  console.log(`key: ${key}`);
  console.log(`value: ${value}`);
}

let dict = new Dictionary({ age: 19, name: 'alice' });
console.log(dict);
console.log(dict.has('name'));
dict.set('job', 'developer');

dict.each(printDictionary);
