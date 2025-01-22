function delayedMessage(msg,delay,callback){
    setTimeout(()=>{
      console.log(msg);  
      callback(delay);
    },delay)
}

delayedMessage("Delayed message",2000,(delay)=>{
      console.log("delayed by : ",delay);
})
