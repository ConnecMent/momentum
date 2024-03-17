let myQueue = {

    array : [],

    isEmty : function (){
        return this.array.length === 0;
    },

    insert : function(num){
        this.array.push(num);
    },

    remove : function(){
        if(this.isEmty())
            console.log("Queue is empty");
        else
            this.array.shift();
    },

    print: function(){
        if(this.isEmty())
            console.log("Queue is empty");
        else{

            console.log("--------------------");

            for(let i =0 ; i<this.array.length;++i){
                console.log(`elemnt ${i}'th = ${this.array[i]}`);
            }

        }
    },

    size : function (){
        return this.array.length;
    },

    get : function(){
        if(this.array.length===0)
            console.log("queue is empty");
        else
            return this.array[this.array.length-1];
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


