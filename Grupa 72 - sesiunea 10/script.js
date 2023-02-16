function arrayInput() {
    var n = document.getElementById("no").value; 
    var i = 0; 
    var a = new Array();
    
    console.log(a);

    while(i<n) 
      {
        var elementCitit = prompt("a[i]=");
        a[i] = elementCitit;
        i = i + 1; // i++;
      }
    
    console.log(a);
    alert(a);
    var div = document.getElementById("cos"); 
    div.innerHTML = "In cosul de cumparaturi aveti aceste produse: " +  a;
    div.style.backgroundColor="yellow";
}

function maxArray() {
    var n = document.getElementById("no").value; 
    var i = 0; 
    var prices = new Array();
 
    while(i<n) 
    {
        var pret = prompt("Introduceti price[i]");
        prices[i] = parseInt(pret); 
        i = i+1; //i++;
    }

    var max = prices[0];
    i = 0; 
    while(i<n)
    {
        if(prices[i] > max)
        {
            max = prices[i];
        }
        i=i+1;
    }
    alert("Maximul din sir este: " + max);
}

function minArray() {
    var n = document.getElementById("no").value; 
    var i = 0; 
    var prices = new Array();
 
    while(i<n) 
    {
        var pret = prompt("Introduceti price[i]");
        prices[i] = parseInt(pret); 
        i = i+1; //i++;
    }

    var min = prices[0];
    i = 0; 
    while(i<n)
    {
        if(prices[i] < min)
        {
            min = prices[i];
        }
        i=i+1;
    }
    alert("Minimul din sir este: " + min);
}

function sortareAsc() {
    var n = document.getElementById("no").value; 
    var i = 0; 
    var prices = new Array();
 
    while(i<n) 
    {
        var pret = prompt("Introduceti price[i]");
        prices[i] = parseInt(pret); 
        i = i+1; //i++;
    }

 /*  
    for(i=0; i< n; i++) {
        for(var j=0; j<n; j++) {
            if(prices[j]>prices[j+1]) 
            {
                var temp = prices[j];
                prices[j] = prices[j+1];
                prices[j+1] = temp;
            }
        }
    }
*/
    i = 0;
    var j= 0; 
    while(i<n)
    {
        j=0;
        while(j<n)
        {
            if(prices[j]>prices[j+1]) 
            {
                var temp = prices[j];
                prices[j] = prices[j+1];
                prices[j+1] = temp;
            }
            j = j +1;
        }
        i = i+1;
    }

    alert("Preturile ordonate crescator sunt: " + prices);
}