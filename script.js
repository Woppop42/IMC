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
function displayDescription(imc)
{
    let description;
    if(imc < 18.5)
    {
         description = "La maigreur pathologique augmente le risque de maladies  et infections diverses. Elle peut également être non pathologique, c'est-à-dire constitutionnelle, stable et ne s'accompagnant d'aucun trouble.";
        
    } else if(imc > 18.5 && imc < 25)
    {
        description = "Corpulence normale, bornée par la maigreur et le surpoids.";
        
    }else if( imc >= 25 && imc < 30)
    {
        description = "Chez l'humain, le surpoids est défini par l'Organisation mondiale de la santé comme une accumulation anormale ou excessive de graisse qui présente un risque pour la santé.";
        
    }else if(imc >= 30 && imc < 35)
    {
        description = "L'obésité légère expose à 70% de risques supplémentaires d'insuffisance cardiaque.";
        
    }else if(imc >= 35 && imc < 40)
    {
        description = "L'obésité sévère rend l'adulte 12 fois plus susceptibles de développer un diabète de type 2, et le rend 22 fois plus à risque d'apnée du sommeil (par rapport aux pairs de poids normal).";
        
    }else if(imc > 40)
    {
        description = "L'obésité morbide expose à des complications très sévères telles que problèmes cardiovasculaires, insuffisance respiratoire avec hypoventilation alvéolaire ou encore cancer hépatique, pouvant aller jusqu'au décès.";
        
    }
    let descText = document.querySelector('#description');
    descText.textContent = description;
}

function finale(event)
{
    let taille = document.querySelector('#taille').value;
    let poids = document.querySelector('#poids').value;
    event.preventDefault();
    imc = calcul(taille, poids);
    displayResult(imc);
    displayDescription(imc);
}
