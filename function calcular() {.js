// Archivo: script.js
document.getElementById("calcular-btn").addEventListener("click", function () {
    const valorInicial = parseFloat(document.getElementById("valorInicial").value);
    const valorFinal = parseFloat(document.getElementById("valorFinal").value);
    const dias = parseInt(document.getElementById("dias").value);
  
    if (!valorInicial || !valorFinal || !dias) {
      alert("Por favor, llena todos los campos.");
      return;
    }
  
    const tasaCrecimiento = Math.pow(valorFinal / valorInicial, 1 / dias) - 1;
    const valorFuturo = valorInicial * Math.pow(1 + tasaCrecimiento, dias);
  
    document.getElementById("resultados").innerHTML = `
      Tasa de Crecimiento Diario: ${(tasaCrecimiento * 100).toFixed(2)}%<br>
      Valor Futuro: ${valorFuturo.toFixed(2)}
    `;
  });