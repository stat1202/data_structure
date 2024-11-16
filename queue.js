//Queue
function Queue(array){
    this.array = array ? array : []
}

// getBuffer()
Queue.prototype.getBuffer = function(){
    return this.array.slice()
}

//isEmpty()
Queue.prototype.isEmpty = function(){
    return this.array.length === 0
}

//enqueue()
Queue.prototype.enqueue = function(element){
    return this.array.push(element)
}

//dequeue()
Queue.prototype.dequeue = function(){
    return this.array.shift()
}

//front()
Queue.prototype.front = function(){
    return this.array.length === 0 ? undefined : this.array[0]
}

//size()
Queue.prototype.size = function(){
    return this.array.length
}

//clear()
Queue.prototype.clear = function(){
    this.array = []
}

// 최적화
//Queue
function Queue2(array){
    this.array = array ? array : []
    this.tail = array ? array.length : 0
    this.head = 0
}

//enqueue()
Queue2.prototype.enqueue = function(element){
    return (this.array[this.tail++] = element)
}

//dequeue()
Queue2.prototype.dequeue = function(){
    if(this.tail === this.head) return undefined
    
    let element = this.array[this.head]
    delete this.array[this.head++]
    return element
}


// 성능 비교
let queue_1 = new Queue()
let queue_2 = new Queue2()
const count = 100000

function benchmark(queue, enqueue){
    let start = Date.now()
    for(let i = 0; i < count; i++){
        enqueue ? queue.enqueue() : queue.dequeue()
    }
    return Date.now() - start
}

console.log('enqueue queue_1: ' + benchmark(queue_1, 1) + "ms")
console.log('enqueue queue_2: ' + benchmark(queue_2, 1) + "ms")

console.log('dequeue queue_1: ' + benchmark(queue_1, 0) + "ms")
console.log('dequeue queue_2: ' + benchmark(queue_2, 0) + "ms")
