/**
 * Comparador de remessa Japao -> Brasil
 *
 * COMO OS DADOS SAO MANTIDOS ATUALIZADOS
 * ---------------------------------------------------------------------
 * 1) COTACAO JPY -> BRL: muda a cada minuto, entao NUNCA fica fixa no
 *    codigo. A cada carregamento da pagina, o script busca a cotacao
 *    em tempo real em uma API publica gratuita:
 *      - 1a tentativa: Frankfurter (api.frankfurter.app), API do
 *        European Central Bank, sem chave/sem custo.
 *      - 2a tentativa (se a primeira falhar): open.er-api.com, tambem
 *        gratuita e sem chave.
 *      - Se as duas falharem, usamos uma cotacao de emergencia
 *        (FALLBACK_RATE, revisada manualmente) e avisamos claramente
 *        na tela que o valor pode estar desatualizado, pedindo para o
 *        usuario conferir/editar o campo antes de calcular.
 *    O campo de cotacao no formulario fica sempre editavel, para o
 *    usuario poder corrigir manualmente se quiser.
 *
 * 2) TARIFAS DOS PROVEDORES (Wise, Brastel, Remitly, bancos): essas
 *    empresas nao oferecem API publica confiavel, e mudam com bem
 *    menos frequencia (semanas/meses). Por isso ficam num objeto JSON
 *    (PROVIDERS, abaixo) com um campo "atualizadoEm" por provedor,
 *    revisado manualmente. A data mais antiga entre os provedores e
 *    exibida no aviso no topo da calculadora.
 *
 * 3) Independentemente da fonte, a pagina sempre deixa um aviso visivel
 *    de que os valores sao estimativas e que o usuario deve confirmar
 *    no simulador oficial do provedor antes de fechar a operacao —
 *    isso e importante tanto para a confianca do usuario (E-E-A-T)
 *    quanto para deixar claro que este site nao se responsabiliza por
 *    variacoes de tarifa.
 *
 * Fontes usadas na ultima revisao manual das tarifas (28/07/2026):
 *   - Wise: simulador oficial mostrou custo de 56.593 JPY ao enviar
 *     4.500.000 JPY (~1,26%) via saldo Wise. Estimativa geral: 1,3%.
 *   - Remitly: tarifa variavel por valor/velocidade; estimativa de
 *     mercado de custo total: 2,2%.
 *   - Brastel Remit: cambio calculado via cruzamento JPY -> USD -> BRL;
 *     estimativa de custo total: 1,8% (brastelremit.jp/por/fees).
 *   - Banco tradicional via SWIFT: tarifa fixa alta (~JPY 4.000) e
 *     cambio menos competitivo; estimativa de custo total: 4%.
 *   - IOF de 0,38% sobre recebimento do exterior (Decreto 12.466/2025)
 *     normalmente ja esta embutido na cotacao oferecida por corretoras
 *     de cambio autorizadas (como a Wise Brasil), entao NAO e somado
 *     de novo linha por linha — isso evitaria contar o imposto duas
 *     vezes. Ele e explicado separadamente no texto de apoio da pagina.
 */

(function () {
  // Cotacao de emergencia, usada apenas se as duas APIs falharem.
  // Revisar manualmente de tempos em tempos.
  var FALLBACK_RATE = 0.0311; // 1 JPY em BRL (referencia de 28/07/2026)
  var FALLBACK_RATE_DATE = "28/07/2026";

  var PROVIDERS_ATUALIZADO_EM = "julho de 2026";

  var PROVIDERS = [
    {
      id: "wise",
      nome: "Wise",
      custoPercent: 0.013,
      taxaFixaJPY: 0,
      velocidade: "Minutos (saldo Wise) a poucas horas",
      observacao: "Tarifa cai para valores mais altos (desconto acima do equivalente a USD 25.000).",
      url: "https://wise.com/br/send-money/send-money-to-brazil-from-japan",
      atualizadoEm: "28/07/2026"
    },
    {
      id: "brastel",
      nome: "Brastel Remit",
      custoPercent: 0.018,
      taxaFixaJPY: 0,
      velocidade: "Mesmo dia a 1 dia util",
      observacao: "Focado na comunidade brasileira no Japao; cambio melhora com o Cartao Brastel.",
      url: "https://brastelremit.jp/por/fees",
      atualizadoEm: "28/07/2026"
    },
    {
      id: "remitly",
      nome: "Remitly",
      custoPercent: 0.022,
      taxaFixaJPY: 0,
      velocidade: "Minutos a 1 dia util, conforme a opcao de entrega",
      observacao: "Costuma oferecer cambio promocional na primeira remessa; confira o valor padrao apos a promocao.",
      url: "https://www.remitly.com/jp/pt/providers-brazil/send-money-to-pix",
      atualizadoEm: "28/07/2026"
    },
    {
      id: "banco",
      nome: "Banco tradicional (SWIFT)",
      custoPercent: 0.02,
      taxaFixaJPY: 4000,
      velocidade: "2 a 5 dias uteis",
      observacao: "Tarifa fixa alta e cambio menos competitivo; costuma compensar so para valores muito altos.",
      url: null,
      atualizadoEm: "28/07/2026"
    }
  ];

  function formatBRL(value) {
    return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  }

  function calcular(amountJPY, rate) {
    return PROVIDERS.map(function (p) {
      var brutoBRL = amountJPY * rate;
      var custoVariavelBRL = brutoBRL * p.custoPercent;
      var custoFixoBRL = p.taxaFixaJPY * rate;
      var custoTotalBRL = custoVariavelBRL + custoFixoBRL;
      var liquidoBRL = brutoBRL - custoTotalBRL;
      var custoPercentEfetivo = (custoTotalBRL / brutoBRL) * 100;
      return {
        provider: p,
        brutoBRL: brutoBRL,
        custoTotalBRL: custoTotalBRL,
        custoPercentEfetivo: custoPercentEfetivo,
        liquidoBRL: liquidoBRL
      };
    }).sort(function (a, b) {
      return b.liquidoBRL - a.liquidoBRL;
    });
  }

  function render(results) {
    var tbody = document.getElementById("resultados-corpo");
    if (!tbody) return;
    tbody.innerHTML = "";
    results.forEach(function (r, index) {
      var tr = document.createElement("tr");
      if (index === 0) tr.className = "best-row";
      var nomeCell = r.provider.nome + (index === 0 ? '<span class="pill-best">Melhor valor</span>' : "");
      tr.innerHTML =
        "<td>" + nomeCell + "</td>" +
        "<td>" + formatBRL(r.liquidoBRL) + "</td>" +
        "<td>" + formatBRL(r.custoTotalBRL) + " (" + r.custoPercentEfetivo.toFixed(2) + "%)</td>" +
        "<td>" + r.provider.velocidade + "</td>";
      tbody.appendChild(tr);
    });

    var obsList = document.getElementById("resultados-observacoes");
    if (obsList) {
      obsList.innerHTML = "";
      results.forEach(function (r) {
        var li = document.createElement("li");
        var linkHtml = r.provider.url
          ? ' <a href="' + r.provider.url + '" target="_blank" rel="noopener nofollow">simulador oficial</a>.'
          : "";
        li.innerHTML = "<strong>" + r.provider.nome + ":</strong> " + r.provider.observacao + linkHtml;
        obsList.appendChild(li);
      });
    }

    var resultsWrap = document.getElementById("resultados-wrap");
    if (resultsWrap) resultsWrap.hidden = false;
  }

  function handleSubmit(event) {
    event.preventDefault();
    var amountInput = document.getElementById("valor-jpy");
    var rateInput = document.getElementById("cotacao-referencia");
    var amount = parseFloat(amountInput.value);
    var rate = parseFloat(rateInput.value) || FALLBACK_RATE;

    if (!amount || amount <= 0) {
      amountInput.focus();
      return;
    }

    var results = calcular(amount, rate);
    render(results);

    var resultsWrap = document.getElementById("resultados-wrap");
    if (resultsWrap) resultsWrap.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function setRateStatus(message, isError) {
    var statusEl = document.getElementById("cotacao-status");
    if (!statusEl) return;
    statusEl.textContent = message;
    statusEl.style.color = isError ? "#b45309" : "";
  }

  function agora() {
    var d = new Date();
    return d.toLocaleDateString("pt-BR") + " " + d.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
  }

  // Tenta Frankfurter primeiro; se falhar, tenta open.er-api.com;
  // se as duas falharem, usa a cotacao de emergencia (FALLBACK_RATE).
  function buscarCotacaoAoVivo() {
    var rateInput = document.getElementById("cotacao-referencia");
    if (!rateInput) return;

    setRateStatus("Buscando cotacao atual...", false);

    fetch("https://api.frankfurter.app/latest?from=JPY&to=BRL")
      .then(function (res) {
        if (!res.ok) throw new Error("frankfurter falhou");
        return res.json();
      })
      .then(function (data) {
        var rate = data && data.rates && data.rates.BRL;
        if (!rate) throw new Error("sem taxa BRL");
        rateInput.value = rate.toFixed(6);
        setRateStatus("Cotacao ao vivo (Frankfurter/ECB) obtida em " + agora() + ".", false);
      })
      .catch(function () {
        // segunda tentativa
        fetch("https://open.er-api.com/v6/latest/JPY")
          .then(function (res) {
            if (!res.ok) throw new Error("er-api falhou");
            return res.json();
          })
          .then(function (data) {
            var rate = data && data.rates && data.rates.BRL;
            if (!rate) throw new Error("sem taxa BRL");
            rateInput.value = rate.toFixed(6);
            setRateStatus("Cotacao ao vivo (open.er-api.com) obtida em " + agora() + ".", false);
          })
          .catch(function () {
            rateInput.value = FALLBACK_RATE;
            setRateStatus(
              "Nao foi possivel buscar a cotacao ao vivo agora. Usando cotacao de referencia de " +
                FALLBACK_RATE_DATE +
                " (" + FALLBACK_RATE + "). Confira e edite o campo antes de calcular.",
              true
            );
          });
      });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("form-calculadora-remessa");
    var tarifasBadge = document.getElementById("tarifas-atualizado-em");
    if (tarifasBadge) tarifasBadge.textContent = PROVIDERS_ATUALIZADO_EM;
    if (form) form.addEventListener("submit", handleSubmit);
    buscarCotacaoAoVivo();
  });
})();
