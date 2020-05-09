'use strict'

let ArrayStack = (function () {

    function ArrayStack() {
        this.stack = []
        this.top = -1
    }

    ArrayStack.prototype.push = function (data) {
        this.top++
        this.stack.push(data)
    }

    ArrayStack.prototype.pop = function () {
        this.stack.pop()
        this.top--
    }

    return ArrayStack
})()

let Node = (function () {
    function Node(data, next = null) {
        this.data = data
        this.next = next
    }

    return Node
})()

let LinkedListStack = (function () {
    function LinkedListStack() {
        this.head = null
        this.top = -1
    }

    LinkedListStack.prototype.push = function (data) {
        let node = new Node(data)
        if (!this.head) {
            this.head = node
        } else {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = node
        }

        this.top++
    }

    LinkedListStack.prototype.pop = function () {
        let current = this.head
        let prev
        while (current.next) {
            prev = current
            current = current.next
        }
        prev.next = null

        this.top--
    }

    return LinkedListStack
})()