function calculImc(event)
{
    event.preventDefault();
    let taille = document.querySelector('#taille').value;
    let poids = document.querySelector('#poids').value;
    let imc = poids / ((taille/100) * (taille/ 100));
    result = document.querySelector("#result");
    result.textContent = "Vous avez un IMC de " + imc;
    return imc;
}  


function handleForm()
{
    let taille = document.querySelector('#taille').value;
    let poids = document.querySelector('#poids').value;
    console.log(taille, poids);
    return [poids, taille];
} 


function calcul(taille, poids)
{
    let imc = poids / ((taille/100) * (taille/ 100));
    console.log(imc);
    return imc;
}


function displayResult(imc)
{
    let result = document.querySelector("#result");
    result.textContent = "Vous avez un IMC de " + imc;
    
}

function finale(event)
{
    let taille = document.querySelector('#taille').value;
    let poids = document.querySelector('#poids').value;
    event.preventDefault();
    imc = calcul(taille, poids);
    displayResult(imc);
}
