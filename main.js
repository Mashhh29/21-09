/* =========================================================
   Arma los girasoles, el pasto y las luciérnagas.
   Todo se genera aquí para que el HTML quede corto y limpio.
   ========================================================= */

(function () {
  "use strict";

  var PETALOS = 12; // pétalos por corona (hay dos coronas: atrás y adelante)

  function corona(clase) {
    var html = '<div class="gf__petalos ' + clase + '">';
    for (var i = 0; i < PETALOS; i++) {
      html += '<div class="gf__petalo" style="--i:' + i + '"><span></span></div>';
    }
    return html + "</div>";
  }

  function armarGirasol(el) {
    el.innerHTML =
      '<div class="gf__tallo">' +
        '<div class="gf__hoja gf__hoja--izq" style="--y:44%; --dh:1.5s; --rot:-16deg"></div>' +
        '<div class="gf__hoja gf__hoja--der" style="--y:68%; --dh:1.75s; --rot:16deg"></div>' +
      "</div>" +
      '<div class="gf__cabeza">' +
        corona("gf__petalos--atras") +
        corona("gf__petalos--frente") +
        '<div class="gf__centro"></div>' +
      "</div>";
  }

  function armarPasto(cont) {
    if (!cont) return;
    var total = window.innerWidth < 560 ? 46 : 78;
    var html = "";
    for (var i = 0; i < total; i++) {
      var x = (i / total) * 100 + (Math.random() * 2 - 1);
      var alto = 22 + Math.random() * 50;      // % de la franja de pasto
      var ancho = 7 + Math.random() * 11;
      var giro = Math.random() * 26 - 13;
      var retardo = Math.random() * 1.6;
      var clara = Math.random() > 0.55 ? " brizna--clara" : "";
      html +=
        '<div class="brizna' + clara + '" style="' +
        "--x:" + x.toFixed(2) + "%;" +
        "--h:" + alto.toFixed(1) + "%;" +
        "--w:" + ancho.toFixed(1) + "px;" +
        "--r:" + giro.toFixed(1) + "deg;" +
        "--d:" + retardo.toFixed(2) + "s;" +
        '"></div>';
    }
    cont.innerHTML = html;
  }

  function armarLuciernagas(cont) {
    if (!cont) return;
    var total = window.innerWidth < 560 ? 12 : 20;
    var html = "";
    for (var i = 0; i < total; i++) {
      html +=
        '<div class="luciernaga" style="' +
        "--x:" + (5 + Math.random() * 90).toFixed(1) + "%;" +
        "--y:" + (35 + Math.random() * 55).toFixed(1) + "%;" +
        "--t:" + (7 + Math.random() * 7).toFixed(1) + "s;" +
        "--d:" + (Math.random() * 6).toFixed(1) + "s;" +
        '"></div>';
    }
    cont.innerHTML = html;
  }

  function musica() {
    var audio = document.getElementById("cancion");
    var boton = document.getElementById("musica");
    if (!audio || !boton) return;

    var sonando = false;

    function alternar() {
      if (sonando) {
        audio.pause();
        sonando = false;
        boton.textContent = "🎵";
        boton.setAttribute("aria-label", "Poner música");
      } else {
        audio.play().then(function () {
          sonando = true;
          boton.textContent = "🔊";
          boton.setAttribute("aria-label", "Quitar música");
        }).catch(function () {
          /* el navegador bloqueó el audio: se queda esperando otro toque */
        });
      }
    }

    boton.addEventListener("click", alternar);

    // Los celulares bloquean el audio automático: al primer toque en la
    // pantalla intentamos arrancarlo una sola vez.
    function primerToque() {
      if (!sonando) alternar();
      document.removeEventListener("pointerdown", primerToque);
    }
    document.addEventListener("pointerdown", primerToque, { once: true });
  }

  function iniciar() {
    var flores = document.querySelectorAll("[data-girasol]");
    for (var i = 0; i < flores.length; i++) armarGirasol(flores[i]);
    armarPasto(document.getElementById("pasto"));
    armarLuciernagas(document.getElementById("luciernagas"));
    musica();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciar);
  } else {
    iniciar();
  }
})();
