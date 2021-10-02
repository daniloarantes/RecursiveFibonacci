

function fibonacci(n){
   if((n == 0 )||(n == 1)){
        return n;
   } else {
        return fibonacci(n-1)+(fibonacci(n-2));
   }
}
 

function fib10(){
    let i = 1;
    console.log("0");
    console.log("1");

    while(i<=10){
        console.log(fibonacci(i));
        i++;
    }
}

fib10();
