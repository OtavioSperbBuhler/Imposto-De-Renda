function salarioL() {

    var nome = document.getElementById("nome").value
    var salarioBruto = document.getElementById("salarioBruto").value
    var linhaTabela = document.createElement("tr")
    var colunaSalarioBruto = document.createElement("td")
    var colunaNome = document.createElement("td")
    var colunaInss = document.createElement("td")
    var colunaIrpf = document.createElement("td")
    var colunaSalarioLiquido = document.createElement("td")

    colunaNome.innerText = nome
    colunaSalarioBruto.innerText = salarioBruto
    colunaInss.innerText = calculaInss(salarioBruto)
    colunaIrpf.innerText = calculaIrpf(salarioBruto)
    colunaSalarioLiquido.innerText = calculaSalarioLiquido(salarioBruto)

    linhaTabela.appendChild(colunaNome)
    linhaTabela.appendChild(colunaSalarioBruto)
    linhaTabela.appendChild(colunaInss)
    linhaTabela.appendChild(colunaIrpf)
    linhaTabela.appendChild(colunaSalarioLiquido)

    var element = document.getElementById("tabela")
    element.appendChild(linhaTabela)
}

function calculaInss(salarioBruto){
    var taxaInss
    var taxaInss1
    var taxaInss2
    var taxaInss3
    var taxaInss4
    var taxaInss5
    var descontoInss

    taxaInss1 = 1100 * 0.075;
    taxaInss2 = (2203.48 - 1100) * 0.09;
    taxaInss3 = (3305.22 - 2203.48) * 0.12;
    taxaInss4 = (6433.57 - 3305.22) * 0.14;
    taxaInss5 =  (salarioBruto -  6433.57) * 0.14;
    Number(taxaInss1.toFixed(2),taxaInss2.toFixed(2),taxaInss3.toFixed(2),taxaInss4.toFixed(2),taxaInss5.toFixed(2))

    if(salarioBruto < 1100){
      descontoInss = ((salarioBruto-1100)*0.075).toFixed(2)
}
    if(salarioBruto >= 1100 && salarioBruto <= 2203.48){
      descontoInss = ((1100*0.075)+(salarioBruto-1100)*0.09).toFixed(2)
}
    if(salarioBruto > 2203.48 && salarioBruto <= 3305.22){
      descontoInss = ((1100*0.075)+(2203.48-1100)*0.09+(salarioBruto-2203.48)*0.12).toFixed(2)
}
    if(salarioBruto > 3305.22){
      descontoInss = ((1100*0.075)+(2203.48-1100)*0.09+(3305.22-2203.4)*0.12+(salarioBruto-3305.22)*0.14).toFixed(2)
}

    return Number(descontoInss)
}

function calculaIrpf(salarioBruto) {
      var descontoIrpf;
      var baseCalc = (salarioBruto - calculaInss(salarioBruto))

    console.log("base de calculo --> "+baseCalc)
    if(baseCalc < 1903.98)
      return descontoIrpf=0;
    if (baseCalc => 1903.99 && baseCalc <= 2826.65)
      descontoIrpf = ((baseCalc * 0.075) - 142.80).toFixed(2)
    if (baseCalc > 2826.66 && baseCalc <= 3751.05)
      descontoIrpf = ((baseCalc * 0.15) - 354.80).toFixed(2)
    if (baseCalc > 3751.06 && baseCalc <= 4664.68)
      descontoIrpf = ((baseCalc * 0.225) - 636.13).toFixed(2)
    if (baseCalc > 4664.69)
      descontoIrpf = ((baseCalc * 0.275) - 869.36).toFixed(2)

    return Number(descontoIrpf)
}

function calculaSalarioLiquido(salarioBruto) {
    var salarioLiquido = (salarioBruto - (calculaInss(salarioBruto) + calculaIrpf(salarioBruto))).toFixed(2)

    return Number(salarioLiquido)
}

function reloadPage() {
    location.reload();
}
