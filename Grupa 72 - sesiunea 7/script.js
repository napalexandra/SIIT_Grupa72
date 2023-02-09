function verifica(){
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;

    if(isNaN(a) && isNaN(b) && isNaN(c))
    {
        alert("Trebuie sa introduci cel putin un numar!!! Nu sunt permise litere!");
    }

    if(a=="" && b=="" && c=="")
    {
        alert("Trebuie sa introduci cel putin un numar!!!");
    }

    if(a!="" || b!="" || c!="") 
    {
        alert("Maximul numerelor introduse este " + Math.max(a,b,c));
    }
}

function valideazaCNP() {
    var cnp = document.getElementById("cnp").value;
    var an = document.getElementById("an").value;
    var zi = document.getElementById("zi").value;
    var luna = document.getElementById("luna").value;

    if(cnp == "" || zi == "" || luna == "" || an == "")
    {
        alert("Trebuie sa completezi cele 4 campuri!");
    }

    if(isNaN(cnp) || cnp.length != 13)
    {
        alert("Ati introdus litere sau mai putin de 13 numere!");
    }

    if(isNaN(zi)) 
    {
        alert("Ziua nasterii trebuie sa contina doar cifre!");
    }

    if(parseInt(zi) < 1 || parseInt(zi) > 31)
    {
        alert("Ziua nasterii trebuie sa fie intre 1 si 31!");
    }

    if(isNaN(luna))
    {
        alert("Luna nasterii trebuie sa contina doar cifre!");
    }

    if(parseInt(luna) < 1 || parseInt(luna) > 12)
    {
        alert("Luna nasterii trebuie sa fie intre 1 si 12!");
    }

    if(isNaN(an)) 
    {
        alert("Anul nasterii trebuie sa contina doar cifre!!!!");
    }

    if(an.length != 4) 
    {
        alert("Introduceti anul format din 4 cifre!!!!");
    }

    if(parseInt(an) < 1900) 
    {
        alert("Nu poti fi chiar atat de batran!!!");
    }

    if(parseInt(an) > 2023) 
    {
        alert("Nu te poti naste in viitor!");
    }

    if((cnp[3] + cnp[4]) != luna) 
    {
        alert("Luna nasterii nu coincide cu cea din CNP!");
    }

    if((cnp[5] + cnp[6]) != zi)
    {
        alert("Ziua nasterii nu coincide cu cea din CNP!");
    }

    if((cnp[1] + cnp[2]) != (an[2] + an[3]))
    {
        alert("Anul nasterii nu coincide cu cel din CNP!");
    }
    else {
        alert("BRAVO CNP-ul introdus este corect si coincide cu data nasterii!");
    }
}