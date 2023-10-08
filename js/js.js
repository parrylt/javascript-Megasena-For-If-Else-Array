function jogarMegaSena() {
   // Gera 6 números aleatórios diferentes entre 1 e 60
   const numerosSorteados = [];
   while (numerosSorteados.length < 6) {
       const numeroAleatorio = Math.floor(Math.random() * 60) + 1;
       if (!numerosSorteados.includes(numeroAleatorio)) {
           numerosSorteados.push(numeroAleatorio);
       }
   }

   // Pega os números do usuário
   const numerosUsuario = [
       parseInt(document.getElementById("num1").value),
       parseInt(document.getElementById("num2").value),
       parseInt(document.getElementById("num3").value),
       parseInt(document.getElementById("num4").value),
       parseInt(document.getElementById("num5").value),
       parseInt(document.getElementById("num6").value)
   ];

   // Verifica quantos números coincidem com os números sorteados
   let numerosCoincidentes = 0;
   for (let i = 0; i < numerosUsuario.length; i++) {
       if (numerosSorteados.includes(numerosUsuario[i])) {
           numerosCoincidentes++;
       }
   }

   // Exibe o resultado ao usuário
   if (numerosCoincidentes === 6) {
       alert("Parabéns, você ganhou na Mega-sena com os números sorteados: " + numerosSorteados.join(", "));
   } else {
       alert("Você acertou " + numerosCoincidentes + " números, mas não ganhou. Os números sorteados foram: " + numerosSorteados.join(", "));
   }
}
