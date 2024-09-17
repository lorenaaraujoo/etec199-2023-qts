import Person from './Person.js';

const urlParams = new URLSearchParams(window.location.search);

var name = urlParams.get("name");
var cpf = urlParams.get("cpf");
var income = urlParams.get("income");
var Pessoa = new Person(name, cpf, income);

if(Pessoa.isValidCpf() == false){
    alert ("Invalid CPF");
    window.location.href = "index.html";
}else {
    if(Pessoa.income < 0 || Pessoa.income == ""){
        alert ("Invalid income value!");
        window.location.href = "index.html";
    }else {
        Pessoa.calculateTax();
        Pessoa.calculateAllotment();
        console.log(Pessoa);

        var nameR = document.getElementById('name');
        var cpfR = document.getElementById('cpf');
        var incomeR = document.getElementById('income');
        var taxR = document.getElementById('tax');
        var allotmentR = document.getElementById('allotment');

        nameR.innerHTML = Pessoa.name;
        cpfR.innerHTML = Pessoa.cpf;
        incomeR.innerHTML = "R$" +Pessoa.income;
        if(Pessoa.tax == "Exempted"){
            taxR.innerHTML = "Exempted";
        }else {
            taxR.innerHTML = Pessoa.tax + "%";
        }
        if (Pessoa.allotment == "Exempted"){ 
            allotmentR.innerHTML = "Exempted";
        }else {
            allotmentR.innerHTML = "R$" +Pessoa.allotment;
        }
    }
}