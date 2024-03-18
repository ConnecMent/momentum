const myQueue = {

    queue : [],

    isEmty : function (){
        return !!this.queue.length;
    },

    insert : function(num){
        this.queue.push(num);
    },

    remove : function(){
        if(this.isEmty())
            console.log("Queue is empty");
        else
            this.queue.shift();
    },

    print: function(){
        if(this.isEmty())
            console.log("Queue is empty");
        else{

            console.log("--------------------");

            for(let i =0 ; i<this.queue.length;++i){
                console.log(`elemnt ${i}'th = ${this.queue[i]}`);
            }

        }
    },

    size : function (){
        return this.queue.length;
    },

    get : function(){
        if(this.queue.length===0)
            console.log("queue is empty");
        else
            return this.queue.at(-1);;
    }

}



// myQueue.insert(5);
// myQueue.insert(10);
// myQueue.insert(15);

// console.log(myQueue.get());

// console.log(myQueue.size());


// myQueue.print();

// myQueue.remove();
// myQueue.remove();
// myQueue.remove();
// console.log(myQueue.size());

// myQueue.insert(20);


// myQueue.print();


