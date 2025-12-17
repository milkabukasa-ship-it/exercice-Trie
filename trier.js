function bubblesort(tableau) //on crée la fonction 
{
    let n=tableau.length ; // on définit la longeur de notre tableau
    for (let i=0;i<n-1;i++) //on défint la boucle qui s' occupe du nombre de tour 
        {
        for (let j=0;j<n-i-1;j++) //on définit la boucle qui va s' occuper de comparer chaque terme 
            {
            if (tableau[j]>tableau [j+1]) //on compare les termes 
                {
                let u=tableau[j] //le  processus qui va permettre d' interchanger les termes si la condition est respectée 
                tableau[j]=tableau[j+1]
                tableau[j+1]=u
            }
        }
    }return tableau //on retourne le tableau 
}
console.log (bubblesort([5,8,3,9,0])); // on appelle la fonction créer, merci coach
