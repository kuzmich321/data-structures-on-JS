'use strict'

let Node = (function () {
    let Node = function (data, next = null) {
        this.data = data
        this.next = next
    }

    return Node
})()

let CircularSinglyLinkedList = (function () {
    let CircularSinglyLinkedList = function () {
        this.head = null
        this.tail = null
        this.size = 0
    }

    CircularSinglyLinkedList.prototype.add = function(data) {
        let node = new Node(data)
        if (!this.head) {
            this.head = this.tail = node
            node.next = this.head
        } else {
            this.tail.next = node
            node.next = this.head
            this.tail = node
        }

        this.size++
    }

    CircularSinglyLinkedList.prototype.addAt = function(index, data) {
        let node = new Node(data)
        if (index < 0 || index > this.size) {
            return false
        } else if (index === 0) {
            this.tail.next = node
            node.next = this.head
            this.head = node
        } else if (index === this.size) {
            this.tail.next = node
            node.next = this.head
            this.tail = node
        } else {
            let current = this.head
            let prev
            let currentIndex = 1
            while (currentIndex <= index) {
                currentIndex++
                prev = current
                current = current.next
            }
            node.next = current
            prev.next = node
        }

        this.size++
    }

    CircularSinglyLinkedList.prototype.remove = function(data) {
        let current = this.head
        if (current === this.head && current === this.tail) {
            this.head = this.tail = null
        } else if (current.data === data) {
            this.head = current.next
            this.tail.next = this.head
        } else {
            let prev
            while (current.data !== data) {
                prev = current
                current = current.next
            }
            prev.next = current.next
        }

        this.size--
    }

    CircularSinglyLinkedList.prototype.removeAt = function(index) {
        let current = this.head
        if (index < 0 || index >= this.size) {
            return false
        } else if (index === 0) {
            this.head = current.next
            this.tail.next = this.head
        } else {
            let prev
            let currentIndex = 1
            while (currentIndex <= index) {
                currentIndex++
                prev = current
                current = current.next
            }
            if (current === this.tail) {
                prev.next = current.next
                this.tail = prev
            }
            prev.next = current.next
        }

        this.size--
    }

    CircularSinglyLinkedList.prototype.getSize = function() {
        console.log(`The size is ${this.size}`)
    }

    CircularSinglyLinkedList.prototype.printData = function () {
        let current = this.head

        while(current) {
            console.log(current.data)
            if (current.next === this.head) return
            current = current.next
        }
    }

    return CircularSinglyLinkedList
})()

let ll = new CircularSinglyLinkedList
ll.add(100)
ll.add(200)
ll.add(300)
ll.add(400)
ll.addAt(0,500)
ll.addAt(1,600)
ll.removeAt(3)
ll.printData()
ll.getSize()