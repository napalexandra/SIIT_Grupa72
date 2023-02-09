function compara() 
{
    var p1 = document.getElementById("pret1").value;
    var p2 = document.getElementById("pret2").value;

    if(parseInt(p1)>parseInt(p2)) 
    {
        alert (p1 + "Este pretul mai mare"); 
    }
    else if(parseInt(p1) == parseInt(p2)) 
    {
        alert("Cele doua preturi sunt la fel");
    }
    else
    {
        alert(p2 + "Este pretul mai mare");
    }
}

function swap() {
    var nr1 = document.getElementById("pret1").value;
    var nr2 = document.getElementById("pret2").value;

    var temp=0;
    temp = nr1;
    nr1 = nr2;
    nr2 = temp;
    document.getElementById("pret1").value= nr1;
    document.getElementById("pret2").value = nr2;
    alert("pret 1 = " + nr1 + " si pret 2 = " + nr2);
}

function sum() {
    var nr = document.getElementById("n").value; 
    var i = 1; 
    var sum = 0; 

    while(i <= parseInt(nr)) 
    {
        sum = sum + i;
        i = i + 1;
    }

    alert("Suma nr este " + sum);
}

function prod() {
    var nr = document.getElementById("n").value; 
    var i = 1; 
    var produs = 1; 

    while(i <= parseInt(nr)) 
    {
        produs = produs * i;
        i = i + 1;
    }

    alert("n! =  " + produs);
}