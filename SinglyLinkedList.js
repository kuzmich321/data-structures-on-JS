'use strict'

let Node = (function () {
    let Node = function (data, next = null) {
        this.data = data
        this.next = next
    }
    return Node
})()

let SinglyLinkedList = (function () {

    let SinglyLinkedList = function () {
        this.head = null
        this.size = 0
    }

    SinglyLinkedList.prototype.add = function (data) {
        let node = new Node(data)
        if (!this.head) {
            this.head = node;
        } else {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        this.size++
    }

    SinglyLinkedList.prototype.addAt = function(index, data) {
        let node = new Node(data)
        if (index === 0) {
            node.next = this.head
            this.head = node
        } else if (index > this.size) {
            return false
        } else {
            let current = this.head
            let prev
            let currentIndex = 0
            while (currentIndex < index) {
                currentIndex++
                prev = current
                current = current.next
            }
            node.next = current
            prev.next = node
        }

        this.size++
    }

    SinglyLinkedList.prototype.remove = function(data) {
        let current = this.head
        let prev
        while (current.data !== data) {
            prev = current
            current = current.next
        }
        prev.next = current.next

        this.size--
    }

    SinglyLinkedList.prototype.removeAt = function(index) {
        let current = this.head
        let prev
        let currentIndex = 0
        if (index < 0 || index >= this.size) return false
        if (index === 0) {
            this.head = current.next
        } else {
            while (currentIndex < index) {
                currentIndex++
                prev = current
                current = current.next
            }
            prev.next = current.next
        }

        this.size--
    }

    SinglyLinkedList.prototype.indexOf = function(data) {
        let current = this.head
        let index = -1
        while (current) {
            index++
            if (current.data === data) {
                return index
            }
            current = current.next
        }

        return -1
    }

    SinglyLinkedList.prototype.getAt = function(index) {
        if (index > this.size) return false
        let current = this.head
        let count = 0
        while (count < index) {
            count++
            current = current.next
        }
        return current.data
    }

    SinglyLinkedList.prototype.printData = function () {
        let current = this.head
        while (current) {
            console.log(current.data)
            current = current.next
        }
    }

    return SinglyLinkedList
})()

let ll = new SinglyLinkedList
ll.add(100)
ll.add(200)
ll.add(300)
ll.addAt(1, 400)
ll.removeAt(2)
ll.printData()