//Stack(): 생성자 함수
function Stack(array){
    this.array = array ? array : []
}

//getBuffer(): 객체 내 데이터 셋 반환
Stack.prototype.getBuffer = function() {
    return this.array.slice()
}

//isEmpty()
Stack.prototype.isEmpty = function(){
    return this.array.length === 0
}

//push()
Stack.prototype.push = function(element){
    return this.array.push(element)
}

//pop()
Stack.prototype.pop = function(){
    return this.array.pop()
}

//peek(): 가장 끝 데이터 반환
Stack.prototype.peek = function(){
    return this.array[this.array.length-1]
}

//size()
Stack.prototype.size = function(){
    return this.array.length
}

//indexOf()
Stack.prototype.indexOf = function(element, position = 0){
    for(let i = position; i < this.array.length; i++){
        console.log(this.array[i])
        if(this.array[i] === element) return i;
    }
    return -1;
    // return this.array.indexOf(element, position)
}

//includes()
Stack.prototype.includes = function(element, position = 0){
    for(let i = position; i < this.array.length; i++){
        if(this.array[i] === element) return true;
    }
    return false;
}
