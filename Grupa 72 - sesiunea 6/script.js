function display() {
    alert("Hello grupa 72!");
}

function displayNumeCurs() {
    var numeCurs = document.getElementById("main");
    numeCurs.innerHTML = "Intro in IT - curs de incepatori";
}

function displayHello() {
    var helloDiv = document.getElementById("after-click");
    helloDiv.innerHTML="hello world";
}

function sum() {
    var a = document.getElementById("first").value;
    var b = document.getElementById("second").value;
    var suma = parseInt(a) + parseInt(b);
    alert("Adunarea celor doua numere este: " + suma);
}

function dif() {
    var a = document.getElementById("first").value;
    var b = document.getElementById("second").value;
    var diferenta = parseInt(a) - parseInt(b);
    alert("Diferenta celor doua numere este: " + diferenta);
}

function inmultire() {
    var a = document.getElementById("first").value;   //date de intrare sau input
    var b = document.getElementById("second").value; //date de intrare sau input
    var prod = parseInt(a) * parseInt(b);
    alert("Produsul celor doua numere este: " + prod); //data de iesire sau output
}

function impartire() {
    var a = document.getElementById("first").value;   //date de intrare sau input
    var b = document.getElementById("second").value; //date de intrare sau input
    var cat = parseInt(a) / parseInt(b);
    alert("Catul celor doua numere este: " + cat); //data de iesire sau output
}

function rest() {
    var a = document.getElementById("first").value;   //date de intrare sau input
    var b = document.getElementById("second").value; //date de intrare sau input
    var r = parseInt(a) % parseInt(b); //proces
    alert("Catul celor doua numere este: " + r); //data de iesire sau output
}