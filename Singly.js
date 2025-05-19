class Node {
    constructor(data) {
        this.data = next;
        this.next = null;

    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;

    }

    //add element at the end
    append(data) {
        const newNode = new Node(data);

        if (!this.head) {

            this.head = newNode;
            this.tail = newNode;
        }
        else {

            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.size++;
    }

    //add element in the beginning
    prepend(data) {
        const newNode = new Node(data);

        if (!this.head) {

            this.head = newNode;
            this.tail = newNode;

        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.size++;
        return this;
    }

    removeFirst() {
        if (!this.head) {
            return null;
        }

        const removedData = this.head.data;
        this.head = this.head.next;
        this.size--;

        if (this.size === 0) {
            this.tail = null;
        }

        return removedData;

    }

    //Get elements from specific positons
    get(index) {
        if (index < 0 || index >= this.size) {

        }

        let current = this.head;
        let currentIndex = 0;
        while (currentIndex < index) {
            current = current.next;
            currentIndex++;
        }
        return current.data;


    }
}

