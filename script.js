// Mínimo necessário. Sem libs, sem animação de entrada.
(function () {
  "use strict";

  // Ano do rodapé
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  // Copiar e-mail
  var btn = document.getElementById("copy-email");
  if (btn && navigator.clipboard) {
    var original = btn.textContent;
    btn.addEventListener("click", function () {
      navigator.clipboard.writeText(btn.dataset.email).then(function () {
        btn.textContent = "copiado ✓";
        setTimeout(function () { btn.textContent = original; }, 2000);
      });
    });
  }
})();
