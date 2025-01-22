const arr = [1, 2, 3, 4]

function resetIterator(arr){
    let count=0;
    return{
      [Symbol.iterator](){
           return{
                 next(){
                       if(count<arr.length){
                         return{value:arr[count++],
                            done:false
                          }
                        }
                       else{
                         return{value:arr[count++],
                         done:true
                         }
                        }
                    },
                    reset(){
                        count=0;
                    }
            };
        }
    };
}
const res=resetIterator(arr);
for (const value of res) {
    console.log(value);
  }
res[Symbol.iterator]().reset();
for (const value of res) {
    console.log(value);
  }