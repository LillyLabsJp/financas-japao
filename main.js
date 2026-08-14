// Financas Japao - script compartilhado do cabecalho
document.addEventListener("DOMContentLoaded", function () {

  /* ---- menu no celular ---- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("is-open");
      var expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
    });
  }

  /* ---- submenu: na barra larga abre no hover (CSS); quando o menu vira
         sanduiche (celular, tablet e notebook estreito) ele precisa
         responder ao clique, senao simplesmente nao abre ---- */
  var itensComSub = document.querySelectorAll(".main-nav .tem-sub");

  // o menu esta em modo acordeao sempre que o botao sanduiche esta visivel.
  // testar o botao, e nao a largura, mantem o JS em sincronia com o CSS
  // mesmo que o breakpoint mude depois.
  function menuEmAcordeao() {
    if (!window.matchMedia("(hover: hover)").matches) return true;
    if (!toggle) return false;
    return window.getComputedStyle(toggle).display !== "none";
  }

  itensComSub.forEach(function (item) {
    var gatilho = item.querySelector(":scope > a");
    if (!gatilho) return;

    gatilho.addEventListener("click", function (e) {
      // na barra larga o CSS ja resolve pelo hover; nao intercepta
      if (!menuEmAcordeao()) return;
      e.preventDefault();
      var aberto = item.classList.contains("aberto");
      itensComSub.forEach(function (x) {
        x.classList.remove("aberto");
        var a = x.querySelector(":scope > a");
        if (a) a.setAttribute("aria-expanded", "false");
      });
      if (!aberto) {
        item.classList.add("aberto");
        gatilho.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* fecha o submenu ao tocar fora ou apertar Esc */
  function fechaTodosSubmenus() {
    itensComSub.forEach(function (x) {
      x.classList.remove("aberto");
      var a = x.querySelector(":scope > a");
      if (a) a.setAttribute("aria-expanded", "false");
    });
  }
  document.addEventListener("click", function (e) {
    if (e.target.closest(".main-nav .tem-sub")) return;
    fechaTodosSubmenus();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    fechaTodosSubmenus();
    var campo = document.getElementById("fu-busca-campo");
    if (campo) campo.classList.remove("aberto");
  });

  /* ---- busca ---- */
  var botaoBusca = document.querySelector(".fu-busca");
  var campoBusca = document.getElementById("fu-busca-campo");
  if (botaoBusca && campoBusca) {
    botaoBusca.addEventListener("click", function () {
      campoBusca.classList.toggle("aberto");
      if (campoBusca.classList.contains("aberto")) {
        var i = campoBusca.querySelector("input[type=search]");
        if (i) i.focus();
      }
    });
    /* manda a busca restrita ao site, sem repetir o parametro q */
    var form = campoBusca.querySelector("form");
    if (form) {
      form.addEventListener("submit", function () {
        var i = form.querySelector("input[type=search]");
        if (i && i.value.indexOf("site:") === -1) {
          i.value = "site:financasnojapao.com " + i.value;
        }
      });
    }
  }
});

/* ============ COMPARTILHAR PAGINA ============
   Monta os links de compartilhamento a partir da URL atual, sem
   carregar script de rede nenhuma. Cada pagina traz o proprio texto
   em data-share-texto. Se o navegador tiver o menu nativo de
   compartilhar, o botao "Copiar link" usa ele; se nao, copia mesmo. */
document.addEventListener("DOMContentLoaded", function () {
  var caixas = document.querySelectorAll(".fu-share");
  if (!caixas.length) return;

  var url = location.href.split("?")[0].split("#")[0];
  var urlEnc = encodeURIComponent(url);

  Array.prototype.forEach.call(caixas, function (caixa) {
    var texto = caixa.getAttribute("data-share-texto") || document.title;
    var msgEnc = encodeURIComponent(texto + " " + url);

    var destinos = {
      whatsapp: "https://wa.me/?text=" + msgEnc,
      line: "https://line.me/R/msg/text/?" + msgEnc,
      facebook: "https://www.facebook.com/sharer/sharer.php?u=" + urlEnc
    };

    Array.prototype.forEach.call(caixa.querySelectorAll("[data-share]"), function (el) {
      var rede = el.getAttribute("data-share");
      if (destinos[rede]) { el.href = destinos[rede]; return; }
      if (rede !== "copiar") return;

      el.addEventListener("click", function () {
        var rotulo = el.querySelector(".fu-share-rotulo") || el;
        var original = rotulo.textContent;
        function avisar(msg) {
          rotulo.textContent = msg;
          setTimeout(function () { rotulo.textContent = original; }, 2000);
        }
        if (navigator.share) {
          navigator.share({ title: document.title, text: texto, url: url }).catch(function () {});
          return;
        }
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(url).then(function () { avisar("Copiado!"); },
                                                  function () { avisar("Copie da barra"); });
        } else {
          avisar("Copie da barra");
        }
      });
    });
  });
});
