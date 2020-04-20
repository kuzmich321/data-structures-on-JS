'use strict'

let Node = (function () {
    let Node = function (data, prev = null, next = null) {
        this.data = data
        this.prev = prev
        this.next = next
    }

    return Node
})()

let DoublyLinkedList = (function () {
    let DoublyLinkedList = function () {
        this.head = null
        this.tail = null
        this.size = 0
    }

    DoublyLinkedList.prototype.add = function(data) {
        let node = new Node(data)
        if (!this.head) {
            this.head = this.tail = node
        } else {
            node.prev = this.tail
            this.tail.next = node
            this.tail = node
        }

        this.size++
    }

    DoublyLinkedList.prototype.addAt = function(index, data) {
        let node = new Node(data)
        if (index < 0 || index > this.size) {
            return false
        } else if (index === 0) {
            node.next = this.head
            this.head.prev = node
            this.head = node
        } else if (index === this.size) {
            node.prev = this.tail
            this.tail.next = node
            this.tail = node
        } else {
            let current = this.head
            let currentIndex = 0
            while (currentIndex < index) {
                currentIndex++
                current = current.next
            }
            node.next = current
            node.prev = current.prev
            current.prev.next = node
            current.prev = node
        }

        this.size++
    }

    DoublyLinkedList.prototype.remove = function(data) {
        let current = this.head
        if (current === this.head && current === this.tail) {
            this.head = this.tail = null
        } else if (current.data === data) {
            this.head = current.next
            this.head.prev = null
        } else if (this.tail.data === data) {
            this.tail = this.tail.prev
            this.tail.next = null
        } else {
            while (current) {
                current = current.next
                if (current.data === data) {
                    current.next.prev = current.prev
                    current.prev.next = current.next
                    return
                }
            }
        }

        this.size--
    }

    DoublyLinkedList.prototype.removeAt = function(index) {
        let current = this.head
        if (index < 0 || index >= this.size) {
            return false
        } else if (current === this.head && current === this.tail) {
            this.head = this.tail = null
        } else if (index === 0) {
            this.head = current.next
            this.head.prev = null
        } else if (index === this.size - 1) {
            this.tail = this.tail.prev
            this.tail.next = null
        } else {
            let currentIndex = 1
            while (currentIndex < index) {
                currentIndex++
                current = current.next
            }
            current.next.prev = current.prev
            current.prev.next = current.next
        }

        this.size--
    }

    DoublyLinkedList.prototype.getSize = function() {
        console.log(`The size is: ${this.size}`)
    }

    DoublyLinkedList.prototype.printData = function () {
        let current = this.head
        while (current) {
            console.log(current.data)
            current = current.next
        }
    }

    return DoublyLinkedList
})()

let ll = new DoublyLinkedList
ll.add(100)
ll.add(200)
ll.add(300)
ll.addAt(1, 400)
ll.remove(300)
ll.removeAt(2)
ll.printData()
ll.getSize()