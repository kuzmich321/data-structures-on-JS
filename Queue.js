'use strict'

let Queue = (function () {
    function Queue() {
        this.queue = []
    }

    Queue.prototype.push = function (data) {
        this.queue.push(data)
    }

    Queue.prototype.pop = function () {
        this.queue.shift()
    }

    return Queue
})()

let Node = (function () {
    function Node(data, next = null) {
        this.data = data
        this.next = next
    }

    return Node
})()

let LinkedListQueue = (function () {
    function LinkedListQueue() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    LinkedListQueue.prototype.push = function (data) {
        let node = new Node(data)
        if (!this.head) {
            this.head = this.tail = node
        } else if (this.head === this.tail){
            this.head.next = this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }

        this.size++
    }

    LinkedListQueue.prototype.pop = function () {
        if (this.size <= 0) {
            return false
        } else if (this.head === this.tail) {
            this.head = this.tail = null
        } else {
            this.head = this.head.next
        }

        this.size--
    }

    return LinkedListQueue
})()
