//Deque(): 초기 속성값 설정을 위한 생성자 함수
function Deque(array = []) {
  this.array = array;
}

//getBuffer()
Deque.prototype.getBuffer = function () {
  return this.array.slice();
};

//isEmpty()
Deque.prototype.isEmpty = function () {
  return this.array.length === 0;
};

//pushFront()
Deque.prototype.pushFront = function (element) {
  return this.array.unshift(element);
};

//popFront()
Deque.prototype.popFront = function () {
  return this.array.shift();
};

//pushBack()
Deque.prototype.pushBack = function (element) {
  return this.array.push(element);
};

//popBack()
Deque.prototype.popBack = function () {
  return this.array.pop();
};

//front()
Deque.prototype.front = function () {
  return this.array.length === 0 ? undefined : this.array[0];
};

//back()
Deque.prototype.back = function () {
  return this.array.length === 0
    ? undefined
    : this.array[this.array.length - 1];
};

//size()
Deque.prototype.size = function () {
  return this.array.length;
};

//clear()
Deque.prototype.clear = function () {
  this.array = [];
};

let dq = new Deque([1, 2, 3]);

dq.pushFront(0);
dq.pushBack(4);
console.log(dq);

dq.popBack();
dq.popFront();
console.log(dq);
console.log(dq.front());
console.log(dq.back());
