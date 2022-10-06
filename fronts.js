
class Node {
    constructor(val) {
        this.data = val;
        this.next = null; 
    }
}

class Sll {
    constructor() {
        this.head = null;

    }

    addFront(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            return this;
        }
        newNode.next = this.head
        this.head = newNode;
        return this;
    }

    removeFront() {
        if (!this.head) {
            return undefined;
        }
        var remove = this.head
        this.head = remove.next
        remove.next = null
        return this
    }

    front(){
        if (!this.head){
            return null;
        }else{
            return this.head.val;
        }
    }
}

// Add Front
var sll1 = new Sll();
sll1.addFront(18)
console.log(sll1)
sll1.addFront(5)
// Front
console.log(sll1.front())
sll1.addFront(73)
console.log(sll1)
console.log(sll1.head.next)
//Remove Front
sll1.removeFront()
console.log(sll1)

