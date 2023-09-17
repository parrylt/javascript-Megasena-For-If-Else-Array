function pesquisa ()
{
    const numeros = [];
    
    for (var i = 1; i <= 30; i++) {
        numeros.push(i);
     }
    
     if (
        document.getElementById("cxpesquisa1").value == numeros [12] && 
        document.getElementById("cxpesquisa2").value == numeros [17] &&
        document.getElementById("cxpesquisa3").value == numeros [21] && 
        document.getElementById("cxpesquisa4").value == numeros [25] &&
        document.getElementById("cxpesquisa5").value == numeros [29])
     {
        document.write ("<h1>Parabéns, você ganhou na Mega-sena!</h1>");
     }
     else{
        document.write ("<h1>Tente novamente.</h1>");      
     }
}