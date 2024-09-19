const imiona = ["Anna", "Marek", "Kasia", "Piotr", "Ewa"];

for (let i = 0; i < imiona.length; i++) {
    if (i === 2) {
        console.log(imiona[i]); 
        break; 
    }
}


const imiona = ["Anna", "Marek", "Kasia", "Piotr", "Ewa"];
let i = 0;

while (i < imiona.length) {
    if (i === 2) {
        console.log(imiona[i]); 
        break; 
    }
    i++;
}




const imiona = ["Anna", "Marek", "Kasia", "Piotr", "Ewa"];
let i = 0;

for (const imie of imiona) {
    if (i === 2) {
        console.log(imie); 
        break; 
    }
    i++;
}
