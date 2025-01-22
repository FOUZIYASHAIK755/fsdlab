function Greet(name,callback){
    const msg=`Hello ${name}`;
    callback(msg);
}
Greet("Fouziya",(msg)=>{
   console.log("Greetings have a great day !!!");
   console.log(msg);
})
