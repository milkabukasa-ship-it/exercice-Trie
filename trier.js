function bubblesort(tableau){
    let n=tableau.length ;
    for (let i=0;i<n-1;i++){
        for (let j=0;j<n-i-1;j++){
            if (tableau[j]>tableau [j+1]){
                let u=tableau[j]
                tableau[j]=tableau[j+1]
                tableau[j+1]=u
            }
        }
    }return tableau
}
console.log (bubblesort([5,8,3,9,0]));
