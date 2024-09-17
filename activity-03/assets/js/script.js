const form = document.getElementById('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const bmi = (weight / (height * height)).toFixed(2);

    if (!isNaN(bmi)) {
        const value = document.getElementById('value');
        let description = '';

        value.classList.add('attention');
        
        document.getElementById('infos').classList.remove('hidden');
    
        if (bmi < 18.5){
            description = 'Be careful! You are underweight!';
        } else if (bmi >= 18.5 && bmi <= 25) {
            description = "You are at the ideal weight!";
            value.classList.remove('attention');
            value.classList.add('normal');
        } else if (bmi >= 25 && bmi < 30) {
            description = "Be careful! You are overweight!";
        } else if (bmi >= 30 && bmi < 35) {
            description = "Be careful! You are moderately obese!";
        } else if (bmi >= 35 && bmi < 40) {
            description = "Be careful! You are severely obese!";
        } else {
            description = "Be careful! You are morbidly obese!";
        }

        value.textContent = bmi.replace('.', ',');
        document.getElementById('description').textContent = description;
        }
    });

    form.addEventListener('keypress', function(event) {
        if (event.key === 'press') {
            document.getElementById('#calculate').click();
        }
    });