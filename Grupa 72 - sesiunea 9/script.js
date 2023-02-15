function sumEven() 
{
    var n = document.getElementById("no").value;
    var i = 2; 
    var sum = 0;
    while (i<=n) 
    {
        sum = sum + i;
        i = i + 2;
    }

    alert("Suma nr pare este " + sum);
}

function fizzBuzz(){
    var n = document.getElementById("no").value;
    var i = 1;
    var result="";

    while(i<=n) 
    {
      if(i%3==0 && i%5==0)    //if(i%15==0)
       {
            result = result + " FizzBuzz ";
       }
       else if(i%3 == 0) 
       {
            result = result + " Fizz ";
       }
       else if(i%5 == 0)
       {
            result = result + " Buzz" ;
       }
       else 
       {
            result = result + "  " + i;
       }
       i = i+1;
    }
    var div = document.getElementById("fizzBuzz");
    div.innerHTML = result;
}


function fib(){
     var n = document.getElementById("no").value;
     var n1 = 0; 
     var n2 = 1; 
     var next = 0; 
     var sir = n1 + " , " + n2 + " , ";

     while((n1+n2) <= n) 
     {
          next = n1+n2; 
          n1 = n2; 
          n2 = next; 
          sir = sir + next + " , ";
     }

     alert(sir);
}

function fibo()
{
    var n = document.getElementById("no").value;
    var n1 = 0; 
    var n2 = 1;
    var next;
    var sir = n1 + " , " + n2 + " , ";
    var i = 3; 
    if(isNaN(n) || n==0)
    {
     alert("Puteti introduce doar numere mai mari decat 0!!!!");
    }
    else {
      while(i <= n)
         {
            next = n1 + n2;  
            n1 = n2; 
            n2 = next; 
            sir = sir + next + " , ";
            i = i+1;
          }
      alert(sir);
     }
}