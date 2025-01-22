function multiply(num,callback){
    return callback(num*5,false);
}
function subtract(num,callback){
    return callback(num-5,false)
}
function add(num,callback){
    return callback(num+5,false);
}

multiply(5,(mulres,err)=>{
    if(!err){
       subtract(mulres,(subRes,err)=>{
          if(!err){
             add(subRes,(addRes,err)=>{
                if(!err){
                  console.log("Final Result : ",addRes)
                }else{
                    console.log("Error in Addition");
                }
             })
          }else{
            console.log("Error in Subtraction");
          }
       })
    }else{
        console.log("Error in Multiplication");
    }
})
