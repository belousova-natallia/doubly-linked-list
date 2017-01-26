const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._tail = null;
        this._head = null;
    }

    append(data) {

        var node = new Node(data);

        if(this.length === 0){
            this._tail = node;
            this._head = node;
        }

        else {
            node.prev = this._tail;
            this._tail.next = node;
            
            this._tail = node;
            
        }

        this.length++;
        return this;
    }

    head() {

        return (this._head) ? this._head.data : null;

    }

    tail() {
        return (this._tail) ? this._tail.data : null;
    }

    at(index) {
        var tmp = this._head;
        var i = 0;
        while(true){
            if(i === index) break;
            tmp = tmp.next;
            i++;
        }
        return tmp.data;
    }

    insertAt(index, data) {
        var node = new Node(data);
        var tmp = this._head;
        var i = 0;
        if(index === 0){
         
            node.next = tmp;
            this._head = node;
            this.length++;
        }
        else{
        while(true){
            
            if(i === index-1) {
                tmp.next.prev = node;
                node.next = tmp.next;
                tmp.next = node;
                node.prev = tmp;
                this.length++;
                break;}
            tmp = tmp.next;
            i++;
        }

    }
    return this;

    }

    isEmpty() {
        if (this.length) return false;
        else return true;
    }

    clear() {
        this.length = 0;
        this._tail = null;
        this._head = null;
        return this;
    }

    deleteAt(index) {
        var tmp = this._head;
        var i = 0;
        while(true){

            if(i === index){ 
                if(this.length === 1){
                 this._tail = null;
                 this._head = null;   
                }

                else if(index === 0){
                    this._head = tmp.next;
                    tmp.next.prev = null; 
                }

                else if(index === this.length - 1){
                   // tmp.prev.next = null;
                    this._tail = this._tail.prev;
                    this._tail.next = null;
                    

                } else{
                tmp.next.prev = tmp.prev;
                tmp.prev.next = tmp.next;
                }


                this.length--;
                break;
            }
            tmp = tmp.next;
            i++;
        }
        return this;
    }

    reverse() {
        
    
    for(var i = 0; i < this.length-1 ; i++ ){

        this.insertAt(i, this._tail.data);
        this.deleteAt(this.length - 1);

    }
    return this;

    }

    indexOf(data) {
        var tmp = this._head;
        var i = 0;

        while(i < this.length){

            if (tmp.data === data) break;
            tmp = tmp.next;
            i++;
        }

      return (i === this.length) ? -1 :  i;
    }
}

module.exports = LinkedList;
