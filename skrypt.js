function oblicz(){
    let a1=parseFloat(document.getElementById("a1").value);
    let an=parseFloat(document.getElementById("an").value);
    let n=parseFloat(document.getElementById("n").value);
    let wynik=(an-a1)/(n-1); 
    document.getElementById("wynik").value=wynik;
}