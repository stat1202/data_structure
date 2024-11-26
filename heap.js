// 최소힙

function Heap() {
  this.items = [];
}

// 배열 내 두 요소 위치 변경
Heap.prototype.swap = function (index1, index2) {
  let tmp = this.items[index1];
  this.items[index1] = this.items[index2];
  this.items[index2] = tmp;
};

// 부모 노드 위치 반환
Heap.prototype.parentIndex = function (index) {
  return Math.floor((index - 1) / 2);
};

// 왼쪽 자식 노드 위치 반환
Heap.prototype.leftChildIndex = function (index) {
  return index * 2 + 1;
};

// 오른쪽 자식 노드 위치 반환
Heap.prototype.rightChildIndex = function (index) {
  return index * 2 + 2;
};

// 부모 노드 값 반환
Heap.prototype.parent = function (index) {
  return this.items[this.parentIndex(index)];
};

// 왼쪽 자식 노드 값 반환
Heap.prototype.leftChild = function (index) {
  return this.items[this.leftChildIndex(index)];
};

// 오른쪽 자식 노드 값 반환
Heap.prototype.rightChild = function (index) {
  return this.items[this.rightChildIndex(index)];
};

Heap.prototype.peek = function () {
  return this.items[0];
};

Heap.prototype.size = function () {
  return this.items.length;
};

// 신규 노드 추가
Heap.prototype.insert = function (item) {
  this.items[this.size()] = item;
  this.bubbleUp();
};

// 추가된 노드 위치 정렬
Heap.prototype.bubbleUp = function () {
  let index = this.size() - 1;
  // 부등호 반대로 하면 MaxHeap
  while (this.parent(index) && this.parent(index) > this.items[index]) {
    this.swap(this.parentIndex(index), index);
    index = this.parentIndex(index);
  }
};

// root 노드 반환 및 삭제
Heap.prototype.extract = function () {
  let item = this.items[0];
  this.items[0] = this.items[this.size() - 1];
  this.items.pop();
  this.bubbleDown();
  return item;
};

// 대체된 root 노드 위치 정렬
Heap.prototype.bubbleDown = function () {
  let index = 0;
  // 부등호 반대로 하면 MaxHeap
  while (
    this.leftChild(index) &&
    (this.leftChild(index) < this.items[index] ||
      this.rightChild(index) < this.items[index])
  ) {
    let childIndex = this.leftChildIndex(index);

    // 부등호 반대로 하면 MaxHeap
    if (
      this.rightChild(index) &&
      this.rightChild(index) < this.items[childIndex]
    ) {
      childIndex = this.rightChildIndex(index);
    }

    this.swap(childIndex, index);
    index = childIndex;
  }
};

let minHeap = new Heap();

minHeap.insert(90);
minHeap.insert(15);
minHeap.insert(10);
minHeap.insert(7);
minHeap.insert(12);
minHeap.insert(2);
minHeap.insert(8);
minHeap.insert(3);
console.log(minHeap);
console.log(minHeap.extract());
console.log(minHeap.extract());
