export default class Person {
    constructor(name, cpf, income ) {
        this.name = name;
        this.cpf = cpf;
        this.income = income;
        this.tax = 0;
        this.allotment = 0;
}

    fixCPF() {
        this.cpf = this.cpf.replace("-","").replace(".","");
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
}