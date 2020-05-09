'use strict'

let Node = (function () {
    let Node = function (data, prev = null, next = null) {
        this.data = data
        this.prev = prev
        this.next = next
    }

    return Node
})()

let CircularDoublyLinkedList = (function () {
    let CircularDoublyLinkedList = function () {
        this.head = null
        this.tail = null
        this.size = 0
    }

    CircularDoublyLinkedList.prototype.add = function(data) {
        let node = new Node(data)
        if (!this.head) {
            this.head = this.tail = node
        } else {
            node.prev = this.tail
            node.next = this.head
            this.tail.next = node
            this.tail = node
        }

        this.size++
    }

    CircularDoublyLinkedList.prototype.printData = function () {
        let current = this.head

        while (current) {
            console.log(current.data)
            if (current.next === this.head) return
            current = current.next
        }
    }

    return CircularDoublyLinkedList
})()

let ll = new CircularDoublyLinkedList
ll.add(100)
ll.add(200)
ll.add(300)
ll.printData()
