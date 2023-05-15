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

