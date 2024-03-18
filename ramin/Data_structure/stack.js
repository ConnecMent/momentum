let myStack = {
    
    stack : [],

    insert:function(num){
        this.stack.unshift(num);
    },

    top:function(){
        if(this.stack.length===0)
            console.log("stack is empty");
        else
            return this.stack[0];
    },

    remove:function(){
        if(this.stack.length === 0)
            console.log("stack is empty");
        else
            this.stack.shift();
    },

    print:function(){
        
            if(this.stack.length!=0){
                console.log("--------------------");

            for(let i =0 ; i<this.stack.length;++i){
                console.log(`elemnt ${i}'th = ${this.stack[i]}`);
            }
        }
    },

    size : function (){
        return this.stack.length;
    },

    get : function(){
        if(this.stack.length===0)
            console.log("stack is empty");
        else
            return this.stack.at(-1);
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
