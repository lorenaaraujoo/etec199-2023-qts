export default class Person {
    constructor(name, cpf, income ) {
        this.name = name;
        this.cpf = cpf;
        this.income = income;
        this.tax = 0;
        this.allotment = 0;
}
    calculateTax() {
        if (this.income <= 22847.76){
            this.tax = "Exempted";
        }else if (this.income >= 22847.76 && this.income <= 33919.80){
            this.tax = 7.5;
        }else if (this.income >= 33919.80 && this.income <=45012.60){
            this.tax = 15;
        }else if (this.income >= 45012.60 && this.income <= 55976.16){
            this.tax = 22.5;
        }else if (this.income > 55976.16){
            this.tax = 27.5;
        }
    }

    calculateAllotment(){
        if(this.tax == "Exempted"){
        this.allotment = "Exempted";
        }else{
            this.allotment = this.income * (this.tax / 100);
            this.allotment = this.allotment.toFixed(2);
        }
    }

    isValidCpf(){
        var sum = 0;
        var rest;
        var i;
        var cpf = this.cpf;
        cpf = cpf.replace(/\./g, '');
        cpf = cpf.replace('-', '');
        cpf = cpf.split('');

        for (i=1; i<=9; i++) sum = sum + parseInt(cpf[i-1]) * (11 - i);
        rest = (sum * 10) % 11;

        if ((rest == 10) || (rest == 11))  rest = 0;
        if (rest != parseInt(cpf[9])) return false;

        sum = 0;
        for (i = 1; i <= 10; i++) sum = sum + parseInt(cpf[i-1]) * (12 - i);
        rest = (sum * 10) % 11;

        if ((rest == 10) || (rest == 11))  rest = 0;
        if (rest != parseInt(cpf[10])) return false;
        return true;
    }
}