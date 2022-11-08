// pour avoir une liste
// const touches =document.querySelectorAll('.bouton');
//pour avoir une liste sous forme de tableau
const touches =[...document.querySelectorAll('.bouton')];
// console.log(touches);
// on utilise map pour récupérer les datasets du tableau précedent
const listeKeycode=touches.map(touche =>touche.dataset.key);
// console.log(listeKeycode);
const ecran=document.querySelector('.ecran')
// console.log(ecran);
// document.addEventListener('keydown',(e)=>console.log(e))
// affiche KeyboardEvent {isTrusted: true, key: '5', code: 'Numpad5', location: 3, ctrlKey: false, …}


document.addEventListener('keydown',(e)=> {
    const valeur = e.keyCode.toString();
    calculer(valeur)
    // console.log(valeur,typeof valeur);
})
document.addEventListener('click',(e)=> {
    // console.log(e);
    //on veut récupérer target puis le dataset contenut dans target
    const valeur=e.target.dataset.key
    calculer(valeur)
    // console.log(valeur,typeof valeur);
})

const calculer = (valeur)=>{
    //on verifie si la touches fait partie des touches de la calculatrice
    if(listeKeycode.includes(valeur)){
switch (valeur) {
    case '8':
        // si c est actionné on vide l'ecran
   ecran.textContent="" ; 
   console.log('touche c');   
   case '13':
    // si entrée est actionné on evalu le contenu de l'ecran et affiche le resulta su calcul
   const calcul = eval(ecran.textContent);
   ecran.textContent=calcul;
   console.log('touche entrée');
   break;
   default:
    const indexKeycode=listeKeycode.indexOf(valeur);
    console.log(indexKeycode);
    const touche = touches[indexKeycode]
    console.log(touche);
    ecran.textContent+=touche.innerHTML;
}
        
    }
    else{
        console.log("code non valide");
    }
}
   
window.addEventListener('error',(e) => 
alert('les calculs sont pas bon kevin!!! '+ e.message)
)

