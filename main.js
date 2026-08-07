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

  /* ---- submenu: no computador abre no hover (CSS), no celular precisa
         responder ao toque, senao simplesmente nao abre ---- */
  var itensComSub = document.querySelectorAll(".main-nav .tem-sub");
  itensComSub.forEach(function (item) {
    var gatilho = item.querySelector(":scope > a");
    if (!gatilho) return;

    gatilho.addEventListener("click", function (e) {
      // so intercepta quando o hover nao esta disponivel (toque)
      var temHover = window.matchMedia("(hover: hover)").matches;
      if (temHover) return;
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
