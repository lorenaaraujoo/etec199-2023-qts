import Person from './Person.js';

const urlParams = new URLSearchParams(window.location.search);

var name = urlParams.get("name");
var cpf = urlParams.get("cpf");
var income = urlParams.get("income");
var Pessoa = new Person(name, cpf, income);

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
taxR.innerHTML = Pessoa.tax;
if (Pessoa.allotment == "Exempted"){ 
    allotmentR.innerHTML = "Exempted";
}else {
allotmentR.innerHTML = "R$" +Pessoa.allotment;
}