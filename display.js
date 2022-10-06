class Node {
    constructor(val) {
        this.value = val;
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

    
    display() {
        var str = "";
        if (!this.head) {
            return null;
        }
        str += this.head.value;
        var current = this.head.next;
        while (current != null) {
            str += ", " + current.val;
            current = current.next;
        }
        return str;
    }

}

var sll1 = new Sll();
sll1.addFront(76);
console.log(sll1.display());
sll1.addFront(2);
console.log(sll1)
console.log(sll1.display());


