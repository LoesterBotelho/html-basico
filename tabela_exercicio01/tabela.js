const times = [
  { pos: 1, nome: "CA Paranaense PR", pts: 13, j: 6, apr: "72%", v: 4, sg: 6, jClasse: "destaque-azul", aprClasse: "apr-alta" },
  { pos: 2, nome: "Bahia", pts: 13, j: 6, apr: "72%", v: 4, sg: 3, jClasse: "destaque-azul", aprClasse: "apr-alta" },
  { pos: 3, nome: "Flamengo", pts: 11, j: 6, apr: "61%", v: 3, sg: 2, jClasse: "destaque-azul", aprClasse: "apr-media" },
  { pos: 4, nome: "Botafogo FR RJ", pts: 10, j: 6, apr: "56%", v: 3, sg: 5, jClasse: "destaque-azul", aprClasse: "apr-media" },
  { pos: 5, nome: "São Paulo FC SP", pts: 10, j: 6, apr: "56%", v: 3, sg: 4, jClasse: "destaque-azul", aprClasse: "apr-media" },
  { pos: 6, nome: "Cruzeiro", pts: 10, j: 5, apr: "67%", v: 3, sg: 1, jClasse: "destaque-laranja", aprClasse: "apr-media" },
  { pos: 7, nome: "Atletico Mineiro MG", pts: 9, j: 5, apr: "60%", v: 2, sg: 6, jClasse: "destaque-laranja", aprClasse: "apr-media" },
  { pos: 8, nome: "Red Bull Bragantino SP", pts: 9, j: 6, apr: "50%", v: 2, sg: 1, jClasse: "destaque-azul", aprClasse: "apr-media" },
  { pos: 9, nome: "Palmeiras SP", pts: 8, j: 6, apr: "44%", v: 2, sg: 0, jClasse: "destaque-azul", aprClasse: "apr-media" },
  { pos: 10, nome: "Internacional RS", pts: 7, j: 4, apr: "58%", v: 2, sg: 1, jClasse: "destaque-laranja", aprClasse: "apr-media" },
  { pos: 11, nome: "Fortaleza CE", pts: 7, j: 5, apr: "47%", v: 1, sg: 1, jClasse: "destaque-laranja", aprClasse: "apr-baixa" },
  { pos: 12, nome: "Gremio", pts: 6, j: 4, apr: "50%", v: 2, sg: 1, jClasse: "destaque-laranja", aprClasse: "apr-media" },
  { pos: 13, nome: "Vasco Gama", pts: 6, j: 6, apr: "33%", v: 2, sg: -5, jClasse: "destaque-azul", aprClasse: "apr-baixa" },
  { pos: 14, nome: "Criciúma", pts: 5, j: 3, apr: "56%", v: 1, sg: 4, jClasse: "destaque-laranja-escuro", aprClasse: "apr-media" },
  { pos: 15, nome: "EC Juventude RS", pts: 5, j: 4, apr: "42%", v: 1, sg: -2, jClasse: "destaque-laranja", aprClasse: "apr-baixa" },
  { pos: 16, nome: "Corinthians SP", pts: 5, j: 6, apr: "28%", v: 1, sg: -2, jClasse: "destaque-azul", aprClasse: "apr-baixa" },
  { pos: 17, nome: "Fluminense RJ", pts: 5, j: 6, apr: "28%", v: 1, sg: -4, jClasse: "destaque-azul", aprClasse: "apr-baixa" },
  { pos: 18, nome: "EC Vitória BA", pts: 1, j: 5, apr: "7%", v: 0, sg: -6, jClasse: "destaque-laranja", aprClasse: "apr-muito-baixa" },
  { pos: 19, nome: "AC Goianiense GO", pts: 1, j: 5, apr: "7%", v: 0, sg: -6, jClasse: "destaque-laranja", aprClasse: "apr-muito-baixa" },
  { pos: 20, nome: "Cuiabá Esporte Clube MT", pts: 0, j: 4, apr: "0%", v: 0, sg: -10, jClasse: "destaque-laranja", aprClasse: "apr-muito-baixa" }
];

const corpoTabela = document.getElementById("corpo-tabela");

times.forEach(item => {
  const tr = document.createElement("tr");

  tr.innerHTML = `
    <td>${item.pos}</td>
    <td class="col-time">${item.nome}</td>
    <td class="col-pts">${item.pts}</td>
    <td class="${item.jClasse}">${item.j}</td>
    <td class="${item.aprClasse}">${item.apr}</td>
    <td>${item.v}</td>
    <td>${item.sg}</td>
  `;

  corpoTabela.appendChild(tr);
});