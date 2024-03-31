let myStack = {
    
    array : [],

    insert:function(num){
        this.array.unshift(num);
    },

    top:function(){
        if(this.array.length===0)
            console.log("stack is empty");
        else
            return this.array[0];
    },

    remove:function(){
        if(this.array.length === 0)
            console.log("stack is empty");
        else
            this.array.shift();
    },

    print:function(){
        
            if(this.array.length!=0){
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
            console.log("stack is empty");
        else
            return this.array[this.array.length-1];
    }

}


// myStack.insert(5);
// myStack.insert(10);
// myStack.insert(15);

// console.log(myStack.get());

// myStack.remove();
// myStack.remove();
// myStack.remove();

// myStack.insert(100);

// console.log(myStack.top());

// myStack.print();
